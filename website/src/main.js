import { app } from 'hyperapp';
import '@/lib/.htaccess';
import '@/assets/css/main.css';
import '@/assets/css/hamburger.css';
import Swiper from '@/lib/swiper';
import { state, actions } from './store';
import Router from '@/router';
import App from '@/App';



const vm = app(state, actions, App, document.body);
export default vm;

Router.init();

const swipeHandler = new Swiper(document);
swipeHandler
  .right(() => vm.setMenu(true))
  .left(() => vm.setMenu(false))
  .init();
