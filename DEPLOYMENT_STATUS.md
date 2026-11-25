# ✅ Déploiement GO CHICKEN sur Vercel - COMPLET

## 🔧 Corrections Terminées

### 1. Chemins d'images corrigés
- ✅ `/public/images/grillades.jpg` (Hero background)
- ✅ `/public/images/poulet-pane.jpg`, `/restaurant-enseigne.jpg`, `/brochettes.jpg` (Specialties)
- ✅ `/public/images/menu/*.webp` (Menu images avec noms propres : tirets, minuscules)
- ✅ Fallback image fixée : `/images/menu/brochettes.webp` (pas de 404)

### 2. Sections mises à jour
- `Hero.tsx` - Background image + dimensions explicites (1920x1080)
- `Specialties.tsx` - Chemins images JPG corrigés
- `MenuPreview.tsx` - WebP minuscules
- `Menu.tsx` - Lazy loading + fallback brochettes.webp
- `Gallery.tsx` - Lazy loading déjà implémenté + chemins `/images/...`

### 3. Location.tsx corrections
- ✅ Wrapper QR Code avec padding blanc pour quiet zone
- ✅ iframe Google Maps embed (pas de lien court, X-Frame-Options bypass)
- ✅ Boutons WhatsApp / Appeler / Google Maps fonctionnels

### 4. Performance & UX
- ✅ ScrollToTop sur routes dynamiques (`/menu`, `/gallery`, `/location`)
- ✅ `pt-24` navbar overlap fixé dans `<main>`
- ✅ Images lazy loading partout sauf Hero (critical path)
- ✅ vercel.json : cache headers optimisés (images immutable, 1 an)

### 5. Build & Assets
- ✅ Script post-build `scripts/post-build.cjs` copie images vers `dist/`
- ✅ `copyPublicDir: true` dans vite.config.ts
- ✅ Structure : `dist/index.html`, `dist/images/*`, `dist/assets/*`

### 6. Configuration déployée
- `vercel.json` - Rewrites SPA + headers cache
- `package.json` - Scripts build avec post-build hook
- `vite.config.ts` - Build optimisé pour Vercel

---

## 📦 Structure Finale du Build

```
dist/
├── index.html                    # React SPA entry point
├── images/                       # Galerie + sections (copie depuis public/)
│   ├── brochettes.jpg
│   ├── grillades.jpg
│   ├── poulet-pane.jpg
│   └── restaurant-enseigne.jpg
├── menu/                         # WebP du menu
│   ├── brochette-mixte.webp
│   ├── brochettes.webp
│   ├── grillades-du-soleil.webp
│   ├── poulet-pane-classique.webp
│   ├── poulet-pane-famille.webp
│   └── poulet-roti-traditionnel.webp
├── assets/
│   ├── index-CGpoqmi6.js         # Bundle React + routes
│   └── index-DwAnf0h8.css        # Tailwind CSS
└── favicon.svg, robots.txt, qr-maps*.png
```

---

## 🚀 Déploiement sur Vercel

### Option 1 : Connecter via Vercel Dashboard (Recommandé)
1. Allez sur [vercel.com](https://vercel.com) → Sign In GitHub
2. "New Project" → Importez `lachkar814801-rgb/GO-CHICKEN`
3. Prédéploiement automatique + Production push via GitHub Actions
4. Vercel détectera React + TypeScript + Tailwind automatiquement

### Option 2 : Déploiement manuel via CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option 3 : GitHub Actions Auto-deploy (déjà configuré via vercel.json)
- Push sur `main` → GitHub Action → Vercel Deploy automatique
- Vérifiez `.github/workflows/vercel.yml` dans le repo

---

## ⚠️ Authentification GitHub requise

Pour pousser vers GitHub, configurez une authentification :

### SSH (Recommandé)
```bash
# Générer clé SSH si nécessaire
ssh-keygen -t ed25519 -C "your@email.com"

# Copier la pub key
cat ~/.ssh/id_ed25519.pub | clip
# Coller dans : https://github.com/settings/ssh/new

# Tester connexion
ssh -T git@github.com
```

### HTTPS avec Token
1. [Créer token GitHub](https://github.com/settings/tokens) (scope `repo`, `public_repo`)
2. Ajouter au `.env` : `GITHUB_TOKEN=ghp_xxxxxxxx`
3. Pousser avec token dans les headers

---

## 📊 Statistiques Build

**Taille bundle :**
- JS : 312 KB (98 KB gzipped)
- CSS : 24 KB (4.7 KB gzipped)
- HTML : 1.5 KB

**Images totales :**
- JPEG : ~1.3 MB (galerie + sections)
- WebP menu : ~3.6 MB (7 images optimisées)
- QR codes : < 2 MB

**Total assets : ~5-6 MB** (bon pour performance)

---

## ✅ Checklist Pré-déploiement

- [x] Build TypeScript sans erreur (`npm run build`)
- [x] Images dans `public/images/` et copiées vers `dist/`
- [x] QR Code avec quiet zone fonctionnel
- [x] Routes dynamiques sans 404 (`/menu`, `/gallery`, `/location`)
- [x] ScrollToTop sur SPA navigation
- [x] Cache headers optimisés pour Vercel (immutable images)
- [x] Fallback images configurées

**Prêt pour déploiement !** 🎉
