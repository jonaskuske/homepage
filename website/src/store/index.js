import loadImage from '@/lib/image-loader';
import { wait, error, log, random } from '@/lib/helpers';

const textElements = () => document.querySelectorAll('p,h1,h2,h3,button,.side-link');

export const state = {
  mobile: false,
  panel: window.matchMedia('(min-width: 1550px)').matches,
  overlay: false,
  language: 'de',
  locales: '',
  page: '/',
  scrollTop: 0,
  disableGlass: navigator.platform.indexOf('Mac') != -1 && !!window.chrome,
  themeColor: '#0b8dc9',
  scrollPositions: {
    restore: false
  },
  colors: [
    '#77f113',
    '#b815ef',
    '#f58b00',
    '#00ffff'
  ],
  overlayImage: '',
  projects: [],
  project: {
    id: '',
    title: '',
    text: '',
    image: ''
  }
};

export const actions = {
  toggleMenu: () => state => ({ panel: !state.panel }),
  setMenu: value => ({ panel: value }),
  setLayout: value => ({ mobile: value }),
  setPage: page => ({ page }),
  setScrollTop: scrollTop => ({ scrollTop }),
  setOverlayImage: overlayImage => ({ overlayImage }),
  showOverlay: () => {
    document.body.classList.add('no-overflow');
    return { overlay: true };
  },
  hideOverlay: () => {
    document.body.classList.remove('no-overflow');
    return { overlay: false };
  },
  setColor: themeColor => state => {

    /* see https://stackoverflow.com/questions/12043187/how-to-check-if-hex-color-is-too-black */
    const dec = parseInt(themeColor.substring(1), 16);   // convert #rrggbb to decimal
    const r = (dec >> 16) & 0xff;  // extract red
    const g = (dec >> 8) & 0xff;  // extract green
    const b = (dec >> 0) & 0xff;  // extract blue
    const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    const bgColor = `rgba(${r},${g},${b}, 0.6)`;
    if (brightness < 60) themeColor = '#ffffff';

    document.body.style.setProperty('--bg-color', bgColor);
    document.body.style.setProperty('--theme-color', themeColor);
    document.querySelector('meta[name=theme-color]').content = themeColor;

    return { themeColor };
  },
  setRandomColor: () => (state, actions) => {
    const colorOptions = state.colors.filter(color => color !== state.themeColor);
    const randomColor = colorOptions[random(colorOptions.length)];
    actions.setColor(randomColor);
  },
  toggleLanguage: () => async (state, actions) => {
    await actions.getLanguage({ language: state.language === 'de' ? 'en' : 'de', animate: true });
    actions.fetchProjects();
  },
  getLanguage: ({ language, animate }) => async (state, actions) => {
    try {
      const { default: locales } = language === 'de'
        ? await import(/* webpackChunkName: "de-language" */ '@/locales/de-DE.js')
        : await import(/* webpackChunkName: "en-language" */ '@/locales/en-US.js');
      if (!locales.App) error('Error while loading language, please try again');

      if (animate) {
        textElements().forEach(el => el.classList.add('textsquish'));
        await wait(210);
      }
      actions.setLanguage({ language, locales });
      if (state.project.id) actions.requestProject(state.project.id);
    } catch (e) {
      log(e);
    }
  },
  setLanguage: ({ language, locales }) => {
    textElements().forEach(el => el.classList.remove('textsquish'));
    return { locales, language };
  },
  addColor: color => ({ colors }) => !colors.includes(color) && ({ colors: [...colors, color] }),
  fetchProjects: () => async ({ language }, actions) => {
    const { default: projects } = await import(/* webpackChunkName: "projects/[request]" */ `@/assets/${language}-projectlist.js`);
    actions.setProjects(projects);
  },
  setProjects: projects => ({ projects }),
  setProject: project => ({ project }),
  requestProject: id => async ({ projects, language }, actions) => {
    const { default: project } = await import(/* webpackChunkName: "projects/[request]" */ `@/assets/projects/${id}/${language}-assets`);
    const imageArray = [...project.blocks.map(block => block.image), project.showcase.image];
    await loadImage(imageArray);
    return new Promise((resolve, reject) => {
      actions.setProject({ id, ...project });
      resolve(project);
    });
  },
  saveScrollPosition: ({ pos }) => ({ scrollPositions, page }) => ({ scrollPositions: { ...scrollPositions, [page]: pos } }),
  setRestoreScroll: val => ({ scrollPositions }) => ({ scrollPositions: { ...scrollPositions, restore: val } }),
};
