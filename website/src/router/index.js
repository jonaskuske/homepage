import actions from '@/main';
import Imprint from '@@/Imprint';
import Projects from '@@/Projects';
import Splash from '@@/Splash';
import Details from '@@/Details';

let RouterView = Splash;

const router = {
  routes: [
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
  ],
  push(target, state = {}) {
    history.pushState(state, target, target);
    actions.setPage(target);
  },
  init() {
    RouterView = router.match(window.location.pathname);
  },
  match(route) {
    return router.routes.reduce((a, b) => b.path === route ? b.component : a, Splash);
  }
};

export default router;
export { RouterView };

window.lala = router;