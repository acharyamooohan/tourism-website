# 🚀 Running Nepal Tourism Website Locally from CMD

## Quick Start (Simple Method)

### **Option 1: One-Click Start**
```cmd
# Navigate to your project folder
cd "d:\Aaltu Faaltu\nepal_tourism_website"

# Run the start script
start-website.bat
```

### **Option 2: Manual Start**
```cmd
# Navigate to your project folder
cd "d:\Aaltu Faaltu\nepal_tourism_website"

# Start backend (in first terminal)
npm start

# Start frontend (in second terminal - open new CMD window)
python -m http.server 8080
```

### **Option 3: Background + Frontend**
```cmd
# Navigate to your project folder
cd "d:\Aaltu Faaltu\nepal_tourism_website"

# Run the quick start script
run-local.bat
```

---

## 🌐 Access Your Website

Once both servers are running:

### **Main Website**
- **Homepage**: http://localhost:8080
- **Contact Form**: http://localhost:8080/contact-form.html
- **Admin Dashboard**: http://localhost:8080/admin.html

### **Backend API** 
- **API Base**: http://localhost:3000/api
- **Health Check**: http://localhost:3000/api/health
- **Submit Contact**: http://localhost:3000/api/contact (POST)

---

## 📋 Step-by-Step Manual Setup

### **Step 1: Start Backend Server**
```cmd
cd "d:\Aaltu Faaltu\nepal_tourism_website"
npm start
```
You should see:
```
Contact form server running on port 3000
Database connection established successfully.
Database synchronized successfully.
```

### **Step 2: Start Frontend Server**
Open **new CMD window**:
```cmd
cd "d:\Aaltu Faaltu\nepal_tourism_website"
python -m http.server 8080
```
You should see:
```
Serving HTTP on :: port 8080 (http://[::]:8080/) ...
```

### **Step 3: Open Website**
- Go to: http://localhost:8080
- Test contact form: http://localhost:8080/contact-form.html

---

## ✅ Verification Checklist

### **Check Backend is Running**
```cmd
curl http://localhost:3000/api/health
```
Should return: `{"status":"OK","timestamp":"..."}`

### **Check Frontend is Running**
- Open browser: http://localhost:8080
- You should see a file listing or your main website

### **Test Contact Form**
1. Go to: http://localhost:8080/contact-form.html
2. Fill out the form
3. Submit - should show "Message sent successfully!"
4. Check your email: acharyamooohan@gmail.com

### **Check Admin Dashboard**
1. Go to: http://localhost:8080/admin.html
2. Should show statistics and contact list
3. Test viewing/managing contacts

---

## 🛑 Troubleshooting

### **Port Already in Use**
```cmd
# Check what's using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with actual number)
taskkill /F /PID <PID>

# Or kill all Node processes
taskkill /F /IM node.exe
```

### **Port 8080 Already in Use**
```cmd
# Use a different port
python -m http.server 8081

# Then access via: http://localhost:8081
```

### **Python Not Found**
If you get `'python' is not recognized`:
```cmd
# Try python3
python3 -m http.server 8080

# Or install Python from python.org
```

### **CORS Errors**
Make sure both servers are running:
- Backend: http://localhost:3000 ✅
- Frontend: http://localhost:8080 ✅

---

## 🔄 Daily Usage

### **Starting Everything**
```cmd
cd "d:\Aaltu Faaltu\nepal_tourism_website"
start-website.bat
```

### **Stopping Everything**
- Close both CMD windows
- Or press `Ctrl+C` in each terminal

### **Restart After Changes**
```cmd
# Stop backend (Ctrl+C), then:
npm start

# Frontend server can stay running
```

---

## 📁 Important URLs Reference

| Service | URL | Purpose |
|---------|-----|---------|
| **Main Website** | http://localhost:8080 | Homepage/File listing |
| **Contact Form** | http://localhost:8080/contact-form.html | Test contact form |
| **Admin Panel** | http://localhost:8080/admin.html | Manage contacts |
| **Your Tourism Site** | http://localhost:8080/index.html | Main Nepal site |
| **Backend API** | http://localhost:3000/api | API endpoints |
| **Health Check** | http://localhost:3000/api/health | Server status |

---

## 🎯 What You'll See

### **Backend Terminal**
```
Contact form server running on port 3000
Database connection established successfully.
Contact form submission from user@email.com - User Name (ID: X)
```

### **Frontend Terminal**
```
Serving HTTP on :: port 8080 (http://[::]:8080/) ...
::1 - - [date] "GET /contact-form.html HTTP/1.1" 200 -
::1 - - [date] "GET /contact.js HTTP/1.1" 200 -
```

### **Browser**
- Contact form loads and works
- Form submissions send emails
- Admin dashboard shows contacts
- No CORS errors in console

**Your Nepal Tourism Website is now running locally! 🏔️**
