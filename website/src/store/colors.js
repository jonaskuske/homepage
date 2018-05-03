import { random, throttle } from '@/lib/helpers';
import { cssVariables } from '@/lib/browser-support';
import cssVarPolyfill from 'css-vars-ponyfill';

!cssVariables && cssVarPolyfill();

const colorMetaTag = document.querySelector('meta[name=theme-color]');
const throttledCssVarPolyfill = throttle(cssVarPolyfill, 1200);

export const colorState = {
  themeColor: '#77f113',
  safeThemeColor: '#77f113',
  colors: [
    '#77f113',
    '#b815ef',
    '#f58b00',
    '#00ffff',
    '#3EA4C0',
    '#CB1633',
    '#871177',
    '#0B66F3',
    '#81957D'
  ],
  updateMetaTagColor: true
};

export const colorActions = {
  /* Update CSS variables, HTML meta tag and store with the new theme color */
  setColor: themeColor => (state, actions) => {
    if (!(themeColor.includes('#') && themeColor.length === 7)) return actions.setRandomColor();

    let safeThemeColor = themeColor;

    /* see https://stackoverflow.com/questions/12043187/how-to-check-if-hex-color-is-too-black */
    const dec = parseInt(themeColor.substring(1), 16);   // convert #rrggbb to decimal
    const r = (dec >> 16) & 0xff;  // extract red
    const g = (dec >> 8) & 0xff;  // extract green
    const b = (dec >> 0) & 0xff;  // extract blue
    const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    /* Create semi-transparent version so the background image is visible through the color layer */
    const bgColor = `rgba(${r},${g},${b},0.6)`;

    /* Set the safeThemeColor to white if themeColor is too dark, ensures good visibilty of elements */
    if (brightness < 60) safeThemeColor = '#ffffff';

    document.documentElement.style.setProperty('--bg-color', bgColor);
    document.documentElement.style.setProperty('--menu-color', themeColor);
    document.documentElement.style.setProperty('--theme-color', safeThemeColor);
    if (state.updateMetaTagColor) colorMetaTag.content = themeColor;

    !cssVariables && throttledCssVarPolyfill({
      variables: {
        'bg-color': bgColor,
        'theme-color': safeThemeColor,
        'menu-color': themeColor
      },
      onlyVars: true
    });

    return { safeThemeColor, themeColor };
  },
  /* Set a random color from the colors array that isn't the already set color */
  setRandomColor: () => (state, actions) => {
    const colorOptions = state.colors.filter(color => color !== state.themeColor);
    const randomColor = colorOptions[random(colorOptions.length)];
    actions.setColor(randomColor);
  },
  /* Add color to colors array if it isn't included already */
  addColor: newColor => ({ colors }) => (
    !colors.includes(newColor)
    && newColor.includes('#')
    && newColor.length === 7)
    && ({ colors: [...colors, newColor] }),
  setMetaTagColor: val => ({ updateMetaTagColor: val })
};
