import actions from '@/main';
import { wait } from '@/lib/helpers';
import Imprint from '@@/Imprint';
import Projects from '@@/Projects';
import Splash from '@@/Splash';
import Details from '@@/Details';
import About from '@@/About';
import ErrorPage from '@@/404';
import LoadingScreen from '@@/LoadingScreen';

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
  push(target, title, pushState = true) {
    const { component, name } = router.match(target.split('?')[0]);
    title = name ? name : title ? title : '';
    RouterView = component;
    document.querySelector('title').textContent = `${title} | Jonas Kuske`;
    if (pushState) history.pushState({ page: target }, title, target);
    actions.setPage(target);
  },
  init() {
    window.addEventListener('popstate', state => { router.push(state.state.page, '', false); });
    router.getProjectFromURL().then(title => {
      router.push(window.location.pathname, title);
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
      ]).then(res => resolve(res[0].title));

    });

  }
};

export { RouterView };

export default router;
