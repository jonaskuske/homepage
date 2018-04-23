/* global io */

const SOCKET = io.connect();

SOCKET.on('connection_established', () => {
  const { id } = SOCKET;
  if (!id) return console.error('Socket connection failed.');
});

document.addEventListener('DOMContentLoaded', () => {


  const form = document.querySelector('form');
  const inputId = document.querySelector('#id');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const id = inputId.value;
    SOCKET.emit('request_server', { id });
  });

  SOCKET.on('succesful_match', ({ id }) => {
    startColorPicker(id);
    const footer = document.createElement('p');
    footer.classList.add('footer');
    footer.textContent = 'Verbindung zu Farb-Server hergestellt.';
    document.body.appendChild(footer);
  });

  const startColorPicker = id => {
    const colorPicker = document.createElement('input');
    colorPicker.type = 'color';

    document.body.insertBefore(colorPicker, form);
    document.body.removeChild(form);

    colorPicker.addEventListener('change', () => {
      const color = colorPicker.value;
      SOCKET.emit('set_color', { id, color });
      document.body.style.setProperty('--theme-color', color);
    });
  };


});