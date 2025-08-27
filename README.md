# Nepal Tourism Website Backend

A complete backend solution for handling contact forms with admin dashboard for a Nepal tourism website.

## Features

- 🚀 **Express.js Backend** with contact form API
- 📧 **Email Integration** with nodemailer
- 🗄️ **Database Support** (SQLite for development, PostgreSQL for production)
- 🛡️ **Security Features** (Rate limiting, input validation, spam detection)
- 📊 **Admin Dashboard** for managing contact submissions
- 🎨 **Responsive UI** for both contact form and admin panel

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000

# SMTP Email Configuration (Required for email functionality)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Admin Email (where contact forms will be sent)
ADMIN_EMAIL=admin@yourwebsite.com

# Database Configuration (Optional - SQLite used by default)
# For PostgreSQL in production:
# DB_HOST=localhost
# DB_PORT=5432
# DB_NAME=contact_form
# DB_USER=your_db_user
# DB_PASS=your_db_password
```

### 3. Email Setup

#### Gmail Setup:
1. Enable 2-factor authentication
2. Generate an app-specific password
3. Use the app password in `SMTP_PASS`

#### Other Email Providers:
- **Outlook/Hotmail**: `smtp-mail.outlook.com:587`
- **Yahoo**: `smtp.mail.yahoo.com:587`
- **Custom/cPanel**: Use your hosting provider's SMTP settings

### 4. Start the Server

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

### 5. Test the Setup

1. **Contact Form**: Open `contact-form.html` in your browser
2. **Admin Dashboard**: Navigate to `admin.html`
3. **API Health Check**: Visit `http://localhost:3000/api/health`

## Project Structure

```
nepal_tourism_website/
├── config/
│   └── database.js          # Database configuration
├── models/
│   ├── Contact.js           # Contact model definition
│   └── ContactModel.js      # Alternative contact model
├── data/                    # SQLite database storage
├── server.js                # Main server file
├── contact.js               # Frontend contact form handler
├── admin.js                 # Admin dashboard JavaScript
├── contact-form.html        # Test contact form
├── admin.html              # Admin dashboard
├── index.html              # Main website
├── script.js               # Main website JavaScript
├── styles.css              # Website styles
├── .env                    # Environment variables
└── package.json            # Project dependencies
```

## API Endpoints

### Public Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check

### Admin Endpoints

- `GET /api/admin/contacts` - List all contacts with pagination
- `GET /api/admin/contacts/:id` - Get specific contact details
- `GET /api/admin/stats` - Get contact statistics
- `PATCH /api/admin/contacts/:id` - Update contact status
- `POST /api/admin/contacts/:id/spam` - Mark contact as spam

## Database

### Development
- Uses SQLite database stored in `data/contacts.db`
- Automatically created on first run

### Production
- Configure PostgreSQL in environment variables
- Set `NODE_ENV=production`

## Security Features

- **Rate Limiting**: 5 submissions per 15 minutes per IP
- **Input Validation**: Server-side validation with express-validator
- **Spam Detection**: Basic keyword-based spam filtering
- **CORS Protection**: Configurable allowed origins
- **SQL Injection Protection**: Sequelize ORM prevents SQL injection

## Frontend Integration

### Contact Form Integration

Include the contact form handler in your HTML:

```html
<script src="contact.js"></script>
```

Required HTML elements:
- Form with id `contactForm`
- Input fields with ids: `name`, `email`, `subject`, `message`
- Submit button
- Optional: `formMessage` div for status messages
- Optional: `formLoading` div for loading indicator

### Admin Dashboard

Access the admin dashboard at `/admin.html` to:
- View all contact submissions
- Filter by status (new, read, replied, archived)
- Mark messages as spam
- Update contact status
- Export contacts as CSV
- View statistics

## Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| PORT | Server port | 3000 | No |
| NODE_ENV | Environment | development | No |
| FRONTEND_URL | CORS origin | http://localhost:3000 | No |
| SMTP_HOST | Email server host | - | Yes |
| SMTP_PORT | Email server port | 587 | No |
| SMTP_USER | Email username | - | Yes |
| SMTP_PASS | Email password | - | Yes |
| ADMIN_EMAIL | Recipient email | - | Yes |
| DB_HOST | Database host | - | No |
| DB_PORT | Database port | 5432 | No |
| DB_NAME | Database name | - | No |
| DB_USER | Database user | - | No |
| DB_PASS | Database password | - | No |

## Deployment

### Heroku

1. Create a Heroku app
2. Add PostgreSQL addon: `heroku addons:create heroku-postgresql:hobby-dev`
3. Set environment variables: `heroku config:set VARIABLE=value`
4. Deploy: `git push heroku main`

### VPS/Server

1. Install Node.js and PostgreSQL
2. Clone the repository
3. Set up environment variables
4. Use PM2 for process management: `pm2 start server.js`
5. Set up reverse proxy with Nginx

## Troubleshooting

### Port Already in Use Error
If you get `EADDRINUSE: address already in use :::3000`:

**Windows:**
```bash
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with actual process ID)
taskkill /F /PID <PID>

# Or kill all Node processes
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force
```

**Linux/Mac:**
```bash
# Find and kill process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm start
```

### Email Not Sending
- Check SMTP credentials in `.env` file
- Verify firewall/network settings
- For Gmail: Use app-specific password, not regular password
- Test with a simple email service first

### Database Issues
- Ensure `data` directory exists and is writable
- Delete `data/contacts.db` if database gets corrupted
- Check PostgreSQL connection for production
- If getting infinite database sync loops, set `sync({ force: false })`

### CORS Errors
- Set `FRONTEND_URL` to your frontend domain in `.env`
- Check browser console for detailed errors
- Ensure your frontend and backend are on allowed origins

## Development

### Adding New Features

1. **New Model Fields**: Update `models/Contact.js`
2. **New API Endpoints**: Add routes in `server.js`
3. **Frontend Updates**: Modify `contact.js` or `admin.js`

### Testing

```bash
# Install test dependencies
npm install --save-dev jest supertest

# Run tests
npm test
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For issues and questions:
1. Check the troubleshooting section
2. Review environment variable setup
3. Check server logs for detailed error messages
4. Create an issue on GitHub with detailed information

## Complete Setup Process

### Prerequisites
- Node.js (v14 or higher)
- Python (for serving static files)
- Gmail account (for email functionality)

### Step-by-Step Setup

#### 1. Clone and Install
```bash
# Clone the repository
git clone <repository-url>
cd nepal_tourism_website

# Install dependencies
npm install
```

#### 2. Environment Configuration
Create a `.env` file in the root directory:
```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:8080

# SMTP Email Configuration (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Admin Email (where contact forms will be sent)
ADMIN_EMAIL=your-email@gmail.com
```

#### 3. Gmail Setup for Email
1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password:
   - Go to Security → 2-Step Verification → App passwords
   - Select "Mail" and generate password
   - Use this password in `SMTP_PASS`

#### 4. Start the Application

**Option A: Using Batch File (Recommended)**
```bash
cd "d:\Aaltu Faaltu\nepal_tourism_website" && .\start-website.bat
```

**Option B: Manual Start**
```bash
# Terminal 1: Start Backend
node server.js

# Terminal 2: Start Frontend
python -m http.server 8080
```

**Option C: Using NPM Scripts**
```bash
# Terminal 1: Start Backend
npm run dev

# Terminal 2: Start Frontend  
python -m http.server 8080
```

#### 5. Access Your Application
- **🏠 Main Website**: http://localhost:8080
- **📧 Contact Form Test**: http://localhost:8080/contact-form.html
- **⚙️ Admin Dashboard**: http://localhost:8080/admin.html
- **🔧 Backend API**: http://localhost:3000

#### 6. Test the Setup
1. **Health Check**: Visit http://localhost:3000/api/health
2. **Contact Form**: 
   - Go to http://localhost:8080
   - Scroll to contact section
   - Fill and submit the form
3. **Admin Dashboard**: 
   - Visit http://localhost:8080/admin.html
   - Check if your test message appears
4. **Email**: Check your email for auto-reply

### Quick Start Commands

```bash
# Full setup (first time)
npm install
# Create .env file with your credentials
.\start-website.bat

# Daily usage
.\start-website.bat

# Stop servers
# Press Ctrl+C in terminals or close command windows
```

### Verification Checklist

- [ ] Backend server running on port 3000
- [ ] Frontend server running on port 8080  
- [ ] Contact form submits successfully
- [ ] Email notifications working
- [ ] Admin dashboard accessible
- [ ] Database storing contacts

### Common Issues and Solutions

**Port 3000 already in use:**
```bash
# Kill existing processes
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force
```

**Email not working:**
- Verify Gmail app password is correct
- Check firewall/antivirus settings
- Ensure 2FA is enabled on Gmail

**Form not submitting:**
- Check browser console for errors
- Verify both servers are running
- Test API directly: http://localhost:3000/api/health

**Admin dashboard empty:**
- Submit a test contact form first
- Check backend console for database errors
- Verify database file exists in `data/` folder


Started backend server (npm run dev)
Started frontend server (python -m http.server 8080)#   n e p a l - t o u r i s m - w e b s i t e  
 #   n e p a l - t o u r i s m - w e b s i t e  
 