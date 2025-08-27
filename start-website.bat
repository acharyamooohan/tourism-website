@echo off
echo ==========================================
echo    Nepal Tourism Website - Local Setup
echo ==========================================
echo.

echo Starting Backend Server...
start "Nepal Tourism Backend" cmd /k "cd /d %~dp0 && npm start"
echo Backend will run on: http://localhost:3000
echo.

echo Waiting for backend to start...
timeout /t 3 /nobreak >nul

echo Starting Frontend HTTP Server...
start "Nepal Tourism Frontend" cmd /k "cd /d %~dp0 && python -m http.server 8080"
echo Frontend will run on: http://localhost:8080
echo.

echo Waiting for frontend server to start...
timeout /t 2 /nobreak >nul

echo ==========================================
echo     🚀 Nepal Tourism Website is Ready!
echo ==========================================
echo.
echo 📧 Backend API: http://localhost:3000
echo 🌐 Website: http://localhost:8080
echo 📝 Contact Form: http://localhost:8080/contact-form.html
echo 👨‍💼 Admin Dashboard: http://localhost:8080/admin.html
echo 🏠 Main Website: http://localhost:8080/index.html
echo.
echo Press any key to open the website in your browser...
pause >nul

start http://localhost:8080
start http://localhost:8080/contact-form.html

echo.
echo ==========================================
echo To stop the servers:
echo - Close the terminal windows
echo - Or press Ctrl+C in each terminal
echo ==========================================
pause
