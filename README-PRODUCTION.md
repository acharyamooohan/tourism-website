# Nepal Tourism Website 🏔️

A production-ready tourism website showcasing 102+ unique destinations across Nepal, built with Node.js, Express, and modern web technologies.

## 🌟 Features

- **Comprehensive Destination Database**: 102+ unique destinations with detailed information
- **Interactive Contact System**: Rate-limited contact form with spam protection
- **Production-Ready Architecture**: Security, performance, and monitoring built-in
- **RESTful API**: Clean API endpoints for destinations and contact management
- **Database Integration**: SQLite for development, PostgreSQL for production
- **Email Notifications**: Automated email alerts for new contact submissions
- **Security Features**: Helmet, CORS, rate limiting, input validation
- **Performance Optimization**: Compression, caching, static asset optimization

## 🚀 Quick Start

### Development

```bash
# Clone the repository
git clone https://github.com/your-username/nepal-tourism-website.git
cd nepal-tourism-website

# Install dependencies
npm install

# Set up environment variables
cp .env.production.example .env
# Edit .env with your configuration

# Start development server
npm run dev
```

### Production Deployment

```bash
# Install production dependencies
npm run build

# Start with PM2 (recommended)
npm install -g pm2
npm run pm2:start

# Or start directly
npm run production
```

## 📁 Project Structure

```
nepal-tourism-website/
├── server-production.js          # Production-ready server
├── destinations-data-clean.js    # Optimized destinations database
├── ecosystem.config.js           # PM2 configuration
├── config/
│   └── database.js               # Database configuration
├── models/
│   ├── Contact.js               # Contact model
│   └── ContactModel.js          # Alternative contact model
├── logs/                        # Application logs
├── data/
│   └── contacts.db             # SQLite database
├── static assets/              # HTML, CSS, JS files
└── documentation/
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file with the following variables:

```env
# Environment
NODE_ENV=production
PORT=3000

# Database
DB_HOST=localhost
DB_NAME=nepal_tourism
DB_USER=your_user
DB_PASS=your_password

# Email (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=admin@your-domain.com

# Security
JWT_SECRET=your-secret-key
```

## 📡 API Endpoints

### Public Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check |
| GET | `/api` | API documentation |
| GET | `/api/destinations` | Get all destinations |
| POST | `/api/contact` | Submit contact form |

### Admin Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/contacts` | Get all contacts (requires auth) |

## 🔒 Security Features

- **Helmet.js**: Security headers
- **CORS**: Cross-origin resource sharing configuration
- **Rate Limiting**: API and contact form rate limits
- **Input Validation**: Comprehensive form validation
- **Spam Detection**: Keyword-based spam filtering

## 📊 Performance Features

- **Compression**: Gzip compression for responses
- **Static File Caching**: Optimized static asset serving
- **Database Connection Pooling**: Efficient database connections
- **Memory Management**: Automatic memory limit restart
- **Clustering**: Multi-core support with PM2

## 🚀 Deployment Options

### Option 1: PM2 (Recommended)
```bash
# Start application
npm run pm2:start

# Monitor
pm2 monit

# Restart
npm run pm2:restart

# Stop
npm run pm2:stop
```

---

**Built with ❤️ for Nepal Tourism**
