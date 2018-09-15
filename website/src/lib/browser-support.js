import { domainExtension } from './helpers'

if (typeof NodeList.prototype.forEach !== 'function') {
  NodeList.prototype.forEach = Array.prototype.forEach
}

/** The user agent reported by the current browser. */
const ua = window.navigator.userAgent

export const isEdge = ua.indexOf('Edge/') > -1
export const isIPhone = ua.indexOf('iPhone') > -1
export const isFirefox = ua.toLowerCase().indexOf('firefox') > -1
export const isIE = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1
export const isWebkit = 'WebkitAppearance' in document.documentElement.style
export const isFirebug =
  window.console &&
  (window.console.firebug || (window.console.exception && window.console.table)) &&
  true
var isFirefoxWithLogStyleSupport =
  navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31

/* If IE: Display a banner prompting user to switch to a modern browser: */
if (isIE) {
  const ieNotice = document.createElement('p')
  const noticeText =
    domainExtension === 'com'
      ? 'You are using a dated browser. Consider upgrading to a modern browser like Edge, Chrome or Firefox for better security and an enhanced experience! (Click to hide)'
      : 'Internet Explorer ist veraltet. Nutze für mehr Sicherheit und ein besseres Surferlebnis einen modernen Browser wie Edge, Chrome oder Firefox! (Klicken zum Schließen)'
  ieNotice.textContent = noticeText
  ieNotice.setAttribute(
    'style',
    'position:fixed;width:100%;top:0;z-index:99;margin:0;padding:5px;cursor:pointer;text-align:center;background:rgba(0,0,0,0.6);font-size:0.8rem;',
  )
  ieNotice.addEventListener('click', () => document.body.removeChild(ieNotice))
  document.body.appendChild(ieNotice)
}

/**
 * Is set to true if agent supports native color picker element.
 * @type {boolean}
 */
const hasColorInput = (() => {
  const t = document.createElement('input')
  t.setAttribute('type', 'color')
  t.value = '!'
  return t.type === 'color' && t.value !== '!'
})()

/**
 * Is set to true if agent supports CSS Custom Properties.
 * @type {boolean}
 */
const cssVarSupported = (() =>
  window.CSS && window.CSS.supports && window.CSS.supports('color', 'var(--theme-color)'))()

/**
 * Is set to true if agent allows CSS transforms on SVGs. (not IE or Edge)
 * @type {boolean}
 */
const svgTransformsSupported = !isEdge && !isIE

/**
 * Is set to true if agent is fully compatible with SVG Animations. (not IE, Edge or iOS)
 * @type {boolean}
 */
const svgAnimationSupported = !isIE && !isEdge && !isIPhone

/**
 * Is set to true if console messages can be styled with CSS rules.
 * @type {boolean}
 */
const consoleStylingSupported =
  (isWebkit && !isEdge) || isFirebug || isFirefoxWithLogStyleSupport || false

const objectFitSupported =
  window.CSS && window.CSS.supports && window.CSS.supports('(object-fit: contain)')

// polyfill
if (!String.prototype.includes) {
  String.prototype.includes = function(search) {
    return this.indexOf(search) !== -1
  }
}

export {
  hasColorInput as HTMLColorInput,
  cssVarSupported as cssVariables,
  svgAnimationSupported as svgAnimation,
  svgTransformsSupported as svgTransform,
  consoleStylingSupported as consoleStyling,
  objectFitSupported,
}
