## Live Demo

The user-facing website is deployed on Render as a static site:

[Visit the Nepal Tourism Website](https://nepal-tourism-website.onrender.com/)

A responsive Nepal tourism website with a static, destination-focused frontend and a lightweight Express-based backend for contact submissions, email handling, and admin management.

## Why this project exists

This project gives travelers a polished landing experience for discovering destinations in Nepal while also providing a production-ready backend for managing visitor inquiries.

Key benefits:

- Explore curated Nepal destinations by category, region, and search term
- Present rich travel information, destination cards, and featured content
- Collect and store visitor messages from the public website
- Notify administrators and send auto-replies via email
- Manage submissions with a browser-based admin dashboard
- Run locally with SQLite and scale toward PostgreSQL in production

## Project overview

The project combines:

- A frontend built with plain HTML, CSS, and JavaScript
- A Node.js + Express API for submission handling
- Sequelize models for contact persistence
- SMTP-based email delivery for notifications and confirmations
- Static assets and dashboard pages served from the same repository

## Features

- Destination browsing with search and filters
- Hero section, travel tips, featured destination blocks, and testimonials
- Contact form submission with validation and spam detection
- Email notifications to an admin inbox and user auto-response
- Contact admin dashboard for reading/filtering/status updates
- Rate limiting, CORS checks, input validation, and security headers
- SQLite in local development and PostgreSQL-ready configuration in production

## Repository layout

```text
.
├── index.html                 # Public Nepal tourism homepage
├── styles.css                 # Site styling
├── script.js                  # Frontend behavior
├── destinations-data.js       # Destination catalog data
├── more-destinations.js       # Extra destination data
├── contact-form.html          # Test contact page
├── admin.html                 # Admin dashboard
├── admin.js                   # Admin dashboard JavaScript
├── contact-frontend.js        # Reusable frontend contact script
├── server.js                  # Express API and server logic
├── server-production.js       # Production-ready server variant
├── config/
│   └── database.js            # Sequelize database connection
├── models/
│   └── Contact.js             # Contact model
├── data/                      # Local SQLite database directory
├── .env.production.example    # Example production environment variables
├── SETUP.md                   # Local setup notes
├── DEPLOYMENT.md              # Production deployment checklist
├── RUNNING-LOCALLY.md         # Local run guide
├── README-PRODUCTION.md       # Production-focused notes
├── package.json               # Scripts and dependencies
├── run-local.bat              # Windows local startup helper
├── start-website.bat          # Windows full-site startup helper
└── README.md                  # Project documentation
```

## Prerequisites

- Node.js 14+
- npm
- Optional: Python 3 for serving the frontend locally
- SMTP service credentials for email functionality

## Getting started

### 1. Clone the project

```bash
git clone https://github.com/acharyamooohan/tourism-website.git
cd tourism-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root.

```env
NODE_ENV=development
PORT=3000
FRONTEND_URL=http://localhost:8080

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
ADMIN_EMAIL=admin@example.com
```

For production deployment, use the template in [`.env.production.example`](.env.production.example) and replace the placeholder values with your real settings.

Note:

- For Gmail, enable 2-factor authentication and use an app-specific password.
- Keep `.env` out of source control.

### 4. Start the backend

```bash
npm run dev
```

or:

```bash
npm start
```

### 5. Serve the frontend locally

Open the website from a static server in another terminal:

```bash
python -m http.server 8080
```

Then visit:

- Home page: http://localhost:8080
- Contact form page: http://localhost:8080/contact-form.html
- Admin dashboard: http://localhost:8080/admin.html
- API health check: http://localhost:3000/api/health

## API usage

### Health check

```bash
curl http://localhost:3000/api/health
```

### Submit a contact form

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Asha Sharma",
    "email": "asha@example.com",
    "subject": "Trekking trip",
    "message": "I would like information about the Annapurna Circuit and suitable travel dates."
  }'
```

### Admin endpoints

- `GET /api/admin/contacts`
- `GET /api/admin/contacts/:id`
- `GET /api/admin/stats`
- `PATCH /api/admin/contacts/:id`
- `POST /api/admin/contacts/:id/spam`

These routes are intended for internal use and should be protected before public deployment.

## Database

The project is configured for local SQLite by default and is production-friendly for PostgreSQL.

- Development: SQLite in `data/contacts.db`
- Production: PostgreSQL configuration via environment variables

## Security and validation

The backend includes:

- Rate limiting
- Input validation using `express-validator`
- Spam keyword detection
- CORS origin checks
- Security headers via Helmet
- Response compression
- Request logging in development and production modes

## Documentation

Additional guidance is available in:

- [SETUP.md](SETUP.md)
- [DEPLOYMENT.md](DEPLOYMENT.md)
- [RUNNING-LOCALLY.md](RUNNING-LOCALLY.md)
- [README-PRODUCTION.md](README-PRODUCTION.md)

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Make a focused change
4. Verify the behavior locally
5. Open a pull request with a clear summary and testing notes

Before submitting a PR:

- keep commits small and meaningful
- avoid committing real credentials or environment files
- update docs when behavior or setup changes

## Support and maintenance

For help, review the setup and deployment documents first, then open a GitHub issue with:

- a clear description of the problem
- steps to reproduce it
- relevant logs or screenshots
- your environment details

This project is maintained by [acharyamooohan](https://github.com/acharyamooohan).

## Notes

The app is designed as a tourism website plus internal backend utilities. It is useful for local demos, portfolio projects, and small deployment scenarios, but production admin access should still be restricted and protected with authentication.
