import { app } from 'hyperapp';
import { state, actions } from './store';
import '@/assets/css/main.css';
import '@/assets/css/hamburger.css';
import App from '@/App';

const container = document.createElement('div');
container.id = 'app';
document.body.prepend(container);
document.body.classList.add('app-light');

const vm = app(state, actions, App, document.querySelector('#app'));

export default vm;