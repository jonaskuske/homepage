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
    name: '404'
  },
  async push(target, { pushState = true } = {}) {
    if (!target) return;

    let { component, name } = router.match(target.split('?')[0]);
    let title;

    if (name === 'Projekt') {
      try {
        const { id = error('Keine ID im Querystring') } = router.getQueryParams(target);
        ([{ title }] = await Promise.all([actions.requestProject(id), wait(700)]));
      } catch (err) {
        log(err);
        console.error(err);
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
    window.addEventListener('popstate', ({ state }) => state !== null && state.page ? router.push(state.page, { pushState: false }) : history.back());
    router.push(window.location.pathname + window.location.search);
  },
  match(route) {
    return router.routes.reduce((a, b) => b.path === route ? b : a, router.fallback);
  },
  getQueryParams(target) {
    const queryString = target.split('?')[1];
    if (!queryString) error('Kein Querystring angegeben!');
    const paramStrings = queryString.split('&');
    const paramPairs = paramStrings.map(str => str.split('='));
    const queryParams = {};
    paramPairs.forEach(([key, val]) => queryParams[key] = val);
    return queryParams;
  }
};

export { RouterView };

export default router;
