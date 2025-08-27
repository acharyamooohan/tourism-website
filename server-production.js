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

// Security middleware
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

// Performance middleware
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
    max: NODE_ENV === 'production' ? 100 : 1000,
    message: {
        error: 'Too many requests from this IP, please try again later.',
        retryAfter: '15 minutes'
    },
    standardHeaders: true,
    legacyHeaders: false
});

const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: NODE_ENV === 'production' ? 5 : 50,
    message: {
        error: 'Too many contact form submissions, please try again later.',
        retryAfter: '1 hour'
    }
});

app.use(limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// CORS configuration
app.use(cors({
    origin: function (origin, callback) {
        const allowedOrigins = [
            'http://localhost:8080',
            'http://localhost:3000',
            process.env.FRONTEND_URL
        ].filter(Boolean);
        
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

// Static file serving with caching
app.use(express.static('.', {
    maxAge: NODE_ENV === 'production' ? '1d' : '0',
    etag: true,
    lastModified: true
}));

// Spam detection
const spamKeywords = ['viagra', 'casino', 'lottery', 'winner', 'congratulations', 'free money', 'click here'];

function detectSpam(text) {
    const lowerText = text.toLowerCase();
    return spamKeywords.some(keyword => lowerText.includes(keyword));
}

// Enhanced validation
const contactValidation = [
    body('name')
        .trim()
        .isLength({ min: 2, max: 100 })
        .withMessage('Name must be between 2 and 100 characters')
        .matches(/^[a-zA-Z\s]+$/)
        .withMessage('Name must contain only letters and spaces'),
    body('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('Please provide a valid email address')
        .isLength({ max: 255 })
        .withMessage('Email is too long'),
    body('message')
        .trim()
        .isLength({ min: 10, max: 2000 })
        .withMessage('Message must be between 10 and 2000 characters')
        .custom((value) => {
            if (detectSpam(value)) {
                throw new Error('Message contains inappropriate content');
            }
            return true;
        })
];

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: NODE_ENV,
        version: process.env.npm_package_version || '1.0.0'
    });
});

// API Routes
app.get('/api/destinations', async (req, res) => {
    try {
        const { destinations } = require('./destinations-data-clean');
        res.json({
            success: true,
            count: destinations.length,
            data: destinations
        });
    } catch (error) {
        console.error('Error fetching destinations:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch destinations'
        });
    }
});

// Contact form endpoint with enhanced security
app.post('/api/contact', contactLimiter, contactValidation, async (req, res) => {
    try {
        // Validate request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                error: 'Validation failed',
                details: errors.array()
            });
        }

        const { name, email, message } = req.body;

        // Additional spam check on name
        if (detectSpam(name)) {
            return res.status(400).json({
                success: false,
                error: 'Invalid content detected'
            });
        }

        // Save to database
        const contact = await Contact.create({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            message: message.trim()
        });

        // Send email notification (if configured)
        if (process.env.SMTP_USER && process.env.SMTP_PASS) {
            const mailOptions = {
                from: process.env.SMTP_USER,
                to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
                subject: `New Contact Form Submission - Nepal Tourism`,
                html: `
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message.replace(/\n/g, '<br>')}</p>
                    <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
                `,
                replyTo: email
            };

            try {
                await transporter.sendMail(mailOptions);
                console.log('Notification email sent successfully');
            } catch (emailError) {
                console.error('Failed to send notification email:', emailError);
                // Don't fail the request if email fails
            }
        }

        res.status(201).json({
            success: true,
            message: 'Thank you for your message! We will get back to you soon.',
            id: contact.id
        });

    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to process your message. Please try again later.'
        });
    }
});

// Get all contacts (admin endpoint - should be protected in production)
app.get('/api/contacts', async (req, res) => {
    try {
        // In production, add authentication middleware here
        if (NODE_ENV === 'production' && !req.headers.authorization) {
            return res.status(401).json({
                success: false,
                error: 'Unauthorized'
            });
        }

        const contacts = await Contact.findAll({
            order: [['createdAt', 'DESC']],
            limit: parseInt(req.query.limit) || 100,
            offset: parseInt(req.query.offset) || 0
        });

        res.json({
            success: true,
            count: contacts.length,
            data: contacts
        });
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch contacts'
        });
    }
});

// API documentation endpoint
app.get('/api', (req, res) => {
    res.json({
        name: 'Nepal Tourism API',
        version: '1.0.0',
        description: 'API for Nepal Tourism Website',
        endpoints: {
            'GET /health': 'Health check',
            'GET /api/destinations': 'Get all destinations',
            'POST /api/contact': 'Submit contact form',
            'GET /api/contacts': 'Get all contacts (admin only)'
        },
        documentation: 'https://your-domain.com/api-docs'
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    
    if (err.message === 'Not allowed by CORS') {
        return res.status(403).json({
            success: false,
            error: 'CORS policy violation'
        });
    }
    
    res.status(500).json({
        success: false,
        error: NODE_ENV === 'production' ? 'Internal server error' : err.message
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: 'Endpoint not found'
    });
});

// Graceful shutdown
process.on('SIGTERM', async () => {
    console.log('SIGTERM received, shutting down gracefully');
    await sequelize.close();
    process.exit(0);
});

process.on('SIGINT', async () => {
    console.log('SIGINT received, shutting down gracefully');
    await sequelize.close();
    process.exit(0);
});

// Start server
const startServer = async () => {
    try {
        // Test database connection
        await sequelize.authenticate();
        console.log('✅ Database connection established successfully');
        
        // Sync database
        await sequelize.sync();
        console.log('✅ Database synchronized');
        
        // Start listening
        const server = app.listen(PORT, () => {
            console.log(`🚀 Nepal Tourism Server running on port ${PORT}`);
            console.log(`📍 Environment: ${NODE_ENV}`);
            console.log(`🔗 Local: http://localhost:${PORT}`);
            if (NODE_ENV === 'development') {
                console.log(`📝 API Documentation: http://localhost:${PORT}/api`);
                console.log(`💚 Health Check: http://localhost:${PORT}/health`);
            }
        });

        // Handle server errors
        server.on('error', (error) => {
            if (error.code === 'EADDRINUSE') {
                console.error(`❌ Port ${PORT} is already in use`);
                process.exit(1);
            } else {
                console.error('❌ Server error:', error);
            }
        });

    } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
};

startServer();
