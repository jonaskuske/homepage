import actions from '@/main';
import router from '@/router';
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

const createQRCode = (el, text, mobile) => QRCode.toCanvas(el, text, { margin: 2, width: mobile ? 200 : 400 });
const getSessionUrl = id => `https://jonaskuske.com/colorpicker?session=${id}`;

const view = ({ data: { locales: { PairYourPhone = {} }, sessionID: id, mobile }, ...props }) => (
  <main {...props} key="pair" oncreate={socket}>
    <h1>{PairYourPhone.h1}</h1>
    {!id
      ? <p>{PairYourPhone.connecting}</p>
      : [
        <p>{PairYourPhone.description}</p>,
        <canvas oncreate={el => createQRCode(el, getSessionUrl(id), mobile)} onupdate={el => createQRCode(el, getSessionUrl(id), mobile)} />,
        <p>{PairYourPhone.sessionID}<span style={{ fontWeight: 600 }}>{id}</span></p>
      ]}
  </main>
);

export default view;