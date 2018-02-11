const imageLoader = (images, strict = false) => new Promise((resolve, reject) => {
  if (typeof images === 'undefined') return resolve();
  typeof images === 'string'
    ? loadImage(images, strict).then(resolve, reject)
    : loadAllImages(images, strict).then(resolve, reject);
});

function loadAllImages(imageList, strict) {
  const imageLoadPromises = imageList.map(img => loadImage(img, strict));
  return Promise.all(imageLoadPromises);
}

function loadImage(img, strict) {
  return new Promise((resolve, reject) => {
    const el = new Image();
    el.onload = () => resolve(el);
    el.onerror = e => strict ? reject(e) : resolve(e);
    el.src = img;
  });
}

export default imageLoader;