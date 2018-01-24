import actions from '@/main';

const router = {
  push(target, state = {}) {
    history.pushState(state, target, target);
    actions.setPage(target);
  },
  init() {
    const path = window.location.pathname;
    if (path === '/') return;
    router.push(path.replace('/', ''));
  }
};

export default router;

export const RouterView = () => <div />;