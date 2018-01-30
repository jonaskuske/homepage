import actions from '@/main';
import { wait } from '@/lib/helpers';
import Imprint from '@@/Imprint';
import Projects from '@@/Projects';
import Splash from '@@/Splash';
import Details from '@@/Details';
import About from '@@/About';
import ErrorPage from '@@/404';
import LoadingScreen from '@@/LoadingScreen';

const getProjectTitle = input => {
  const query = input.includes('?') ? input : window.location.search ? window.location.search : '?title=Fehler';
  return query.split('?')[1].split('=')[1].replace('/', '');
};

let RouterView;

const routes = [
  {
    path: '/',
    name: 'Portfolio',
    component: Splash
  },
  {
    path: '/projekte',
    name: 'Projekte',
    component: Projects
  },
  {
    path: '/detail',
    name: getProjectTitle,
    component: Details
  },
  {
    path: '/me',
    name: 'Über mich',
    component: About
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: Imprint
  }
];

const router = {
  routes,
  fallback: {
    component: ErrorPage,
    name: '404'
  },
  push(target, pushState = true) {
    const { component, name } = router.match(target.split('?')[0]);
    const title = typeof name === 'string' ? name : name(target);
    RouterView = component;
    document.querySelector('title').textContent = `${title} | Jonas Kuske`;
    if (pushState) history.pushState({}, title, target);
    actions.setPage(target);
  },
  init() {
    window.addEventListener('popstate', state => router.push(state.path[0].location.pathname, false));
    router.getProjectFromURL().then(() => {
      router.push(window.location.pathname, false);
    });
  },
  match(route) {
    return router.routes.reduce((a, b) => b.path === route ? b : a, router.fallback);
  },
  getProjectFromURL() {
    const source = window.location.search;
    const query = source.substring(1).split('=');
    return new Promise(resolve => {
      if (query[0] !== 'id') return resolve();
      RouterView = LoadingScreen;
      return Promise.all([
        actions.requestProject(query[1]),
        wait(600)
      ]).then(resolve);

    });

  }
};

export { RouterView };

export default router;
