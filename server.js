const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const { sequelize } = require('./config/database');
require('dotenv').config();

// Initialize Contact model with sequelize instance
const Contact = require('./models/Contact')(sequelize);

const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Create transporter for sending emails with production configuration
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    },
    tls: {
        rejectUnauthorized: NODE_ENV === 'production'
    }
});

// Security and performance middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdn.pixabay.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            imgSrc: ["'self'", "data:", "https:", "http:"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            connectSrc: ["'self'"]
        }
    }
}));

app.use(compression());

// Logging middleware
if (NODE_ENV === 'production') {
    app.use(morgan('combined'));
} else {
    app.use(morgan('dev'));
}

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: NODE_ENV === 'production' ? 100 : 1000, // limit each IP to 100 requests per windowMs in production
    message: {
        error: 'Too many requests from this IP, please try again later.',
        retryAfter: '15 minutes'
    },
    standardHeaders: true,
    legacyHeaders: false
});

const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: NODE_ENV === 'production' ? 5 : 50, // limit each IP to 5 contact form submissions per hour in production
    message: {
        error: 'Too many contact form submissions, please try again later.',
        retryAfter: '1 hour'
    },
    standardHeaders: true,
    legacyHeaders: false
});

app.use(limiter);

// Production-ready middleware configuration
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use(cors({
    origin: function (origin, callback) {
        const allowedOrigins = [
            'http://localhost:8080',
            'http://localhost:3000',
            process.env.FRONTEND_URL
        ].filter(Boolean);
        
        // Allow requests with no origin (mobile apps, etc.)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}));

// Enhanced contact form rate limiting  
app.use('/api/contact', contactLimiter);

// Simple spam detection
const spamKeywords = ['viagra', 'casino', 'lottery', 'winner', 'congratulations', 'free money', 'click here'];

function detectSpam(text) {
    const lowerText = text.toLowerCase();
    return spamKeywords.some(keyword => lowerText.includes(keyword));
}

// Validation middleware
const contactValidation = [
    body('name')
        .trim()
        .isLength({ min: 2, max: 100 })
        .matches(/^[a-zA-Z\s\-'\.]+$/)
        .withMessage('Name must be 2-100 characters and contain only letters, spaces, hyphens, apostrophes, and periods'),
    
    body('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('Please provide a valid email address'),
    
    body('subject')
        .optional()
        .trim()
        .isLength({ max: 200 })
        .withMessage('Subject must be less than 200 characters'),
    
    body('message')
        .trim()
        .isLength({ min: 10, max: 2000 })
        .withMessage('Message must be between 10 and 2000 characters')
];

// Routes

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString()
    });
});

// Contact form submission
app.post('/api/contact', contactLimiter, contactValidation, async (req, res) => {
    try {
        // Check validation results
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: errors.array()
            });
        }

        const { name, email, subject, message } = req.body;

        // Check for spam
        const isSpam = detectSpam(message) || detectSpam(subject || '') || detectSpam(name);

        // Create contact record
        const contact = await Contact.create({
            name,
            email,
            subject: subject || 'No Subject',
            message,
            ipAddress: req.ip,
            userAgent: req.get('User-Agent'),
            isSpam,
            status: isSpam ? 'archived' : 'new'
        });

        // Send emails only if not spam
        if (!isSpam && process.env.SMTP_USER && process.env.ADMIN_EMAIL) {
            try {
                // Send notification to admin
                await transporter.sendMail({
                    from: process.env.SMTP_USER,
                    to: process.env.ADMIN_EMAIL,
                    subject: `New Contact Form Submission - ${subject || 'No Subject'}`,
                    html: `
                        <h2>New Contact Form Submission</h2>
                        <p><strong>Reference ID:</strong> ${contact.id}</p>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
                        <p><strong>Message:</strong></p>
                        <div style="background: #f5f5f5; padding: 10px; border-radius: 5px;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
                        <p><strong>IP Address:</strong> ${req.ip}</p>
                    `
                });

                // Send auto-reply to user
                await transporter.sendMail({
                    from: process.env.SMTP_USER,
                    to: email,
                    subject: 'Thank you for contacting Nepal Tourism',
                    html: `
                        <h2>Thank you for your message!</h2>
                        <p>Dear ${name},</p>
                        <p>We have received your message and will get back to you as soon as possible.</p>
                        <p><strong>Reference ID:</strong> ${contact.id}</p>
                        <p><strong>Your message:</strong></p>
                        <div style="background: #f5f5f5; padding: 10px; border-radius: 5px;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                        <p>Best regards,<br>Nepal Tourism Team</p>
                    `
                });

                console.log(`Emails sent for contact ID: ${contact.id}`);
            } catch (emailError) {
                console.error('Email sending failed:', emailError);
                // Don't return error to user if contact was saved successfully
            }
        }

        const responseMessage = isSpam 
            ? 'Message received and under review.'
            : 'Message sent successfully! We\'ll get back to you soon.';

        res.json({
            success: true,
            message: responseMessage,
            referenceId: contact.id
        });

    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

// Admin endpoints

// Get all contacts with pagination and filtering
app.get('/api/admin/contacts', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const status = req.query.status;
        const offset = (page - 1) * limit;

        const whereClause = {};
        if (status && status !== 'all') {
            whereClause.status = status;
        }

        const { count, rows } = await Contact.findAndCountAll({
            where: whereClause,
            order: [['createdAt', 'DESC']],
            limit,
            offset
        });

        res.json({
            success: true,
            contacts: rows,
            pagination: {
                page,
                limit,
                total: count,
                pages: Math.ceil(count / limit)
            }
        });
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch contacts'
        });
    }
});

// Get contact statistics
app.get('/api/admin/stats', async (req, res) => {
    try {
        const stats = await Contact.getStats();
        res.json({
            success: true,
            stats
        });
    } catch (error) {
        console.error('Error fetching stats:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch statistics'
        });
    }
});

// Get specific contact
app.get('/api/admin/contacts/:id', async (req, res) => {
    try {
        const contact = await Contact.findByPk(req.params.id);
        
        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found'
            });
        }

        res.json({
            success: true,
            contact
        });
    } catch (error) {
        console.error('Error fetching contact:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch contact'
        });
    }
});

// Update contact status
app.patch('/api/admin/contacts/:id', async (req, res) => {
    try {
        const { status } = req.body;
        const validStatuses = ['new', 'read', 'replied', 'archived'];
        
        if (!validStatuses.includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid status'
            });
        }

        const contact = await Contact.findByPk(req.params.id);
        
        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found'
            });
        }

        await contact.update({ status });

        res.json({
            success: true,
            message: 'Contact status updated',
            contact
        });
    } catch (error) {
        console.error('Error updating contact:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update contact'
        });
    }
});

// Mark contact as spam
app.post('/api/admin/contacts/:id/spam', async (req, res) => {
    try {
        const contact = await Contact.findByPk(req.params.id);
        
        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found'
            });
        }

        await contact.markAsSpam();

        res.json({
            success: true,
            message: 'Contact marked as spam',
            contact
        });
    } catch (error) {
        console.error('Error marking as spam:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to mark as spam'
        });
    }
});

// Serve static files for admin dashboard
app.use(express.static('.'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({
        success: false,
        message: 'Internal server error'
    });
});

// Start server
app.listen(PORT, async () => {
    console.log(`Contact form server running on port ${PORT}`);
    
    // Check environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.ADMIN_EMAIL) {
        console.log('Required environment variables:');
        console.log('- SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS');
        console.log('- ADMIN_EMAIL (where contact forms will be sent)');
        console.log('- FRONTEND_URL (optional, for CORS)');
        console.log('- Database: DB_NAME, DB_USER, DB_PASS (for PostgreSQL)');
    }
    
    // Test database connection
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully.');
        
        // Sync database
        await sequelize.sync({ force: false });
        console.log('Database synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
