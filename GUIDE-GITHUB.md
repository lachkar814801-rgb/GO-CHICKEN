# 🚀 Guide pour pousser GO-CHICKEN sur GitHub

## ✅ Situation Actuelle
Votre dépôt GitHub `lachkar814801-rgb/GO-CHICKEN` existe et est vide.

## 🐛 Problème
Erreur de permission lors du push. Cela arrive souvent si :
1. Vous n'avez pas créé le dépôt manuellement sur GitHub, OU
2. Vous avez des credentials Git mal configurés

---

## 🔧 SOLUTION - 3 Méthodes

### **Méthode 1 : Créer le dépôt manuellement (RECOMMANDÉE)**

1. **Allez sur GitHub** : https://github.com/new
2. **Nouveau repository** :
   - Nom : `GO-CHICKEN`
   - Description : "Restaurant GO CHICKEN - Cuisine tunisienne"
   - ✅ Public ou Privé (selon vos préférences)
   - ❌ Ne PAS initialiser avec README, .gitignore, licence (nous l'avons déjà)
3. **Créez le repository**

4. **Clonez votre dépôt** :
```bash
cd GO-CHICKEN  # Votre dossier projet actuel
rm -rf .git           # Supprimez le vieux git local
git init            # Créez un nouveau repo
git add .           # Ajoutez tous les fichiers
git commit -m "Initial commit: GO CHICKEN restaurant website"
git branch -M main  # Branche principale
```

5. **Ajoutez le remote et push** :
```bash
# Remplacez par l'URL que GitHub vous donne
git remote add origin https://github.com/VOTRE-USERNAME/GO-CHICKEN.git
git push -u origin main
```

---

### **Méthode 2 : Utiliser GitHub Desktop**

1. Téléchargez [GitHub Desktop](https://desktop.github.com/)
2. Importez votre repository local
3. Push vers GitHub

---

### **Méthode 3 : Token Personal (si permission denied persiste)**

```bash
# Générer un token personal access token sur GitHub:
# Settings → Developer Settings → Personal Access Tokens
# Autoriser : repo, workflow, read:org
git remote set-url origin https://VOTRE-TOKEN@github.com/lachkar814801-rgb/GO-CHICKEN.git
git push -u origin main
```

---

## 📋 Checklist Finale

Après le push réussi, vérifiez :

- ✅ Code visible sur GitHub
- ✅ Toutes les images dans `/public` chargées
- ✅ Dossier `src` avec React components
- ✅ Fichiers de config (`package.json`, etc.)
- ✅ README.md

## 🌐 Déploiement Vercel (Optionnel)

Une fois sur GitHub, déployez automatiquement :

1. Allez sur [vercel.com/new](https://vercel.com/new)
2. Importez le repo `GO-CHICKEN`
3. Configurez :
   - Framework Preset : **Vite**
   - Root Directory : `/`
   - Build command : `npm run build`
   - Install command : `npm install`

## 🎉 Résultat

Votre site GO CHICKEN sera accessible 24h/24 !

---

**Besoin d'aide ? Vérifiez la console Git pour les erreurs exactes.**
