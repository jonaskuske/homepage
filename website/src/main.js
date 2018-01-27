import { app } from 'hyperapp';
import { state, actions } from './store';
import Router from '@/router';
import App from '@/App';
import bg from '@/assets/images/bg-light.jpg';
import imageLoader from '@/lib/image-loader';
import '@/assets/css/main.css';
import '@/assets/css/hamburger.css';

document.body.classList.add('app-light');

imageLoader(['http://www.qygjxz.com/data/out/18/5769022-background-image.png', bg]);

export default app(state, actions, App, document.body);

Router.init();