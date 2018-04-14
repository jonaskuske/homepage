import routes from './routes';
import ErrorPage from '@@/404';
import LoadingScreen from '@@/LoadingScreen';
import actions from '@/main';
import { error, log, wait } from '@/lib/helpers';

let RouterView = LoadingScreen;

const router = {
  routes,
  fallback: {
    component: ErrorPage,
    name: 'Error'
  },
  async push(target, { pushState = true, restoreScrollPos = false } = {}) {
    if (!target) return;

    const scroll = document.documentElement.scrollTop || document.body.scrollTop;
    actions.saveScrollPosition({ pos: scroll });
    if (restoreScrollPos) actions.setRestoreScroll(true);

    let { component, name } = router.match(target.split('?')[0]);
    let title;

    if (name === 'Projekt') {
      try {
        const { project = error('No project-ID found in querystring.') } = router.getQueryParams(target);
        ([{ title }] = await Promise.all([actions.requestProject(project), wait(700)]));
      } catch (err) {
        log(err);
        ({ component, name } = router.fallback);
      }
    }

    title = title ? title : name ? name : '';
    document.querySelector('title').textContent = `${title} | Jonas Kuske`;

    if (pushState) history.pushState({ page: target }, title, target);

    RouterView = component;
    actions.setPage(target);
  },
  init() {
    window.addEventListener('popstate', ({ state }) => state !== null && state.page ? router.push(state.page, { pushState: false, restoreScrollPos: true }) : history.back());
    router.push(window.location.pathname + window.location.search);
  },
  match(route) {
    return router.routes.reduce((a, b) => b.path === route ? b : a, router.fallback);
  },
  getQueryParams(target) {
    const queryString = target.split('?')[1];
    if (!queryString) error('No querystring found.');
    const paramStrings = queryString.split('&');
    const paramPairs = paramStrings.map(str => str.split('='));
    const queryParams = {};
    paramPairs.forEach(([key, val]) => queryParams[key] = val);
    return queryParams;
  }
};

export { RouterView };

export default router;
