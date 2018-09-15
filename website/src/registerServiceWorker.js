if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').catch(err => {
    console.warn('SW registration failed: ', err)
  })
}

// If deployed as PWA: hide web app install banner (inappropriate for portfolio site)
window.addEventListener('beforeinstallprompt', e => e.preventDefault())
