@echo off
echo ========================================
echo    Démarrage du serveur Next.js
echo ========================================
echo.

REM Vérifier si node_modules existe
if not exist "node_modules" (
    echo Installation des dépendances...
    echo.
    call npm install
    echo.
    echo Installation terminée!
    echo.
)

echo Démarrage du serveur de développement...
echo.

REM Ouvrir le navigateur après 5 secondes
start cmd /c "timeout /t 5 >nul && start http://localhost:3000"

REM Démarrer le serveur Next.js
npm run dev