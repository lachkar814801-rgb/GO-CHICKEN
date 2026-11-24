# 🍗 GO CHICKEN - Site Web Professionnel

**Restaurant de grillades & poulet rôti à Route Gremda, Tunisie**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)]()

---

## 📖 Présentation

Site web moderne et professionnel pour le restaurant **GO CHICKEN**. Ce projet est construit avec React, TypeScript, Tailwind CSS et est prêt pour le déploiement sur Vercel.

**Slogan:** GRILLADES & POULET RÔTI  
**Tagline:** Le goût qui donne envie d'y revenir !

---

## 🚀 Installation

### Prérequis

- Node.js 18+ ([télécharger](https://nodejs.org/))
- npm ou yarn
- Vercel CLI (optionnel, pour le déploiement)

### Étapes d'installation

```bash
# 1. Naviguer vers le projet
cd /chemin/complet/restaurant

# 2. Installer les dépendances
npm install

# 3. Lancer en mode développement
npm run dev
```

Le site s'affichera à l'adresse `http://localhost:3000`

---

## 🛠️ Modifier l'information du restaurant

### Configuration principale

Toutes les informations du restaurant sont stockées dans:

1. **`src/i18n/languages.ts`** - Texte en français et arabe
2. **`src/data/menuData.ts`** - Données du menu et prix

#### Pour modifier le slogan ou l'adresse:

```typescript
// src/i18n/languages.ts
export const fr = {
  footer: {
    address: 'Route Gremda, Km 9.5, Tunisie', // ← Modifier ici
    phone: '+216 27 211 145',                 // ← Modifier ici
    ...
  }
}
```

#### Pour modifier les informations du menu:

```typescript
// src/data/menuData.ts
export const menuData = [
  {
    id: 'pané-classique',
    category: 'pané',
    titleFr: 'Poulet Pané Classique',
    descriptionFr: 'Semi-poulet pané...', // ← Modifier la description
    price: '15 TND',                        // ← Ajouter le prix ou laisser vide
  }
]
```

---

## 📸 Ajouter de nouvelles photos

### Structure des images

Les images sont dans: **`public/images/`**

Fichiers disponibles actuellement:
- `carte-visite.jpeg`
- `qr-maps.png`
- `restaurant-enseigne.jpeg`
- `brochettes.jpeg`
- `grillades.jpeg`
- `poulet-pane.jpeg`
- `poulet-pane-promo.jpeg`

### Pour ajouter une nouvelle photo:

1. Copiez votre image dans `public/images/nom-image.jpg`
2. Mettez à jour le composant correspondant (ex: `src/sections/Hero.tsx`)
3. Utilisez `<img src="/images/nom-image.jpg" ... />`

**Taille recommandée:**
- Hero images: 1920x1080 minimum
- Galerie: 800x600 minimum
- Optimisez vos images avant d'ajouter (WebP recommandé)

---

## 💰 Mettre à jour les prix du menu

Éditez **`src/data/menuData.ts`**:

```typescript
{
  id: 'pané-classique',
  category: 'pané',
  titleFr: '...',
  descriptionFr: '...',
  price: '15 TND',        // ← Insérez le prix ici, ou supprimez la ligne pour "Prix sur demande"
}
```

Pour masquer tous les prix temporairement, utilisez `price: fr.pricesAsk` qui affiche "Prix sur demande".

---

## 🌐 Déploiement sur GitHub

### 1. Créer un dépôt GitHub

```bash
# Sur votre terminal, dans le répertoire du projet
git init
git add .
git commit -m "Initial commit GO CHICKEN"
git branch -M main
git remote add origin https://github.com/votre-username/go-chicken.git
git push -u origin main
```

### 2. Créer un nouveau projet sur Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec GitHub
3. Cliquez sur **"Add New Project"**
4. Choisissez votre dépôt **go-chicken**
5. Vercel détectera automatiquement React + Vite
6. Le reste des réglages est par défaut (c'est correct !)
7. Cliquez sur **"Deploy"**

Votre site sera disponible à: `https://votre-projet.vercel.app`

---

## 🚀 Déploiement rapide sur Vercel

### Via l'interface web (recommandé)

1. [vercel.com](https://vercel.com) → Sign up / Log in
2. **Add New Project** → Importez votre dépôt GitHub
3. Vercel détecte: **Framework Preset = Vite**
4. Variables d'environnement: Aucune requise pour le moment
5. **Deploy** → Vercel compile et déploye

### Via CLI Vercel (optionnel)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer le projet actuel
vercel --prod
```

---

## 📱 Fonctionnalités implémentées

✅ Design responsive (mobile, tablette, desktop)  
✅ Support bilingue: Français / Arabe (RTL pour l'arabe)  
✅ Navigation fluide avec React Router  
✅ Animations Framer Motion  
✅ Optimisation SEO (meta tags, Open Graph)  
✅ Accessibilité de base (ARIA labels)  
✅ Images lazy-loading  
✅ Build optimisé pour production  

---

## 🛠️ Structure du projet

```
src/
├── components/       # Composants réutilisables
│   ├── Navbar.tsx
│   └── Footer.tsx
├── sections/         # Sections de la page
│   ├── Hero.tsx
│   ├── Specialties.tsx
│   ├── Menu.tsx
│   ├── Gallery.tsx
│   ├── Location.tsx
│   └── MenuPreview.tsx
├── pages/            # Pages (routes)
│   └── Home.tsx
├── data/             # Données
│   └── menuData.ts
├── i18n/             # Internationalisation
│   └── languages.ts
├── hooks/            # Hooks React personnalisés
├── styles/           # Styles globaux
│   └── index.css
└── assets/           # Assets statiques
public/
├── images/           # Images du restaurant
├── favicon.ico
└── robots.txt
```

---

## 📊 Scripts disponibles

| Commande | Action |
|----------|--------|
| `npm run dev` | Démarrer le serveur de développement |
| `npm run build` | Compiler pour production |
| `npm run preview` | Prévisualiser le build local |
| `npm run lint` | Linter TypeScript/ESLint |

---

## 🎨 Technologies utilisées

- **React 18** + TypeScript
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **Lucide React** (icons)
- **Framer Motion** (animations)
- **React Router** (navigation)

---

## 📞 Contact & Support

Restaurant: **GO CHICKEN**  
Téléphone: **+216 27 211 145**  
Adresse: **Route Gremda, Km 9.5, Tunisie**

---

**Développé avec ❤️ par Rami pour GO CHICKEN**
