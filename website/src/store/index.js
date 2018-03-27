import loadImage from '@/lib/image-loader';
import { wait, error, log, random } from '@/lib/helpers';

const textElements = () => document.querySelectorAll('p,h1,h2,h3,button,.side-link');

export const state = {
  mobile: false,
  panel: false,
  overlay: false,
  language: 'de',
  locales: '',
  page: '/',
  scrollTop: 0,
  disableGlass: navigator.platform.indexOf('Mac') != -1 && !!window.chrome,
  themeColor: '#0b8dc9',
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
  setColor: color => state => {
    document.body.style.setProperty('--theme-color', color);
    document.querySelector('meta[name=theme-color]').content = color;
    return { themeColor: color };
  },
  setRandomColor: () => (state, actions) => {
    const colorOptions = state.colors.filter(color => color !== state.themeColor);
    const randomColor = colorOptions[random(colorOptions.length)];
    actions.setColor(randomColor);
  },
  toggleLanguage: () => async (state, actions) => {
    actions.getLanguage({ language: state.language === 'de' ? 'en' : 'de', animate: true });
  },
  getLanguage: ({ language, animate }) => async (state, actions) => {
    try {
      const { default: locales } = language === 'de'
        ? await import(/* webpackChunkName: "de-language" */ '@/lib/locales/de-DE.js')
        : await import(/* webpackChunkName: "en-language" */ '@/lib/locales/en-US.js');
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
  fetchProjects: () => async (_, actions) => {
    const { default: projects } = await import(/* webpackChunkName: "de-project" */ '@/assets/projekte.js');
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
  }
};
