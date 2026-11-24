const fs = require('fs');
const path = require('path');

// Après build, copier public/images vers dist/ à la racine pour que /images/* fonctionne
const srcImagesDir = path.join(process.cwd(), 'public', 'images');
const destImagesDir = path.join(process.cwd(), 'dist');

try {
  if (fs.existsSync(srcImagesDir)) {
    const files = fs.readdirSync(srcImagesDir);
    
    files.forEach((file) => {
      const srcFile = path.join(srcImagesDir, file);
      const destFile = path.join(destImagesDir, file);
      
      // Copier le fichier à la racine de dist/
      if (!fs.existsSync(destFile)) {
        fs.copyFileSync(srcFile, destFile);
        console.log(`✓ Copié ${file} dans dist/`);
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
