import projects from '@/assets/projekte.json';
import loadImage from '@/lib/image-loader';
import { wait } from '@/lib/helpers';

const textElements = () => document.querySelectorAll('p,h1,h2,h3,button');

export const state = {
  mobile: false,
  panel: false,
  language: 'de',
  locales: '',
  page: '/',
  scrollTop: 0,
  themeColor: '#0b8dc9',
  colors: [
    '#77f113',
    '#b815ef',
    '#f58b00',
    '#00ffff'
  ],
  projects: {},
  project: {
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
  setColor: color => state => {
    document.body.style.setProperty('--theme-color', color);
    document.querySelector('meta[name=theme-color]').content = color;
    return { themeColor: color };
  },
  toggleLanguage: () => async (state, actions) => {
    actions.getLanguage({ language: state.language === 'de' ? 'en' : 'de', animate: true });
  },
  getLanguage: ({ language, animate }) => async (state, actions) => {
    try {
      const { default: locales } = language === 'de'
        ? await import(/* webpackChunkName: "de-language" */ '@/lib/locales/de-DE.js')
        : await import(/* webpackChunkName: "en-language" */ '@/lib/locales/en-US.js');
      if (!locales.App) throw 'Error while loading language, please try again';

      if (animate) {
        textElements().forEach(el => el.classList.add('textsquish'));
        await wait(210);
      }

      actions.setLanguage({ language, locales });
    } catch (e) {
      console.warn(e);
    }
  },
  setLanguage: ({ language, locales }) => {
    textElements().forEach(el => el.classList.remove('textsquish'));
    return { locales, language };
  },
  addColor: color => ({ colors }) => !colors.includes(color) && ({ colors: [...colors, color] }),
  fetchProjects: () => (_, actions) => fetch(projects)
    .then(response => response.json())
    .then(projects => actions.setProjects(projects)),
  setProjects: projects => ({ projects }),
  setProject: project => ({ project }),
  requestProject: id => ({ projects }, actions) => {
    return new Promise((resolve, reject) => {
      projects.hasOwnProperty(id)
        ? loadImage(projects[id].image)
          .then(() => { actions.setProject(projects[id]); resolve(projects[id]); })
        : reject(`Projekt »${id}« wurde nicht gefunden.`);
    });
  }
};
