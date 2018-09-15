import actions from '@/main'
import routes from './routes'
import { ErrorPage, LoadingPage } from '@/pages'
import { error, log, wait } from '@/lib/helpers'

const matchesPath = (paths, route) => {
  if (typeof paths === 'string') paths = [paths]
  else paths = Object.values(paths)

  for (const path of paths) {
    if (new RegExp(path + '/?$').test(route)) return true // regexp: allow trailing slash
  }
  return false
}

/* Reference to current component - set to LoadingPage inititally, mutated by router.push() method */
let RouterView = LoadingPage

const router = {
  routes,
  fallback: {
    path: '',
    component: ErrorPage,
    name: 'Error',
  },
  /* Navigates to a page associated with a URL */
  async push(targetURL, { pushState = true, restoreScrollPos = false } = {}) {
    if (!targetURL) return

    /* Save new scroll position */
    const scroll = document.documentElement.scrollTop || document.body.scrollTop
    actions.saveScrollPosition({ pos: scroll })
    /* Instruct site to restore previously set scroll position for page -> handled in App.jsx */
    if (restoreScrollPos) actions.setRestoreScroll(true)

    const language = actions.currentLanguage()

    let { component, name, path } = router.match(targetURL.split('?')[0])
    name = name[language] || name
    let title

    /* If visiting detail page: Request project details specified in query string, if unavailable go to error page */
    if (name === 'Project') {
      try {
        /* Get projectID from query string, error if none specified there */
        const { project: projectId } = router.getQueryParams(targetURL, { strict: true })
        if (!projectId) error('No project-ID found in querystring.')

        /* Load project details + forced loading time for design purposes */
        const [details] = await Promise.all([actions.requestProject(projectId), wait(700)])
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
    window.addEventListener(
      'popstate',
      ({ state }) =>
        state !== null && state.page
          ? router.push(state.page, {
              pushState: false, // history stack updated by browser itself, don't interfere
              restoreScrollPos: true, // restore scroll position if possible -> handled in App.jsx
            })
          : history.back(), // Beginning of artificial history stack reached: navigate back again to leave site
    )
    router.push(window.location.pathname + window.location.search)
  },
  /* Returns component object from router.routes[] if path matches or router.fallback if there's no match */
  match(route) {
    return router.routes.reduce(
      (base, current) => (matchesPath(current.path, route) ? current : base),
      router.fallback,
    )
  },
  /* Returns object with key value pairs for a parameters in a query string; strict: throws if no query string passed */
  getQueryParams(target, { strict } = {}) {
    const queryString = target.split('?')[1]
    if (!queryString) return strict ? error('No querystring found.') : {}

    const paramStrings = queryString.split('&')
    const paramPairs = paramStrings.map(str => str.split('='))
    const queryParams = {}
    paramPairs.forEach(([key, val]) => (queryParams[key] = val))
    return queryParams
  },
}

export { RouterView }

export default router

window.test = router
