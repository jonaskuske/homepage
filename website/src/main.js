import '@/assets/css';
import { app } from 'hyperapp';
import { state, actions } from './store';
import router from './router';
import App from '@/App';
import { domainExtension } from '@/lib/helpers';
import '@/lib/no-easteregg';

// init new hyperapp and export the initialized actions
const vm = app(state, actions, App, document.body);
export default vm;

// Keep 'mobile' prop in store in sync with media query
const mediaQuery = window.matchMedia('(min-width: 900px)');
const queryHandler = query => vm.setLayout(query.matches ? false : true);
queryHandler(mediaQuery);
mediaQuery.addListener(queryHandler);

// get query parameters
const { lang, color } = window.location.href.includes('?') && router.getQueryParams(window.location.href);

// set language to English if lang is 'en' or using .com, else German
const language = lang === 'de' || (domainExtension !== 'com' && lang !== 'en') ? 'de' : 'en';

// set site color
if (color) { vm.setColor(color); vm.addColor(color); }
else vm.setRandomColor();

// fetch localized text and project assets, then init router -> move to page specified in URL
vm.getLanguage({ language })
  .then(vm.fetchProjects)
  .then(router.init);


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').catch(err => {
    console.warn('SW registration failed: ', err);
  });
}

// If deployed as PWA: hide web app install banner (inappropriate for portfolio site)
window.addEventListener('beforeinstallprompt', e => e.preventDefault());
