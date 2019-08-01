import { random, throttle, rgbFromhex, isBrowser } from '@/lib/helpers'
import { cssVariables as supportsCssVariables } from '@/lib/browser-support'
import cssVarPolyfill from 'css-vars-ponyfill'

const isValidColor = color => color[0] === '#' && color.length === 7

const partyColors = ['#000000', '#006200', '#ff3edd', '#f3ff0d', '#dd0000', '#ffe42b']
let partyColorsAdded = false
let beforeEastereggColor = ''

const additonalColors = ['#77f113', '#ffff00', '#f58b00', '#800080', '#CB1633', '#b815ef']
let additionalColorsAdded = false

/* Run CSS var polyfill once on startup to update all CSS vars in IE */
if (!supportsCssVariables) cssVarPolyfill()

let metaTag
const setColorOnMetaTag = color => {
  if (isBrowser && (metaTag || (metaTag = document.querySelector('meta[name=theme-color]')))) {
    metaTag.content = color
  }
}

const throttledCssVarPolyfill = throttle(cssVarPolyfill, 200)

const state = {
  themeColor: '#00ff00',
  safeThemeColor: '#ffffff',
  colors: ['#3EA4C0', '#1529b5', '#0B66F3'],
  updateColorInMetaTag: true,
  eastereggActive: false,
  eastereggTimeout: null,
}

const actions = {
  setColor: themeColor => state => {
    if (!isValidColor(themeColor)) return

    const { r, g, b, brightness } = rgbFromhex(themeColor)
    let safeThemeColor = themeColor, bgColor = `rgba(${r},${g},${b},0.6)` // prettier-ignore

    /* Set safeThemeColor to white if themeColor is too dark, ensures good visibilty of elements */
    if (brightness < 60) safeThemeColor = '#ffffff'

    document.documentElement.style.setProperty('--bg-color', bgColor)
    document.documentElement.style.setProperty('--menu-color', themeColor)
    document.documentElement.style.setProperty('--theme-color', safeThemeColor)
    if (state.updateColorInMetaTag) setColorOnMetaTag(themeColor)

    // If necessary: Use css-vars-ponyfill to update vars in IE, throttled for stable performance
    if (!supportsCssVariables) {
      throttledCssVarPolyfill({
        variables: { 'bg-color': bgColor, 'theme-color': safeThemeColor, 'menu-color': themeColor },
      })
    }
    return { safeThemeColor, themeColor }
  },
  /* Set a random color from the colors array that isn't the current color */
  setRandomColor: () => (state, actions) => {
    const colorOptions = state.colors.filter(color => color !== state.themeColor)
    const randomColor = colorOptions[random(colorOptions.length)]
    actions.setColor(randomColor)
    /* After requesting a random color for the first time:
      Add additional colors to array. User is asking for it, so ready for experimental stuff :P */
    if (!additionalColorsAdded) additionalColorsAdded = !additonalColors.forEach(actions.addColor)
  },
  addColor: color => ({ colors }) => {
    if (isValidColor(color) && !colors.includes(color)) return { colors: [...colors, color] }
  },
  setMetaTagColorUpdateState: shouldUpdate => ({ updateColorInMetaTag: shouldUpdate }),
  toggleEasteregg: () => (state, actions) => {
    if (!partyColorsAdded) partyColorsAdded = !partyColors.forEach(actions.addColor)

    if (state.eastereggActive) {
      clearInterval(state.eastereggTimeout)
      actions.setMetaTagColorUpdateState(true)
      actions.setColor(beforeEastereggColor)
      return { eastereggActive: false }
    } else {
      beforeEastereggColor = state.themeColor
      actions.setMetaTagColorUpdateState(false)
      return { eastereggActive: true, eastereggTimeout: setInterval(actions.setRandomColor, 400) }
    }
  },
}

export { state, actions }
