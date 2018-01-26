import { app } from 'hyperapp';
import '@/assets/css/main.css';
import '@/assets/css/hamburger.css';
import Router from '@/router';
import { state as originalState, actions } from './store';
import App from '@/App';

const router = Router.init();
const state = router.state ? router.state : originalState;

document.body.classList.add('app-light');
if (!state.lightBackground) document.body.classList.add('app-dark');

const vm = app(state, actions, App, document.body);

export default vm;