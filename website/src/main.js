import { app } from 'hyperapp';
import { state, actions } from './store';
import '@/assets/css/main.css';
import '@/assets/css/hamburger.css';
import App from '@/App';

document.body.classList.add('app-light');

const vm = app(state, actions, App, document.body);

export default vm;