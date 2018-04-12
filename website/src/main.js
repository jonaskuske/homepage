import '@/assets/css';
import { app } from 'hyperapp';
import { state, actions } from './store';
import router from './router';
import App from '@/App';
import Miniswipe from 'miniswipe';

const vm = app(state, actions, App, document.body);
export default vm;

const domainExtRegEx = new RegExp(/\.(?!\.)(?!.+\.).+/);
const domainExtMatch = domainExtRegEx.exec(window.location.host);
const ext = domainExtMatch && domainExtMatch[0].replace('.', '');

const { lang } = window.location.href.includes('?') && router.getQueryParams(window.location.href);
const language = lang === 'de' || ext !== 'com' ? 'de' : 'en';

vm.getLanguage({ language })
  .then(() => vm.fetchProjects())
  .then(router.init);

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

window.addEventListener('beforeinstallprompt', e => e.preventDefault());
