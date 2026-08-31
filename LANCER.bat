@echo off
title VisioFlow - Serveur de developpement
chcp 65001 >nul
echo.
echo  VisioFlow Next.js - Demarrage...
echo  --------------------------------

:: Node.js installe par winget (chemin standard)
set "NODEPATH=C:\Program Files\nodejs"
if not exist "%NODEPATH%\npm.cmd" (
    :: Fallback: version portable
    set "NODEPATH=C:\Users\User\AppData\Local\node-v20.19.1-win-x64"
)
set "PATH=%NODEPATH%;%PATH%"

cd /d "%~dp0"

node --version >nul 2>&1
if errorlevel 1 (
    echo [ERREUR] Node.js introuvable.
    echo Installe Node.js sur https://nodejs.org
    pause
    exit /b 1
)

if not exist "node_modules" (
    echo  Installation des dependances...
    npm install
)

:: Tuer tout ancien serveur Node bloque sur le port 3000
for /f "tokens=5" %%P in ('netstat -ano ^| findstr ":3000 " 2^>nul') do (
    taskkill /PID %%P /F >nul 2>&1
)

echo.
echo  Ouvre http://localhost:3000 dans ton navigateur
echo  Ctrl+C pour arreter
echo.
npm run dev
pause
