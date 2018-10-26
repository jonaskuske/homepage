/* eslint-disable no-console */
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./service-worker.js')
    .then(() => {
      console.log('Service worker registered. Caching files for offline use.')
    })
    .catch(error => {
      console.warn(`Failed to register service worker: ${error}`)
    })
}
