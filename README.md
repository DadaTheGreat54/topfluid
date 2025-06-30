# Template Next.js Web App

Ce projet est un template de base pour une application web Next.js avec TypeScript et Tailwind CSS.

## Prérequis

- Node.js 18+ 
- npm ou yarn

## Installation

1. Clonez ou copiez ce dossier template
2. Installez les dépendances :
   ```bash
   npm install
   ```

## Démarrage rapide

### Windows
Double-cliquez sur `start-dev.bat` pour :
- Installer automatiquement les dépendances (si nécessaire)
- Lancer le serveur de développement
- Ouvrir automatiquement http://localhost:3000 dans votre navigateur

### Linux/Mac
```bash
npm run dev
```
Puis ouvrez http://localhost:3000

## Structure du projet

```
├── src/
│   ├── app/           # App Router de Next.js 14
│   │   ├── layout.tsx # Layout principal
│   │   ├── page.tsx   # Page d'accueil
│   │   └── globals.css
│   ├── components/    # Composants réutilisables
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── lib/          # Utilitaires et fonctions
├── public/           # Fichiers statiques
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
└── start-dev.bat     # Script de démarrage Windows
```

## Scripts disponibles

- `npm run dev` : Démarre le serveur de développement
- `npm run build` : Compile l'application pour la production
- `npm run start` : Démarre le serveur de production
- `npm run lint` : Lance ESLint

## Technologies utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **ESLint** - Linting du code

## Personnalisation

1. Modifiez `src/app/layout.tsx` pour changer les métadonnées du site
2. Personnalisez les styles dans `src/app/globals.css` et `tailwind.config.ts`
3. Ajoutez vos pages dans `src/app/`
4. Créez vos composants dans `src/components/`

## Variables d'environnement

Copiez `.env.example` en `.env.local` et ajoutez vos variables d'environnement.

## Déploiement

Ce projet peut être déployé sur :
- Vercel (recommandé pour Next.js)
- Netlify
- Tout serveur Node.js

Pour Vercel :
```bash
npm i -g vercel
vercel
```