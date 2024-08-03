const cloudinary = require('./_config');

cloudinary.api
.resources({ sort_by: {created_at: 'asc' }})
.then(result=>console.log(result));
