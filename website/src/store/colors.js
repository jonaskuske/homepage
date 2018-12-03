import { random, throttle } from '@/lib/helpers'
import { cssVariables as supportsCssVariables } from '@/lib/browser-support'
import cssVarPolyfill from 'css-vars-ponyfill'

const additonalColors = ['#77f113', '#ffff00', '#f58b00', '#800080', '#CB1633', '#b815ef']
let additionalColorsAdded = false
/* Run CSS var polyfill once on startup to update all CSS vars in IE */
if (!supportsCssVariables) cssVarPolyfill()

const colorMetaTag = document.querySelector('meta[name=theme-color]')
const throttledCssVarPolyfill = throttle(cssVarPolyfill, 1200)
export const colorState = {
  themeColor: '#1529b5',
  safeThemeColor: '#ffffff',
  colors: ['#1529b5', '#00ffff', '#3EA4C0', '#0B66F3'],
  updateMetaTagColor: true,
}

export const colorActions = {
  /* Update CSS variables, HTML meta tag and store with the new theme color */
  setColor: themeColor => (state, actions) => {
    /* Passed themeColor is not valid? Just set a random one :) */
    if (!(themeColor.includes('#') && themeColor.length === 7)) return actions.setRandomColor()

    let safeThemeColor = themeColor

    /* see https://stackoverflow.com/questions/12043187/how-to-check-if-hex-color-is-too-black */
    const dec = parseInt(themeColor.substring(1), 16) // convert #rrggbb to decimal
    const r = (dec >> 16) & 0xff // extract red
    const g = (dec >> 8) & 0xff // extract green
    const b = (dec >> 0) & 0xff // extract blue
    const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b

    /* Create semi-transparent version so the background image is visible through the color layer */
    const bgColor = `rgba(${r},${g},${b},0.6)`

    /* Set safeThemeColor to white if themeColor is too dark, ensures good visibilty of elements */
    if (brightness < 60) safeThemeColor = '#ffffff'

    document.documentElement.style.setProperty('--bg-color', bgColor)
    document.documentElement.style.setProperty('--menu-color', themeColor)
    document.documentElement.style.setProperty('--theme-color', safeThemeColor)
    if (state.updateMetaTagColor) colorMetaTag.content = themeColor

    // If necessary: Use css-vars-ponyfill to update vars in IE, throttled for stable performance
    if (!supportsCssVariables) {
      throttledCssVarPolyfill({
        variables: {
          'bg-color': bgColor,
          'theme-color': safeThemeColor,
          'menu-color': themeColor,
        },
        onlyVars: true,
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
    if (!additionalColorsAdded) {
      additonalColors.forEach(actions.addColor)
      additionalColorsAdded = true
    }
  },
  /* Add color to colors array if it isn't included already */
  addColor: newColor => ({ colors }) => {
    if (!colors.includes(newColor) && newColor.includes('#') && newColor.length === 7) {
      return { colors: [...colors, newColor] }
    }
  },
  /* Toggle whether the meta tag (affecting browser chrome etc.) is updated along side themecolor */
  setMetaTagColor: val => ({ updateMetaTagColor: val }),
}
