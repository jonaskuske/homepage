import { app } from 'hyperapp';
import '@/assets/css/main.css';
import '@/assets/css/hamburger.css';
import Router from '@/router';
import { state, actions } from './store';
import App from '@/App';


document.body.classList.add('app-light');
if (!state.lightBackground) document.body.classList.add('app-dark');

export default app(state, actions, App, document.body);

Router.init();