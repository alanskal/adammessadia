const cloudinary = require('./_config');

cloudinary.api.resources({
  max_results: 1
})
.then(result => {
  if (result.resources.length > 0) {
    console.log('Latest resource:', result.resources[0]);
  } else {
    console.log('No resources found.');
  }
})
.catch(error => {
  console.error('Error fetching resources:', error);
});
