import '@/lib/.htaccess';
import '@/assets/css';
import { app } from 'hyperapp';
import Swiper from '@/lib/swiper';
import { state, actions } from './store';
import router from '@/router';
import App from '@/App';



const vm = app(state, actions, App, document.body);
export default vm;

vm.fetchProjects().then(router.init);

const swipeHandler = new Swiper(document);
swipeHandler
  .right(() => vm.setMenu(true))
  .left(() => vm.setMenu(false));

window.debug = vm;
