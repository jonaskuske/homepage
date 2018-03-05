/** The user agent reported by the current browser. */
const ua = window.navigator.userAgent;

/**
 * Is set to true if agent supports native color picker element.
 * @type {boolean}
 */
const hasColorInput = (() => { const t = document.createElement('input'); t.setAttribute('type', 'color'); t.value = '!'; return t.type === 'color' && t.value !== '!'; })();

/**
 * Is set to true if agent supports CSS Custom Properties.
 * @type {boolean}
 */
const cssVarSupported = (() => window.CSS && window.CSS.supports && window.CSS.supports('color', 'var(--theme-color)'))();

/**
 * Is set to true if agent allows CSS transforms on SVGs. (not IE or Edge)
 * @type {boolean}
 */
const isntIEorEdge = (() => ua.indexOf('MSIE ') <= 0 && ua.indexOf('Trident/') <= 0 && ua.indexOf('Edge/') <= 0)();

const isntMobileSafari = (() => ua.indexOf('iPhone') <= 0)();

/**
* Is set to true if agent is fully compatible with SVG Animations. (not IE, Edge or iOS)
* @type {boolean}
*/
const svgAnimationSupported = isntIEorEdge && isntMobileSafari;

// polyfill
if (!String.prototype.includes) {
  String.prototype.includes = function (search) {
    return this.indexOf(search) !== -1;
  };
}

export {
  hasColorInput as HTMLColorInput,
  cssVarSupported as cssVariables,
  svgAnimationSupported as svgAnimation,
  isntIEorEdge as svgTransform
};