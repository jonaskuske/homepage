import { wait } from '@/lib/helpers'
import { RouterView } from '@/router'
import { ColorSelection, SidePanel, NavHeader, ImageOverlay } from '@/components'
import Miniswipe from 'miniswipe'

const animate = el => {
  el.classList.add('animate-in')
  return wait(30).then(() => el.classList.remove('animate-in'))
}

let swipeHandler
const addHandler = (el, callback) => (swipeHandler = new Miniswipe(el).right(callback).start())
const removeHandler = () => {
  if (swipeHandler && swipeHandler.active) swipeHandler.stop()
  swipeHandler = null
}

/* If restore = true and a previous scroll position for the page is saved, restore it.
   Else scroll to top. */
const handleScrollPosition = (page, positions, actions) => {
  if (positions.restore && positions[page]) {
    document.documentElement.scrollTop = positions[page]
    actions.setRestoreScroll(false)
  } else document.documentElement.scrollIntoView(true)
}

const App = ({ page, scrollPositions, ...state }, actions) => {
  const { ui, i18n } = state
  const openMenu = () => actions.ui.setMenu(true)
  const closeMenuOnMobile = () => {
    if (ui.useMobileLayout && ui.menuIsOpen) actions.ui.setMenu(false)
  }

  return (
    <div onclick={closeMenuOnMobile}>
      <ImageOverlay showFullsizeImage={ui.showFullsizeImage} />

      <NavHeader menu={ui.menuIsOpen} mobile={ui.useMobileLayout} i18n={i18n} />
      <SidePanel class={ui.menuIsOpen ? '' : 'slideout'} i18n={i18n} />
      <div id="m-touchtarget" oncreate={el => addHandler(el, openMenu)} ondestroy={removeHandler} />

      <ColorSelection
        panel={ui.menuIsOpen}
        color={state.theme.themeColor}
        open={ui.colorSelectionIsOpen}
        mobile={ui.useMobileLayout}
        i18n={i18n}
      />

      <RouterView
        class={`content-container ${ui.menuIsOpen ? 'menu-aside' : ''}`}
        state={state}
        oncreate={el => (animate(el), handleScrollPosition(page, scrollPositions, actions))}
      />
    </div>
  )
}

export default App
