import '@/lib/.htaccess';
import { app } from 'hyperapp';
import { state, actions } from './store';
import Router from '@/router';
import App from '@/App';
import bg from '@/assets/images/bg.jpg';
import '@/assets/css/main.css';
import '@/assets/css/hamburger.css';

export default app(state, actions, App, document.body);

Router.init();