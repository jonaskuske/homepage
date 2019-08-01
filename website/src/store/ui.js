import { isBrowser } from '@/lib/helpers'

const initialMenuState = isBrowser && window.matchMedia('(min-width: 1550px)').matches

const allowOverflow = () => {
  if (isBrowser) document.body.classList.remove('no-overflow')
}
const preventOverflow = () => {
  if (isBrowser) return document.body.classList.add('no-overflow')
}

const state = {
  useMobileLayout: false,
  menuIsOpen: initialMenuState,
  colorSelectionIsOpen: false,
  showFullsizeImage: false,
  iconLegendIsOpen: false,
}

const actions = {
  setMobileLayout: value => ({ useMobileLayout: value }),
  setMenu: openState => state => {
    if (state.useMobileLayout) {
      if (openState) preventOverflow()
      else allowOverflow()
    }
    return { menuIsOpen: openState }
  },
  toggleMenu: () => (state, actions) => actions.setMenu(!state.menuIsOpen),
  toggleColorSelection: () => state => ({ colorSelectionIsOpen: !state.colorSelectionIsOpen }),
  setFullsizeImage: srcOrFalse => {
    if (srcOrFalse) preventOverflow()
    else allowOverflow()
    return { showFullsizeImage: srcOrFalse }
  },
  toggleIconLegend: () => state => ({ iconLegendIsOpen: !state.iconLegendIsOpen }),
}

export { state, actions }
