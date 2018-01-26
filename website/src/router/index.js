import actions from '@/main';
import Imprint from '@@/Imprint';
import Projects from '@@/Projects';
import Splash from '@@/Splash';
import Details from '@@/Details';
import About from '@@/About';
import ErrorPage from '@@/404';

let RouterView;

const routes = [
  {
    path: '/',
    component: Splash
  },
  {
    path: '/projekte',
    component: Projects
  },
  {
    path: '/detail',
    component: Details
  },
  {
    path: '/me',
    component: About
  },
  {
    path: '/impressum',
    component: Imprint
  }
];

const router = {
  routes,
  push(target) {
    RouterView = router.match(target.split('?')[0]);
    router.setTitle(target);
    history.pushState(actions.getState(), target, target);
    if (target.includes('?')) router.getProjectFromQuery();
    actions.forceUpdate();
  },
  init() {
    RouterView = router.match(window.location.pathname);
    router.setTitle(window.location.pathname);
    router.getProjectFromQuery();
  },
  match(route) {
    return router.routes.reduce((a, b) => b.path === route ? b.component : a, ErrorPage);
  },
  setTitle(string) {
    const title = (string === '/' ? 'Portfolio' : string).replace('/', '');
    document.querySelector('title').textContent = `${title.charAt(0).toUpperCase() + title.slice(1)} | Jonas Kuske`;
  },
  getProjectFromQuery() {
    const source = window.location.search;
    const query = source.substring(1).split('=');
    if (query[0] !== 'id') return false;
    actions.getProject(query[1]);
  }
};

export { RouterView };

export default router;
