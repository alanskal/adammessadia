const cloudinary = require('./_config');
const fs = require('fs');
const path = require('path');

const imagePath = path.join(__dirname, '..', 'public', 'Assets', 'kanyehoodie.png');

if (!fs.existsSync(imagePath)) {
  console.error('Le fichier n\'existe pas à l\'emplacement spécifié:', imagePath);
} else {
  cloudinary.uploader.upload(imagePath, {
    use_filename: true,
    quality: '100',
    quality_analysis: true,
    colors: true,
    unique_filename: false,
  })
  .then(result => console.log(result))
  .catch(error => console.error('Erreur lors de l\'upload:', error));
}
