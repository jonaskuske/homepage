const CACHE_NAME = 'portfolio-colorpicker-v6'

const staticAssets = ['.']

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache =>
        fetch('/colorpicker/build-manifest.json')
          .then(response => response.json())
          .then(assets => {
            const hashedAssets = Object.entries(assets)
              // filter out files that are unnecessary to cache
              .filter(
                ([sourceURL]) =>
                  !sourceURL.includes('webmanifest') &&
                  !sourceURL.includes('favicon') &&
                  !sourceURL.endsWith('.map') &&
                  !sourceURL.endsWith('.gz') &&
                  !sourceURL.startsWith('icon'),
              )
              .map(([_, hashedURL]) => hashedURL)

            return cache.addAll([...staticAssets, ...hashedAssets])
          }),
      )
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', event => {
  const allowedCaches = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then(cacheNames => {
      const cacheDeletePromises = cacheNames.map(cacheName => {
        if (!allowedCaches.includes(cacheName)) {
          return caches.delete(cacheName)
        }
      })
      return Promise.all(cacheDeletePromises)
    }),
  )
})

const checkResponseStatus = r =>
  new Promise((res, rej) => {
    if ((r.status >= 200 && r.status < 300) || r.status === 0) res(r)
    else rej(r.statusText)
  })

const isRequestCacheable = request => {
  let isCacheable = true
  const url = new URL(request.url)

  if (url.pathname === '/socket.io/' && url.host === 'data.jonaskuske.com') {
    isCacheable = false
  }
  if (url.protocol === 'chrome-extension:') {
    isCacheable = false
  }

  return isCacheable
}
const isResponseCacheable = response => {
  let isCacheable = true
  // don't cache opaque response to prevent exceeding cache size quota
  // see https://cloudfour.com/thinks/when-7-kb-equals-7-mb/
  if (response.status === 0 || response.type === 'opaque') {
    isCacheable = false
  }
  return isCacheable
}

const requestFailingWith404 = event => {
  return fetch(event.request).catch(() => {
    const body = JSON.stringify({
      error: `Sorry, you're offline. :(
Try again once you have a working internet connection.`,
    })
    const headers = { 'Content-Type': 'application/json' }
    return new Response(body, { status: 404, statusText: 'Not Found', headers })
  })
}
const requestThenCache = (event, cache) => {
  return fetch(event.request)
    .then(checkResponseStatus)
    .then(response => {
      if (isResponseCacheable(response)) {
        cache.put(event.request, response.clone())
      }
      return response
    })
    .catch(() => cache.match(event.request))
}

self.addEventListener('fetch', event => {
  // if request should not be cached: respond with fetch and return
  if (!isRequestCacheable(event.request)) {
    event.respondWith(requestFailingWith404(event))
    return
  }

  // neccessary for sw to handle requests with query strings
  const requestURL = event.request.url
  const request = requestURL.includes('?')
    ? new Request(requestURL.substring(requestURL.indexOf('?') + 1))
    : event.request

  event.respondWith(
    caches
      .match(request)
      .then(checkResponseStatus)
      .then(response => {
        return caches.open(CACHE_NAME).then(cache => {
          if (navigator.onLine) requestThenCache(event, cache)
          return response
        })
      })
      .catch(() => {
        return caches
          .open(CACHE_NAME)
          .then(cache => requestThenCache(event, cache))
      }),
  )
})
