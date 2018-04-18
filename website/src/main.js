import '@/assets/css';
import { app } from 'hyperapp';
import { state, actions } from './store';
import router from './router';
import App from '@/App';
import { containsArray } from '@/lib/helpers';
import Miniswipe from 'miniswipe';
import Shake from 'shake.js';

const SHAKE_LISTENER = new Shake({ threshold: 15, timeout: 1000 });
SHAKE_LISTENER.start();
const SWIPE_LISTENER = new Miniswipe(document, { debug: false });
SWIPE_LISTENER.start();

// init new hyperapp and export the initialized actions
const vm = app(state, actions, App, document.body);
export default vm;

// Keep 'mobile' prop in store in sync with media query
const mediaQuery = window.matchMedia('(min-width: 900px)');
const queryHandler = query => vm.setLayout(query.matches ? false : true);
queryHandler(mediaQuery);
mediaQuery.addListener(queryHandler);

// get query parameters
const { lang, color } = window.location.href.includes('?') && router.getQueryParams(window.location.href);

// find domain extension
const domainExtRegEx = new RegExp(/\.(?!\.)(?!.+\.).+/);
const domainExtMatch = domainExtRegEx.exec(window.location.host);
const ext = domainExtMatch && domainExtMatch[0].replace('.', '');

// set language to English if lang is 'en' or using .com, else German
const language = lang === 'de' || (ext !== 'com' && lang !== 'en') ? 'de' : 'en';

// set site color
if (color) { vm.setColor(color); vm.addColor(color); }
else vm.setRandomColor();

// fetch localized text and project assets, then init router -> move to page specified in URL
vm.getLanguage({ language })
  .then(vm.fetchProjects)
  .then(router.init);

// open Menu with swipe gestures on touch devices
SWIPE_LISTENER
  .right(() => vm.setMenu(true))
  .left(() => vm.setMenu(false));


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').catch(err => {
    console.warn('SW registration failed: ', err);
  });
}

// If deployed as PWA: hide web app install banner (inappropriate for portfolio site)
window.addEventListener('beforeinstallprompt', e => e.preventDefault());






/*   Hmm, what is this... :P  🔮✨  */

const KEY_UP = 38;
const KEY_DOWN = 40;
const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_A = 65;
const KEY_B = 66;
const KEY_ENTER = 13;
const KEY_SHIFT = 16;

const noRickroll = document.createElement('audio'); noRickroll.loop = true;
const mp3 = document.createElement('source'); mp3.type = 'audio/mpeg';
mp3.src = 'https://ia800605.us.archive.org/8/items/NeverGonnaGiveYouUp/jocofullinterview41.mp3';
const ogg = document.createElement('source'); ogg.type = 'audio/ogg';
ogg.src = 'https://ia800605.us.archive.org/8/items/NeverGonnaGiveYouUp/jocofullinterview41.ogg';
noRickroll.appendChild(ogg); noRickroll.appendChild(mp3);
document.body.appendChild(noRickroll);

(() => {
  let audioIsPlaying = false;
  console.log('%cKonami%cparty? %cYes.', 'color: red', 'color: gold', 'color: rebeccapurple'); // eslint-disable-line

  const konamiCode = [KEY_UP, KEY_UP, KEY_DOWN, KEY_DOWN, KEY_LEFT, KEY_RIGHT, KEY_LEFT, KEY_RIGHT, KEY_B, KEY_A, KEY_ENTER];
  const keyPresses = [];
  keyPresses.empty = function () { while (this.length) this.pop(); };

  const handleKeyPress = (key, requiresConfirmation) => {
    key = key.keyCode || key;
    if (key === KEY_SHIFT) return;
    if (!konamiCode.includes(key)) return keyPresses.empty();

    keyPresses.push(key);

    if (containsArray(keyPresses, konamiCode)) {
      keyPresses.empty();
      vm.setMenu(false);
      const startTheShow = () => {
        vm.toggleEasteregg();
        audioIsPlaying ? (noRickroll.pause(), noRickroll.currentTime = 0) : noRickroll.play();
        audioIsPlaying = !audioIsPlaying;
      };
      if (requiresConfirmation && !audioIsPlaying) createModal(startTheShow);
      else startTheShow();
    }
  };

  // listen for konami-relevant events
  document.addEventListener('keyup', handleKeyPress);
  SWIPE_LISTENER
    .left(() => handleKeyPress(KEY_LEFT))
    .right(() => handleKeyPress(KEY_RIGHT))
    .up(() => handleKeyPress(KEY_UP))
    .down(() => handleKeyPress(KEY_DOWN));
  window.addEventListener('shake', () => {
    handleKeyPress(KEY_B);
    handleKeyPress(KEY_A);
    handleKeyPress(KEY_ENTER, true);
  }, false);
})();

const createModal = (fn) => {
  const modal = document.createElement('div');
  const text = document.createElement('p');
  const button = document.createElement('button');
  modal.id = 'no-rickroll';
  modal.appendChild(text);
  modal.appendChild(button);
  text.textContent = 'Party time?';
  button.textContent = 'Turn it up!';
  button.addEventListener('click', () => {
    fn && fn();
    document.body.classList.remove('no-overflow');
    document.body.removeChild(modal);
  });
  document.body.classList.add('no-overflow');
  document.body.insertBefore(modal, document.body.firstChild);
};