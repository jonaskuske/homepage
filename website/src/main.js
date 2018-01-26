import { app } from 'hyperapp';
import { state, actions } from './store';
import Router from '@/router';
import App from '@/App';
import '@/assets/css/main.css';
import '@/assets/css/hamburger.css';

document.body.classList.add('app-light');

export default app(state, actions, App, document.body);

Router.init();