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
  push(target, pushNew = true) {
    RouterView = router.match(target.split('?')[0]);
    if (pushNew) history.pushState({}, target, target);
    router.setTitle(target);
    if (target.includes('?')) router.getProjectFromURL();
    actions.setPage(target);
    actions.forceUpdate();
  },
  init() {
    RouterView = router.match(window.location.pathname);
    actions.setPage(window.location.pathname);
    router.getProjectFromURL();
    window.addEventListener('popstate', state => router.push(state.path[0].location.pathname, false));
  },
  match(route) {
    return router.routes.reduce((a, b) => b.path === route ? b.component : a, ErrorPage);
  },
  setTitle(s) {
    const t = (s === '/' ? 'Portfolio' : s.includes('?') ? s.split('?')[1].split('=')[1] : s).replace('/', '');
    document.querySelector('title').textContent = `${t[0].toUpperCase() + t.slice(1)} | Jonas Kuske`;
  },
  getProjectFromURL() {
    const source = window.location.search;
    const query = source.substring(1).split('=');
    if (query[0] !== 'id') return false;
    actions.getProject(query[1]);
  }
};

export { RouterView };

export default router;
