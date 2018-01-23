import { app } from 'hyperapp';
import '@/assets/css/main.css';
import '@/assets/css/hamburger.css';
import App from '@/App';

const container = document.createElement('div');
container.id = 'app';
document.body.classList.add('app-light');
document.body.prepend(container);

const state = {
  sideMenu: false,
  lightBackground: true,
  page: 'splash'
};

const actions = {
  toggleMenu: () => state => ({ sideMenu: !state.sideMenu }),
  setMenu: value => state => ({ sideMenu: value }),
  setPage: value => state => ({ page: value }),
  toggleBackground: () => state => ({ lightBackground: !state.lightBackground })
};

const vm = app(state, actions, App, document.querySelector('#app'));

export default vm;