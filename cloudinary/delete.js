require('dotenv').config();
const cloudinary = require('./_config');


cloudinary.uploader.destroy('kanyehoodie', {invalidate: true, type: 'upload'}).then(result=>console.log(result));
