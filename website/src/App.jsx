import actions from '@/main'
import { wait } from '@/lib/helpers'
import { RouterView } from '@/router'
import { ColorSelection, SidePanel, NavHeader, ImageOverlay } from '@/components'
import Miniswipe from 'miniswipe'

const animate = el => {
  el.classList.add('animate-in')
  return wait(30).then(() => el.classList.remove('animate-in'))
}
const addSwipeHandler = el => new Miniswipe(el).right(() => actions.setMenu(true)).start()
/* If restore = true and a previous scroll position for the page is saved, restore it. Else scroll to top. */
const handleScrollPosition = (page, positions) => {
  if (positions.restore && positions[page]) {
    document.documentElement.scrollTop = positions[page]
    actions.setRestoreScroll(false)
  } else document.documentElement.scrollIntoView(true)
}

const App = ({ page, scrollPositions, colorSelection, ...state }, actions) => {
  const translations = state.locales.App || {}
  const FullscreenImagePopup = state.overlay && <ImageOverlay src={state.overlayImage} />

  return (
    <div onclick={() => state.mobile && state.panel && actions.setMenu(false)}>
      {FullscreenImagePopup}

      <NavHeader
        scroll={state.scrollTop}
        menu={state.panel}
        mobile={state.mobile}
        links={translations.links}
      />

      <SidePanel
        class={state.panel ? '' : 'slideout'}
        mobile={state.mobile}
        lang={state.language}
        panel={translations.panel}
      />

      <div id="menu-touchtarget" oncreate={addSwipeHandler} />

      <ColorSelection
        panel={state.panel}
        color={state.themeColor}
        open={colorSelection}
        mobile={state.mobile}
        text={translations.ColorSelection}
      />

      <RouterView
        class={`content-container ${state.panel ? 'menu-aside' : ''}`}
        data={state}
        oncreate={el => (animate(el), handleScrollPosition(page, scrollPositions))}
      />
    </div>
  )
}

export default App
