# Production Deployment Checklist ✅

## Pre-Deployment

### 1. Environment Setup
- [ ] Create `.env` file with production values
- [ ] Set `NODE_ENV=production`
- [ ] Configure database credentials
- [ ] Set up SMTP email configuration
- [ ] Generate secure JWT secret
- [ ] Configure CORS origins

### 2. Security Review
- [ ] Rate limiting configured
- [ ] Input validation in place
- [ ] CORS policy configured
- [ ] Security headers enabled (Helmet)
- [ ] Spam detection active
- [ ] SQL injection protection verified

### 3. Performance Optimization
- [ ] Compression enabled
- [ ] Static file caching configured
- [ ] Database connection pooling set up
- [ ] Memory limits configured
- [ ] Log rotation enabled

### 4. Database Setup
- [ ] Production database created
- [ ] Database migrations run
- [ ] Database backup strategy in place
- [ ] Connection pool configured
- [ ] Indexes optimized

## Deployment Steps

### 1. Server Preparation
```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Node.js (if not installed)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 globally
sudo npm install -g pm2

# Create application directory
sudo mkdir -p /var/www/nepal-tourism
sudo chown $USER:$USER /var/www/nepal-tourism
```

### 2. Code Deployment
```bash
# Clone repository
cd /var/www/nepal-tourism
git clone https://github.com/your-username/nepal-tourism-website.git .

# Install dependencies
npm install --production

# Create logs directory
mkdir -p logs

# Set up environment
cp .env.production.example .env
# Edit .env with production values
```

### 3. Database Setup
```bash
# For PostgreSQL
sudo -u postgres createdb nepal_tourism_prod
sudo -u postgres createuser nepal_user

# Grant permissions
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE nepal_tourism_prod TO nepal_user;"
```

### 4. Process Management
```bash
# Start with PM2
npm run pm2:start

# Save PM2 configuration
pm2 save

# Set up PM2 startup script
pm2 startup
# Follow the instructions provided
```

### 5. Reverse Proxy (Nginx)
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 6. SSL Certificate
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Obtain certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Post-Deployment Verification

### 1. Health Checks
- [ ] Application starts successfully
- [ ] Health endpoint responds: `curl https://your-domain.com/health`
- [ ] API endpoints working: `curl https://your-domain.com/api/destinations`
- [ ] Contact form functional
- [ ] Database connectivity verified

### 2. Performance Tests
- [ ] Load time under 3 seconds
- [ ] API response time under 500ms
- [ ] Memory usage stable
- [ ] CPU usage reasonable

### 3. Security Tests
- [ ] HTTPS enforced
- [ ] Security headers present
- [ ] Rate limiting working
- [ ] Input validation functional
- [ ] SQL injection protection verified

### 4. Monitoring Setup
- [ ] Application logs configured
- [ ] Error monitoring set up
- [ ] Performance monitoring enabled
- [ ] Uptime monitoring configured
- [ ] Email alerts configured

## Monitoring Commands

### PM2 Monitoring
```bash
# View application status
pm2 status

# Monitor in real-time
pm2 monit

# View logs
pm2 logs nepal-tourism

# Restart application
pm2 restart nepal-tourism
```

### System Monitoring
```bash
# Check disk space
df -h

# Check memory usage
free -m

# Check CPU usage
top

# Check network connections
netstat -tulnp | grep 3000
```

### Log Monitoring
```bash
# Application logs
tail -f /var/www/nepal-tourism/logs/combined.log

# Error logs
tail -f /var/www/nepal-tourism/logs/err.log

# Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

## Backup Strategy

### 1. Database Backup
```bash
# Create backup script
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
pg_dump nepal_tourism_prod > /backups/db_backup_$DATE.sql

# Schedule with cron (daily at 2 AM)
0 2 * * * /path/to/backup-script.sh
```

### 2. Application Backup
```bash
# Backup application files
tar -czf /backups/app_backup_$(date +%Y%m%d).tar.gz /var/www/nepal-tourism
```

## Maintenance

### 1. Regular Updates
- [ ] Weekly dependency updates
- [ ] Monthly security patches
- [ ] Quarterly performance reviews
- [ ] Annual architecture review

### 2. Log Rotation
```bash
# Configure logrotate
sudo nano /etc/logrotate.d/nepal-tourism

/var/www/nepal-tourism/logs/*.log {
    daily
    missingok
    rotate 30
    compress
    delaycompress
    notifempty
    create 644 www-data www-data
    postrotate
        pm2 reload nepal-tourism
    endscript
}
```

## Troubleshooting

### Common Issues

#### Application Won't Start
1. Check logs: `pm2 logs nepal-tourism`
2. Verify environment variables
3. Check database connectivity
4. Verify port availability

#### High Memory Usage
1. Monitor with: `pm2 monit`
2. Check for memory leaks
3. Adjust PM2 max_memory_restart
4. Review application code

#### Database Connection Issues
1. Verify credentials
2. Check network connectivity
3. Review connection pool settings
4. Check database server status

### Emergency Contacts
- Server Administrator: admin@your-domain.com
- Database Administrator: dba@your-domain.com
- DevOps Team: devops@your-domain.com

## Success Criteria
- [ ] Application accessible via HTTPS
- [ ] All API endpoints functional
- [ ] Contact form working
- [ ] Email notifications sent
- [ ] Performance metrics within targets
- [ ] Security headers present
- [ ] Monitoring and alerting active
- [ ] Backup system operational

---

**Deployment completed successfully! 🎉**
