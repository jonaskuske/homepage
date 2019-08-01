module.exports = {
  plugins: [
    require('autoprefixer')({ supports: false }),
    require('postcss-object-fit-images'),
    require('postcss-focus-visible')({ preserve: false }),
    require('cssnano'),
  ],
}
