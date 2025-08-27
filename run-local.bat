@echo off
echo ==========================================
echo   Quick Start - Nepal Tourism Website
echo ==========================================

echo Checking if backend is already running...
netstat -ano | findstr :3000 >nul
if %errorlevel% == 0 (
    echo Backend already running on port 3000
) else (
    echo Starting backend server...
    start "Backend" cmd /k "npm start"
    echo Waiting 3 seconds for backend to start...
    timeout /t 3 /nobreak >nul
)

echo Starting frontend server...
echo Frontend will be available at: http://localhost:8080
python -m http.server 8080
