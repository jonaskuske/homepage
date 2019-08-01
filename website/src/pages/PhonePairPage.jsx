import { domainExtension, throttle } from '@/lib/helpers'
import { cssVariables as supportsCssVariables } from '@/lib/browser-support'

const throttledColorUpdate = throttle((color, actions) => actions.theme.setColor(color), 200)

let QRCode
const getSocketConnection = (() => {
  let socketConnection = null
  return actions => {
    if (socketConnection) return socketConnection
    Promise.all([
      import(/* webpackChunkName: 'PhonePairPage' */ 'socket.io-client'),
      import(/* webpackChunkName: 'PhonePairPage' */ 'qrcode'),
    ]).then(([{ default: io }, { default: qrCode }]) => {
      QRCode = qrCode
      const socket = io(process.env.SERVER_URL)
      socket.on('connection_established', () => actions.setSessionID(socket.id))
      socket.on('set_color', ({ color }) => {
        // Assume bad rendering perf in IE / legacy browser: use throttle
        if (!supportsCssVariables) throttledColorUpdate(color, actions)
        else actions.theme.setColor(color)
      })
      socketConnection = socket
    })
  }
})()

const getColorPickerURL = id => {
  return `https://jonaskuske.${domainExtension || 'com'}/colorpicker?session=${id}`
}
const createQRCode = (el, id, mobile) => {
  if (!QRCode) return
  QRCode.toCanvas(el, getColorPickerURL(id), { margin: 2, width: mobile ? 200 : 400 })
}

const PhonePairPage = ({ state, ...props }) => (_, actions) => {
  const { ui, sessionID, i18n } = state
  const t = i18n.t.forNamespace('PhonePairPage')

  const mobile = ui.useMobileLayout
  const className = 'phone-pair-page ' + (props.class || '')
  const sanitizedId = sessionID && sessionID.replace('/colorservice#', '')

  const Connecting = <p>{t.inline('connecting')`Trying to connect to the color server...`}</p>
  const ConnectionDetails = sanitizedId && [
    <p>
      {t.inline('instructionsStart')`Visit `}
      <a href="https://jonaskuske.com/colorpicker" rel="noopener">
        jonaskuske.{domainExtension || 'com'}/colorpicker
      </a>
      {t.inline('instructionsEnd')` on your phone and scan the QR Code or enter your ID.`}
    </p>,
    <canvas
      oncreate={el => createQRCode(el, sanitizedId, mobile)}
      onupdate={el => createQRCode(el, sanitizedId, mobile)}
    />,
    <p>
      {t.inline('sessionID')`Your unique session ID is: `}
      <span style={{ fontWeight: 600 }}>{sanitizedId}</span>
    </p>,
  ]

  return (
    <main {...props} class={className} key="pair" oncreate={getSocketConnection(actions)}>
      <h1>{t.inline('title')`Pair Your Phone`}</h1>
      {sanitizedId ? ConnectionDetails : Connecting}
    </main>
  )
}

export default PhonePairPage
