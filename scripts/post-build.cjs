const fs = require('fs');
const path = require('path');

// Après build, copier public/images vers dist/ à la racine pour que /images/* fonctionne
const srcImagesDir = path.join(process.cwd(), 'public', 'images');
const destImagesDir = path.join(process.cwd(), 'dist');

try {
  if (fs.existsSync(srcImagesDir)) {
    const files = fs.readdirSync(srcImagesDir);
    
    files.forEach((file) => {
      // Skip dossiers, ne copier que les fichiers
      const srcFile = path.join(srcImagesDir, file);
      const destFile = path.join(destImagesDir, file);
      
      // Vérifier que c'est un fichier (pas un dossier) et qu'il n'existe pas déjà
      if (fs.statSync(srcFile).isFile() && !fs.existsSync(destFile)) {
        fs.copyFileSync(srcFile, destFile);
        console.log(`✓ Copié ${file} dans dist/`);
      } else if (fs.statSync(srcFile).isDirectory()) {
        console.log(`⊘ Saute dossier : ${file}`);
      }
    });
    
    console.log('\n✅ Images copiées vers dist/ pour Vercel SPA');
  } else {
    console.log('⚠️ public/images n\'existe pas, skip.');
  }
} catch (error) {
  console.error('Erreur post-build:', error.message);
  process.exit(1);
}
