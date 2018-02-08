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
    textElements().forEach(el => el.classList.add('textsquish'));
    await wait(210);
    actions.getLanguage(state.language === 'de' ? 'en' : 'de');
  },
  getLanguage: lang => async (state, actions) => new Promise(async resolve => {
    actions.setLanguage({
      lang,
      pack: lang === 'de'
        ? await import(/* webpackChunkName: "de-language" */ '@/lib/locales/de-DE.js')
        : await import(/* webpackChunkName: "en-language" */ '@/lib/locales/en-US.js')
    });
    resolve();
  }),
  setLanguage: ({ lang, pack }) => {
    textElements().forEach(el => el.classList.remove('textsquish'));
    return {
      locales: pack.default,
      language: lang
    };
  },
  addColor: color => ({ colors }) => !colors.includes(color) && ({ colors: [...colors, color] }),
  fetchProjects: () => (_, actions) => fetch(projects, { mode: 'cors' })
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
