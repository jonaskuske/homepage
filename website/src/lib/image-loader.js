const imageLoader = images => new Promise(resolve => {
  if (typeof images === 'undefined') return resolve();
  typeof images === 'string'
    ? loadImage(images).then(resolve)
    : loadAllImages(images).then(resolve);
});

function loadAllImages(imageList) {
  const imageLoadPromises = imageList.map(img => loadImage(img));
  return Promise.all(imageLoadPromises);
}

function loadImage(img) {
  return new Promise(resolve => {
    const el = new Image();
    el.onload = () => resolve(el);
    el.src = img;
  });
}

export default imageLoader;