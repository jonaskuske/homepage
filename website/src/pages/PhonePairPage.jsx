import actions from '@/main'
import { domainExtension, parseText, throttle } from '@/lib/helpers'
import { cssVariables as supportsCssVariables } from '@/lib/browser-support'
import QRCode from 'qrcode'
import io from 'socket.io-client'

const throttledColorUpdate = throttle(color => actions.setColor(color), 200)

const getSocketConnection = (() => {
  let socketConnection = null
  return () => {
    if (socketConnection) return socketConnection

    const socket = io(process.env.SERVER_URL)
    socket.on('connection_established', () => actions.setSessionID(socket.id))
    socket.on('set_color', ({ color }) => {
      // Assume bad rendering perf in IE / legacy browser: use throttle
      if (!supportsCssVariables) throttledColorUpdate(color)
      else actions.setColor(color)
    })

    return (socketConnection = socket)
  }
})()

const getColorPickerURL = id => {
  return `https://jonaskuske.${domainExtension || 'com'}/colorpicker?session=${id}`
}
const createQRCode = (el, id, mobile) => {
  QRCode.toCanvas(el, getColorPickerURL(id), { margin: 2, width: mobile ? 200 : 400 })
}

const PhonePairPage = ({ data, ...props }) => {
  const { mobile, sessionID, locales } = data
  const translations = locales.PairYourPhone || {}

  const className = 'phone-pair-page ' + props.class || ''
  const sanitizedId = sessionID && sessionID.replace('/colorservice#', '')

  const Connecting = <p>{translations.connecting}</p>
  const ConnectionDetails = sanitizedId && [
    <p>{parseText(translations.description)}</p>,
    <canvas
      oncreate={el => createQRCode(el, sanitizedId, mobile)}
      onupdate={el => createQRCode(el, sanitizedId, mobile)}
    />,
    <p>
      {translations.sessionID}
      <span style={{ fontWeight: 600 }}>{sanitizedId}</span>
    </p>,
  ]

  return (
    <main {...props} class={className} key="pair" oncreate={getSocketConnection}>
      <h1>{translations.h1}</h1>
      {sanitizedId ? ConnectionDetails : Connecting}
    </main>
  )
}

export default PhonePairPage
