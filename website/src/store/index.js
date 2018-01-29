import projekte from '@/assets/projekte.json';
import router from '@/router';
import effects from '@/main';

export const state = {
  updateHack: false,
  sideMenu: false,
  title: '',
  image: '',
  text: '',
  projekte: {},
  scrollTop: 0,
  themeColor: '#0b8dc9',
  isMobile: false,
  page: '/'
};

export const actions = {
  forceUpdate: () => state => ({ updateHack: !state.updateHack }),
  setColor: value => state => {
    document.body.style.setProperty('--theme-color', value);
    document.querySelector('meta[name=theme-color]').content = value;
    effects.setThemeColor(value);
  },
  toggleMenu: () => state => ({ sideMenu: !state.sideMenu }),
  setMenu: value => state => ({ sideMenu: value }),
  setProject: ({ title, image, text }) => state => ({ title, image, text }),
  getProject: id => state => fetch(projekte)
    .then(r => r.json())
    .then(d => {
      if (!d.hasOwnProperty(id)) return (router.push(id), false);
      effects.setProject(d[id]);
    }),
  allProjects: () => fetch(projekte).then(r => r.json()).then(d => effects.set(d)),
  setScrollTop: value => state => ({ scrollTop: value }),
  set: value => state => ({ projekte: value }),
  setThemeColor: val => state => ({ themeColor: val }),
  setMobileMode: val => state => ({ isMobile: val }),
  setPage: val => state => ({ page: val })
};