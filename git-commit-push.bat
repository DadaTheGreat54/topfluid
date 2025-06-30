@echo off
echo ========================================
echo Git Commit and Push Script
echo ========================================
echo.

:: Vérifier si nous sommes dans un repository git
git status >nul 2>&1
if errorlevel 1 (
    echo Erreur: Ce n'est pas un repository Git!
    pause
    exit /b 1
)

:: Afficher le status
echo Status actuel:
git status --short
echo.

:: Demander si on continue
set /p CONTINUE="Voulez-vous continuer avec le commit? (O/N): "
if /i not "%CONTINUE%"=="O" (
    echo Operation annulee.
    pause
    exit /b 0
)

:: Ajouter tous les fichiers
echo.
echo Ajout des fichiers...
git add -A

:: Demander le message de commit
echo.
set /p COMMIT_MSG="Entrez le message de commit: "
if "%COMMIT_MSG%"=="" (
    echo Erreur: Le message de commit ne peut pas etre vide!
    pause
    exit /b 1
)

:: Faire le commit
echo.
echo Creation du commit...
git commit -m "%COMMIT_MSG%"
if errorlevel 1 (
    echo Erreur lors du commit!
    pause
    exit /b 1
)

:: Afficher les remotes
echo.
echo Remotes configures:
git remote -v
echo.

:: Demander si on veut pusher
set /p PUSH="Voulez-vous pusher vers GitHub? (O/N): "
if /i not "%PUSH%"=="O" (
    echo Commit effectue localement. Push annule.
    pause
    exit /b 0
)

:: Demander les credentials si nécessaire
echo.
echo ========================================
echo PUSH VERS GITHUB
echo ========================================
echo.
echo Si c'est votre premier push, vous devrez entrer:
echo 1. Votre nom d'utilisateur GitHub
echo 2. Votre Personal Access Token (pas votre mot de passe!)
echo.
echo Pour creer un token: https://github.com/settings/tokens
echo Permissions necessaires: repo (tous les sous-elements)
echo.
pause

:: Pusher vers origin
echo.
echo Push en cours...
git push -u origin main
if errorlevel 1 (
    echo.
    echo ========================================
    echo ERREUR DE PUSH - SOLUTIONS:
    echo ========================================
    echo.
    echo 1. Creer un Personal Access Token sur GitHub
    echo 2. Utiliser cette commande pour configurer l'URL avec token:
    echo    git remote set-url origin https://USERNAME:TOKEN@github.com/damienlefloch/topfluid.git
    echo.
    echo Remplacez USERNAME par votre nom GitHub et TOKEN par votre token
    pause
    exit /b 1
)

echo.
echo ========================================
echo Push reussi!
echo ========================================
pause