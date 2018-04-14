import '@/assets/css';
import { app } from 'hyperapp';
import { state, actions } from './store';
import router from './router';
import App from '@/App';
import Miniswipe from 'miniswipe';

// init new hyperapp and export the initialized actions
const vm = app(state, actions, App, document.body);
export default vm;

// find domain extension
const domainExtRegEx = new RegExp(/\.(?!\.)(?!.+\.).+/);
const domainExtMatch = domainExtRegEx.exec(window.location.host);
const ext = domainExtMatch && domainExtMatch[0].replace('.', '');
// look for "lang" in query string
const { lang } = window.location.href.includes('?') && router.getQueryParams(window.location.href);
// set language to German if lang is set to "de" or site isn't using .com domain
const language = lang === 'de' || ext !== 'com' ? 'de' : 'en';

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
