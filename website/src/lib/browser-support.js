// feature detect
const hasColorInput = (() => { const t = document.createElement('input'); t.setAttribute('type', 'color'); t.value = '!'; return t.type === 'color' && t.value !== '!'; })();
const cssVarSupported = (() => window.CSS && window.CSS.supports && window.CSS.supports('color', 'var(--theme-color)'))();
const svgAnimationSupported = (() => { const ua = window.navigator.userAgent; return ua.indexOf('MSIE ') <= 0 && ua.indexOf('Trident/') <= 0 && ua.indexOf('Edge/') <= 0 && ua.indexOf('iPhone') <= 0; })();

// polyfill
if (!String.prototype.includes) {
  String.prototype.includes = function (search) {
    return this.indexOf(search) !== -1;
  };
}

export {
  hasColorInput as HTMLColorInput,
  cssVarSupported as cssVariables,
  svgAnimationSupported as svgAnimation
};