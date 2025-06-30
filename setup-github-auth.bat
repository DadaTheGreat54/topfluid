@echo off
echo ========================================
echo Configuration GitHub Authentication
echo ========================================
echo.
echo Ce script va configurer l'authentification GitHub pour ce projet.
echo.
echo Vous aurez besoin de:
echo 1. Votre nom d'utilisateur GitHub
echo 2. Un Personal Access Token (PAT)
echo.
echo ========================================
echo COMMENT CREER UN PERSONAL ACCESS TOKEN:
echo ========================================
echo.
echo 1. Allez sur: https://github.com/settings/tokens
echo 2. Cliquez sur "Generate new token (classic)"
echo 3. Donnez un nom au token (ex: topfluid-access)
echo 4. Selectionnez les permissions: cochez "repo" (tous les sous-elements)
echo 5. Cliquez sur "Generate token"
echo 6. IMPORTANT: Copiez le token immediatement!
echo.
pause

:: Demander le nom d'utilisateur
echo.
set /p GITHUB_USER="Entrez votre nom d'utilisateur GitHub: "
if "%GITHUB_USER%"=="" (
    echo Erreur: Le nom d'utilisateur ne peut pas etre vide!
    pause
    exit /b 1
)

:: Demander le token
echo.
set /p GITHUB_TOKEN="Entrez votre Personal Access Token: "
if "%GITHUB_TOKEN%"=="" (
    echo Erreur: Le token ne peut pas etre vide!
    pause
    exit /b 1
)

:: Configurer l'URL du remote
echo.
echo Configuration du remote origin...
git remote remove origin 2>nul
git remote add origin https://%GITHUB_USER%:%GITHUB_TOKEN%@github.com/damienlefloch/topfluid.git

:: Vérifier la configuration
echo.
echo Configuration terminee!
echo.
echo Remote configure:
git remote -v
echo.

:: Tester la connexion
echo Test de la connexion...
git ls-remote origin >nul 2>&1
if errorlevel 1 (
    echo.
    echo ERREUR: Impossible de se connecter a GitHub!
    echo Verifiez votre nom d'utilisateur et token.
    pause
    exit /b 1
)

echo.
echo ========================================
echo Connexion reussie!
echo ========================================
echo.
echo Vous pouvez maintenant utiliser:
echo - git push pour envoyer vos commits
echo - git-commit-push.bat pour commit et push automatique
echo.
pause