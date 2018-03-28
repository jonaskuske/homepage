import '@/assets/css';
import { app } from 'hyperapp';
import Swiper from '@/lib/swiper';
import { state, actions } from './store';
import router from './router';
import App from '@/App';


const vm = app(state, actions, App, document.body);
export default vm;

const matchExtension = new RegExp(/\.(?!\.)(?!.+\.).+/);
const matches = matchExtension.exec(window.location.host);
const ext = matches ? matches[0].replace('.', '') : 'de';

vm.getLanguage({ language: ext === 'com' ? 'en' : 'de' })
  .then(() => vm.fetchProjects())
  .then(router.init);

const swipeHandler = new Swiper(document);
swipeHandler
  .right(() => vm.setMenu(true))
  .left(() => vm.setMenu(false));

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').catch(err => {
    console.warn('SW registration failed: ', err);
  });
}

window.addEventListener('beforeinstallprompt', e => e.preventDefault());
