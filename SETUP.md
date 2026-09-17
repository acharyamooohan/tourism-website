# 🚀 Nepal Tourism Website - Quick Setup Guide

## ✅ **Current Status: FULLY WORKING!**

Your backend is now completely functional with:
- ✅ Contact form API
- ✅ Email notifications (Gmail configured)
- ✅ Database storage
- ✅ Admin dashboard
- ✅ Security features

---

## 🔧 **How to Run Your Backend**

### **Option 1: Development Mode (Recommended)**
```bash
npm run dev
```
- Auto-restarts when you make changes
- Shows detailed logs
- Best for development

### **Option 2: Production Mode**
```bash
npm start
```
- Runs once without auto-restart
- Better for production

---

## 🌐 **Access Your Services**

### **Backend API**
- **URL**: `http://localhost:3000`
- **Health Check**: `http://localhost:3000/api/health`
- **Contact API**: `http://localhost:3000/api/contact` (POST)

### **Admin Dashboard**
- **File**: Open `admin.html` in your browser
- **Features**: View contacts, manage submissions, export data

### **Test Contact Form**
- **File**: Open `contact-form.html` in your browser
- **Purpose**: Test the contact form functionality

---

## 📧 **Email Configuration (Already Done!)**

Your Gmail is configured and working:
- ✅ **SMTP**: smtp.gmail.com:587
- ✅ **Email**:
- ✅ **App Password**: Configured
- ✅ **Admin Email**: 

**Email Features Working:**
- ✅ Admin notifications to your email
- ✅ Auto-reply to form submitters
- ✅ Email reference IDs

---

## 🔗 **Integration with Your Tourism Website**

### **Add Contact Form to Any Page**

1. **Include the JavaScript**:
```html
<script src="contact-frontend.js"></script>
```

2. **Add HTML Form**:
```html
<form id="contactForm">
    <div id="formMessage" style="display: none;"></div>
    
    <input type="text" id="name" placeholder="Your Name" required>
    <div id="nameError" class="error-message"></div>
    
    <input type="email" id="email" placeholder="Your Email" required>
    <div id="emailError" class="error-message"></div>
    
    <input type="text" id="subject" placeholder="Subject">
    <div id="subjectError" class="error-message"></div>
    
    <textarea id="message" placeholder="Your Message" required></textarea>
    <div id="messageError" class="error-message"></div>
    
    <div id="formLoading" style="display: none;">Sending...</div>
    
    <button type="submit">Send Message</button>
</form>
```

3. **Add CSS for Styling**:
```css
.error-message { color: red; font-size: 12px; }
.form-message.success { color: green; background: #d4edda; padding: 10px; }
.form-message.error { color: red; background: #f8d7da; padding: 10px; }
input.error, textarea.error { border-color: red; }
```

---

## 📊 **Admin Features**

Access your admin dashboard to:
- 📋 **View All Contacts**: See all form submissions
- 🔍 **Filter by Status**: New, Read, Replied, Archived
- 📧 **Email Management**: Track sent emails
- 🚫 **Spam Protection**: Mark and filter spam
- 📤 **Export Data**: Download contacts as CSV
- 📈 **Statistics**: View submission trends

---

## 🛡️ **Security Features (Active)**

- ✅ **Rate Limiting**: 5 submissions per 15 minutes per IP
- ✅ **Input Validation**: Server-side validation
- ✅ **Spam Detection**: Keyword-based filtering
- ✅ **CORS Protection**: Configured origins
- ✅ **SQL Injection Protection**: Sequelize ORM

---

## 📁 **Important Files**

### **Backend Core**
- `server.js` - Main server file
- `config/database.js` - Database configuration
- `models/Contact.js` - Data model
- `.env` - Configuration (email, database)

### **Frontend**
- `contact-frontend.js` - Contact form handler
- `admin.js` - Admin dashboard
- `contact-form.html` - Test form
- `admin.html` - Admin interface

### **Your Website Integration**
- Include `contact-frontend.js` in your main website
- Add the contact form HTML where needed
- Server will handle all backend operations

---

## 🔄 **Daily Operations**

### **Starting the Server**
```bash
cd "d:\Aaltu Faaltu\nepal_tourism_website"
npm run dev
```

### **Stopping the Server**
- Press `Ctrl+C` in the terminal
- Or close the terminal window

### **Viewing Contacts**
- Open `admin.html` in any browser
- Check your email for notifications

### **Backing Up Data**
- Database file: `data/contacts.db`
- Copy this file to backup your contacts

---

## 🎯 **Next Steps**

1. **Integrate**: Add contact form to your main tourism website
2. **Customize**: Modify emails, validation, styling as needed
3. **Deploy**: When ready, deploy to a hosting service
4. **Monitor**: Use admin dashboard to manage contacts

---

## 🆘 **Need Help?**

### **Common Commands**
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start

# Check if port 3000 is in use
netstat -ano | findstr :3000
```

### **Troubleshooting**
- Check the README.md for detailed troubleshooting
- Server logs show in the terminal
- Test API endpoints with the provided test form

**Your Nepal Tourism Website backend is ready to use! 🎉**

cd "d:\Aaltu Faaltu\nepal_tourism_website"
start-website.bat

# Terminal 1 - Backend
cd "d:\Aaltu Faaltu\nepal_tourism_website"
npm start

# Terminal 2 - Frontend
cd "d:\Aaltu Faaltu\nepal_tourism_website"
python -m http.server 8080

🎉 Your Nepal Tourism Website is NOW RUNNING LOCALLY!
✅ Current Status:
🟢 Backend: Running on http://localhost:3000
🟢 Frontend: Running on http://localhost:8080
🟢 Contact Form: Working at http://localhost:8080/contact-form.html
🟢 Admin Dashboard: Available at http://localhost:8080/admin.html
🟢 Email System: Fully functional

How to run frontend
cd "d:\Aaltu Faaltu\nepal_tourism_website" && .\start-website.bat
