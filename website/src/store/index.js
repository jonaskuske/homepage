import { wait, error, log, random } from '@/lib/helpers'
import { colorState, colorActions } from './colors'
import { projectState, projectActions } from './projects'
import { languageState, languageActions } from './language'
import { eastereggState, eastereggActions } from './easteregg'
import { objectFitSupported } from '@/lib/browser-support'

export const state = {
  ...colorState,
  ...projectState,
  ...languageState,
  ...eastereggState,
  mobile: false,
  panel: window.matchMedia('(min-width: 1550px)').matches,
  overlay: false,
  iconLegend: false,
  page: '/',
  scrollTop: 0,
  scrollPositions: {
    restore: false,
  },
  overlayImage: '',
  sessionID: '',
  colorSelection: false,
}

export const actions = {
  ...colorActions,
  ...projectActions,
  ...languageActions,
  ...eastereggActions,
  toggleMenu: () => state => {
    state.mobile && !state.panel
      ? document.body.classList.add('no-overflow')
      : document.body.classList.remove('no-overflow')
    return { panel: !state.panel }
  },
  setMenu: value => state => {
    state.mobile && value
      ? document.body.classList.add('no-overflow')
      : document.body.classList.remove('no-overflow')
    return { panel: value }
  },
  toggleIconLegend: () => state => ({ iconLegend: !state.iconLegend }),
  setLayout: value => ({ mobile: value }),
  setPage: page => ({ page }),
  setScrollTop: scrollTop => ({ scrollTop }),
  setOverlayImage: overlayImage => ({ overlayImage }),
  showOverlay: () => {
    document.body.classList.add('no-overflow')
    return { overlay: true }
  },
  hideOverlay: () => {
    document.body.classList.remove('no-overflow')
    return { overlay: false }
  },
  /* Save the scroll position of the current page, called before navigating away from a page */
  saveScrollPosition: ({ pos }) => ({ scrollPositions, page }) => ({
    scrollPositions: { ...scrollPositions, [page]: pos },
  }),
  /* Set the restore prop for the scroll positions to the given value (true or false) */
  setRestoreScroll: val => ({ scrollPositions }) => ({
    scrollPositions: { ...scrollPositions, restore: val },
  }),
  setSessionID: sessionID => ({ sessionID }),
  toggleColorSelection: () => state => ({ colorSelection: !state.colorSelection }),
}
