# Hello Remède - Site Marketing

Site marketing pour Hello Remède, un baume naturel de bien-être formulé par une ostéopathe.

## Fonctionnalités

- 🎨 Design responsif et moderne
- ⚛️ Construit avec React 18
- 🚀 Déployable sur Netlify
- 📱 Mobile-first approach
- 🌿 Contenu complet du produit

## Installation

```bash
npm install
```

## Développement

Pour lancer le serveur de développement :

```bash
npm start
```

L'application s'ouvrira à [http://localhost:3000](http://localhost:3000)

## Build pour production

```bash
npm run build
```

Cela créera un dossier `build` optimisé pour la production.

## Déploiement sur Netlify

### Option 1: Via GitHub (Recommandé)
1. Poussez votre code sur GitHub
2. Connectez votre repository à Netlify
3. Netlify détectera automatiquement le `netlify.toml` et configurera le build

### Option 2: Via Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy
```

## Structure du projet

```
src/
├── components/        # Composants React
│   ├── Navigation.js  # Barre de navigation
│   ├── Hero.js        # Section héro
│   ├── Features.js    # Caractéristiques
│   ├── ProductDetail.js
│   ├── HowToUse.js
│   ├── Testimonials.js
│   ├── FAQ.js
│   ├── CTA.js
│   └── Footer.js
├── styles/
│   └── index.css      # Styles globaux
└── App.js             # Composant racine

public/               # Ressources statiques (images)
```

## Images

Les images doivent être placées dans le dossier `public/`. Assurez-vous que les fichiers suivants sont présents:
- packshot-6180.webp
- packshot-6257.webp
- packshot-6271.webp
- helloremede-baume-naturelle-massage.webp
- hello-remede-baume-de-soin-naturel-packaging_11.webp

## Technologies utilisées

- React 18.2.0
- CSS3 (Grid, Flexbox, Animations)
- React Scripts 5.0.1

## License

Tous les droits réservés © 2024 Hello Remède
