import io from 'socket.io-client'
import {
  $,
  $$,
  debounce,
  throttle,
  wait,
  domainExtension,
  createColorpicker,
  getQueryParams,
} from './lib/helpers'
import COLOR_PALETTE from '../assets/images/colorpalette.png'
import './registerManifest'
import './registerServiceWorker'
import '../assets/styles/style.css'

console.log(process.env.SERVER_URL)

const SOCKET = io.connect(process.env.SERVER_URL)
let QR_SCANNER = undefined // QR code scanner, set as soon as instascan code is downloaded and executed
let USER_CAMERA // set once Instascan has detected the device's cameras
let TARGET_ID = undefined // is set as soon as an entered client id is confirmed by the server
let colorpickerIsActive = false
let isOnline = true
let language = 'en'

// HTML Elements
const main = $('main')
const video = $('video')
const overlay = $('.video-overlay')
const reconnectSection = $('.reconnect')
const reconnectWarn = $('.reconnect-warn')
const reconnectPrompt = $('.reconnect-prompt')
const reconnectButton = $('.btn-reconnect')
const form = $('form')
const input = $('#id')
const submitButton = form.querySelector('button')
const root = $(':root')

video.addEventListener('canplay', () => {
  if (!video.srcObject.active) return
  isOnline
    ? setTimeout(() => video.parentNode.classList.remove('bounce-in'), 20)
    : video.parentNode.classList.remove('bounce-in')
  video.parentNode.classList.remove('hidden')
})
video.addEventListener('abort', () => {
  video.parentNode.classList.add('hidden')
  video.parentNode.classList.add('bounce-in')
})

let LAST_TARGET_ID
const handleConnectionLoss = () => {
  colorpickerIsActive = false
  LAST_TARGET_ID = TARGET_ID
  TARGET_ID = undefined
  const picker = $('#colorPicker')
  picker && picker.remove()
  main.classList.remove('hidden')
  USER_CAMERA && QR_SCANNER.start(USER_CAMERA)
  reconnectSection.classList.remove('hidden')
  reconnectWarn.classList.remove('hidden')
  reconnectPrompt.classList.add('hidden')
}
let prevBgColor, prevThemeColor
const handleOfflineState = () => {
  overlay.classList.remove('invisible')
  submitButton.disabled = true
  isOnline = false
  prevBgColor = getComputedStyle(root).getPropertyValue('--bg-color')
  prevThemeColor = getComputedStyle(root).getPropertyValue('--theme-color')
  root.style.setProperty('--bg-color', 'rgba(128, 128, 128, 0.6)')
  root.style.setProperty('--theme-color', 'rgb(128, 128, 128)')
  if (TARGET_ID) handleConnectionLoss()
}
const handleOnlineState = () => {
  overlay.classList.add('invisible')
  submitButton.disabled = false
  isOnline = true
  root.style.setProperty('--bg-color', prevBgColor || 'rgba(200, 197, 0, 0.6)')
  root.style.setProperty('--theme-color', prevThemeColor || 'rgb(200, 187, 0)')
  if (LAST_TARGET_ID) {
    reconnectWarn.classList.add('hidden')
    reconnectPrompt.classList.remove('hidden')
    if (
      parseInt(getComputedStyle(video).getPropertyValue('height')) >
      window.innerHeight * 0.75
    ) {
      reconnectPrompt.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

if (!navigator.onLine) handleOfflineState()
window.addEventListener('online', handleOnlineState)
window.addEventListener('offline', handleOfflineState)

// text localization
const localizedNodes = $$('*[data-de]')
localizedNodes.forEach(el => (el.dataset.en = el.textContent))

const switchLanguage = () => {
  language = language == 'en' ? 'de' : 'en'
  localizedNodes.forEach(el => el.classList.add('textsquish'))
  wait(210).then(() => {
    localizedNodes.forEach(
      el => (
        (el.textContent = el.dataset[language]),
        el.classList.remove('textsquish')
      ),
    )
  })
}

if (domainExtension === 'de') switchLanguage()
$('.language-toggle').addEventListener('click', switchLanguage)

// fade in content
setTimeout(
  () => $$('.js-cloak').forEach(el => el.classList.remove('js-cloak')),
  400,
)

// Check if site successfully registered with color server
SOCKET.on(
  'connection_established',
  () => !SOCKET.id && console.error('Socket connection failed.'),
)

// Send entered ID to server for confirmation
const matchId = id => {
  if (!isOnline) return

  id = id.startsWith('/colorservice#') ? id : `/colorservice#${id}`
  SOCKET.emit('request_server', { id })
}

reconnectButton.addEventListener('click', () => matchId(LAST_TARGET_ID))

// ID confirmed: hide start screen and start color picker
SOCKET.on('succesful_match', ({ id }) => {
  if (QR_SCANNER) QR_SCANNER.stop()
  main.classList.add('hidden')

  TARGET_ID = id
  reconnectSection.classList.add('hidden')
  input.value = ''
  LAST_TARGET_ID = undefined
  setTimeout(() => {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, 150)

  initColorpicker()
})

// Look for session id in querystring
const { session } = getQueryParams(window.location.href)
if (session) matchId(session)

// Listen for form input of session id
form.addEventListener('submit', e => {
  e.preventDefault()

  const id = input.value.trim()
  matchId(id)
})

// Listen for id input through QR codes after Instascan is downloaded
!TARGET_ID &&
  import(/* webpackChunkName: "instascan" */ './lib/instascan.js').then(() => {
    const Instascan = window.Instascan
    if (!Instascan) return console.error("Couldn't load Instascan service.")
    if (colorpickerIsActive) return

    if (TARGET_ID) return

    QR_SCANNER = new Instascan.Scanner({
      video,
      captureImage: false,
      mirror: false,
      backgroundScan: false,
    })
    QR_SCANNER.addListener('scan', url => {
      console.log(url)
      const { session } = getQueryParams(url)
      console.log(session)
      session && matchId(session)
    })

    Instascan.Camera.getCameras()
      .then(cameras => {
        if (cameras) {
          USER_CAMERA = cameras[1] || cameras[0]
          QR_SCANNER.start(USER_CAMERA)
        } else console.error('No cameras found.')
      })
      .catch(e => console.error(e))
  })

let hexGlobal
const addColorToLink = event => {
  const color = isOnline ? hexGlobal || '#c8bb00' : '#808080'
  event.target.href = event.target.href.replace(/\?.*/, '')
  event.target.href += `?lang=${language}&color=${color}`
}
const linksToPortfolio = [...$$('a.to-portfolio')]
linksToPortfolio.forEach(l => l.addEventListener('mousedown', addColorToLink))

const initColorpicker = () => {
  colorpickerIsActive = true

  const colorpicker = createColorpicker(COLOR_PALETTE)
  const emitColor = throttle(
    (color, id) => SOCKET.emit('set_color', { id, color }),
    50,
  )

  colorpicker.container.addEventListener('change', () => {
    const { rgb, hex } = colorpicker
    const rgba = `rgba(${rgb.split(/\(|\)/g)[1]},0.6)`
    if (hex === '#000000') return
    hexGlobal = hex
    emitColor(hex, TARGET_ID)
    root.style.setProperty('--bg-color', rgba)
    root.style.setProperty('--theme-color', rgb)
  })
}

// After resize: Stop old color picker and start new one
const restartPicker = () => colorpickerIsActive && initColorpicker()
window.addEventListener('resize', debounce(restartPicker, 200))
