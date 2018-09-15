self.oninstall = _ => self.skipWaiting()
self.onactivate = _ => {
  self.registration.unregister()
}
