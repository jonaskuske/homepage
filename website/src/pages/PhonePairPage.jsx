import actions from '@/main';
import { domainExtension, parseText } from '@/lib/helpers';
import QRCode from 'qrcode';
import io from 'socket.io-client';

const socket = (() => {
  let webSocket = false;
  return () => {
    if (webSocket) return webSocket;
    else {
      const socket = io('https://data.jonaskuske.com');
      socket.on('connection_established', () => {
        actions.setSessionID(socket.id);
      });
      socket.on('set_color', ({ color }) => {
        actions.setColor(color);
      });
      return webSocket = socket;
    }
  };
})();

const createQRCode = (el, id, mobile) => QRCode.toCanvas(
  el,
  `https://jonaskuske.${domainExtension || 'com'}/colorpicker?session=${id}`,
  { margin: 2, width: mobile ? 200 : 400 }
);

const view = ({ data: { locales: { PairYourPhone = {} }, sessionID: id, mobile }, class: className = '', ...props }) => (
  <main {...props} class={`phone-pair-page ${className}`} key="pair" oncreate={socket}>
    <h1>{PairYourPhone.h1}</h1>
    {!id
      ? <p>{PairYourPhone.connecting}</p>
      : [
        <p>{parseText(PairYourPhone.description)}</p>,
        <canvas
          oncreate={el => createQRCode(el, id, mobile)}
          onupdate={el => createQRCode(el, id, mobile)}
        />,
        <p>{PairYourPhone.sessionID}<span style={{ fontWeight: 600 }}>{id}</span></p>
      ]}
  </main>
);

export default view;