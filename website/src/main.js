import '@/assets/css'
import { app } from 'hyperapp'
import { state, actions, init } from './store'
import router from './router'
import App from '@/App'
import { getQueryParams } from '@/lib/helpers'
import initEasteregg from '@/lib/no-easteregg'
import 'focus-visible'

let _ = {}
export default _

init().then(() => {
  _.actions = app(state, actions, App, document.body)
  const vm = _.actions

  // Keep 'mobile' prop in store in sync with media query
  const mediaQuery = window.matchMedia('(min-width: 900px)')
  const queryHandler = query => vm.ui.setMobileLayout(query.matches ? false : true)
  queryHandler(mediaQuery)
  mediaQuery.addListener(queryHandler)

  // get query parameters
  const { color } = getQueryParams(window.location.href)

  // set site color
  if (color) {
    vm.theme.setColor(color)
    vm.theme.addColor(color)
  } else vm.theme.setRandomColor()

  // fetch localized text and project assets, then init router -> move to page specified in URL
  vm.getProjectList().then(router.init)

  initEasteregg(actions)
  window._vm = vm
})
