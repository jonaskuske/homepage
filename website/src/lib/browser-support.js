// feature detect
const hasColorInput = (() => { const t = document.createElement('input'); t.setAttribute('type', 'color'); t.value = '!'; return t.type === 'color' && t.value !== '!'; })();
const cssVarSupported = (() => window.CSS && window.CSS.supports && window.CSS.supports('--tets-var', 0))();

// polyfill
if (!String.prototype.includes) {
  String.prototype.includes = function (search) {
    return this.indexOf(search) !== -1;
  };
}

export {
  hasColorInput as HTMLColorInput,
  cssVarSupported as cssVariables
};