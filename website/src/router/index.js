import vm from '@/main'
import routes from './routes'
import { ErrorPage, LoadingPage } from '@/pages'
import { throwError, log, wait, getQueryParams } from '@/lib/helpers'

/**
 * Test whether a given route matches a set of given paths
 * @param {string | { de?: string, en?: string }} paths
 * @param {string} route
 */
const matchesPath = (paths, route) => {
  const pathArray = typeof paths === 'string' ? [paths] : Object.values(paths)

  for (const path of pathArray) {
    if (new RegExp(path + '/?$').test(route)) return true // regexp: allow trailing slash
  }
  return false
}

/* Reference to current component - set to LoadingPage inititally, mutated by router.push() method */
let RouterView = LoadingPage

const router = {
  routes,
  fallback: { path: '', component: ErrorPage, name: 'Error' },
  /**
   * @typedef {Object} pushOpts
   * @prop {boolean} [pushState] Update the browser's history stack
   * @prop {boolean} [restoreScrollPos] Restore the scroll position if it is stored
   *
   * @param {string} targetURL
   * @param {pushOpts} options
   */
  async push(targetURL, { pushState = true, restoreScrollPos = false } = {}) {
    if (!targetURL) return
    const { actions } = vm

    /* Save new scroll position */
    const scroll = document.documentElement.scrollTop || document.body.scrollTop
    actions.saveScrollPosition({ pos: scroll })
    /* Instruct site to restore previously set scroll position for page -> handled in App.jsx */
    if (restoreScrollPos) actions.setRestoreScroll(true)

    const { language } = actions.getState().i18n

    let { component, name, path } = router.match(targetURL.split('?')[0])
    name = name[language] || name
    let title

    /* If visiting detail page: Request project details specified in query string, if unavailable go to error page */
    if (name === 'Project') {
      try {
        /* Get projectID from query string, error if none specified there */
        const { project: projectId } = getQueryParams(targetURL, { strict: true })
        if (!projectId) throwError('No project-ID found in querystring.')

        /* Load project details + forced loading time for design purposes */
        const [details] = await Promise.all([actions.getProjectById({ id: projectId }), wait(700)])
        title = details.title
      } catch (err) {
        log(err)
        ;({ component, name } = router.fallback)
      }
    }

    /* Update HTML title with project title or component name */
    title = title || name || ''
    document.querySelector('title').textContent = `${title} | Jonas Kuske`

    /* Create new entry in history stack and save page there */
    if (pushState) history.pushState({ page: targetURL }, title, path[language] || targetURL)

    /* Set page reference and update store to trigger re-render */
    RouterView = component
    actions.setPage(targetURL)
  },
  /* Matches window.location to keep view in sync with visited URL on pageload and sets up handler for popstate event */
  init() {
    window.addEventListener('popstate', ({ state }) => {
      if (state !== null && state.page) {
        router.push(state.page, {
          pushState: false, // history stack updated by browser itself, don't interfere
          restoreScrollPos: true, // restore scroll position if possible -> handled in App.jsx
        })
      } else history.back() // Beginning of artificial history stack reached: go back, leave site
    })
    router.push(window.location.pathname + window.location.search)
  },
  /* Returns component object from router.routes[] if path matches or router.fallback if there's no match */
  match(route) {
    return router.routes.reduce(
      (base, current) => (matchesPath(current.path, route) ? current : base),
      router.fallback,
    )
  },
}

export { RouterView }

export default router
