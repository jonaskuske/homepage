import actions from '@/main';
import Imprint from '@@/Imprint';
import Projects from '@@/Projects';
import Splash from '@@/Splash';
import Details from '@@/Details';
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
    path: '/impressum',
    component: Imprint
  },
];

const router = {
  routes,
  push(target) {
    router.setTitle(target);
    actions.setMenu(false);
    history.pushState(actions.getState(), target, target);
    RouterView = router.match(target);
    actions.forceUpdate();
  },
  init() {
    RouterView = router.match(window.location.pathname);
    router.setTitle(window.location.pathname);
    const notEmpty = obj => {
      for (let key in obj) if (obj.hasOwnProperty(key)) return true;
    };
    return { state: notEmpty(history.state) ? history.state : false };
  },
  match(route) {
    return router.routes.reduce((a, b) => b.path === route ? b.component : a, ErrorPage);
  },
  setTitle(string) {
    const title = (string === '/' ? 'Portfolio' : string).replace('/', '');
    document.querySelector('title').textContent = `${title.charAt(0).toUpperCase() + title.slice(1)} | Jonas Kuske`;
  }
};

export { RouterView };

export default router;