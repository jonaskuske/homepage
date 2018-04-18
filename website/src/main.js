import '@/assets/css';
import { app } from 'hyperapp';
import { state, actions } from './store';
import router from './router';
import App from '@/App';
import Miniswipe from 'miniswipe';

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

// init Miniswipe: open Menu with swipe gestures on touch devices
const swipeHandler = new Miniswipe(document);
swipeHandler
  .right(() => vm.setMenu(true))
  .left(() => vm.setMenu(false))
  .start();


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').catch(err => {
    console.warn('SW registration failed: ', err);
  });
}

// If deployed as PWA: hide web app install banner (inappropriate for portfolio site)
window.addEventListener('beforeinstallprompt', e => e.preventDefault());


// Hmm... :P
(() => {
  console.log('Konamiparty? Yes.'); // eslint-disable-line

  const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
  const keyPresses = [];
  keyPresses.empty = function () { while (this.length) this.pop(); };

  const containsArray = (baseArr, queryArr) => {
    return JSON.stringify(baseArr)
      .replace(/^\[|\]$/g, '')
      .includes(JSON.stringify(queryArr)
        .replace(/^\[|\]$/g, '')
      );
  };

  document.addEventListener('keyup', (e) => {
    if (!konamiCode.includes(e.keyCode)) return keyPresses.empty();

    keyPresses.push(e.keyCode);

    if (containsArray(keyPresses, konamiCode)) {
      vm.toggleEasteregg();
      keyPresses.empty();
    }
  });
})();