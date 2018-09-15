module.exports = {
  plugins: [
    require('autoprefixer')({ supports: false }),
    require('postcss-object-fit-images')
  ]
};