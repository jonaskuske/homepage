import { create } from '@/lib/helpers'

// don't register web app on iOS - getUserMedia is not available in iOS web apps
if (!navigator.userAgent.includes('ios')) {
  const link = create('link')
  link.rel = 'manifest'
  link.href = './manifest.webmanifest'
  document.head.appendChild(link)
}
