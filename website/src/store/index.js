import projekte from '@/assets/projekte.json';
import router from '@/router';
import effects from '@/main';

export const state = {
  updateHack: false,
  sideMenu: true,
  title: '',
  image: '',
  text: '',
  projekte: {},
  lightBackground: true
};

export const actions = {
  forceUpdate: () => state => ({ updateHack: !state.updateHack }),
  toggleBackground: () => state => {
    document.querySelector('body').classList.toggle('app-dark');
    return { lightBackground: !state.lightBackground };
  },
  toggleMenu: () => state => ({ sideMenu: !state.sideMenu }),
  setMenu: value => state => ({ sideMenu: value }),
  setProject: ({ title, image, text }) => state => ({ title, image, text }),
  getProject: id => state => {
    return fetch(projekte)
      .then(r => r.json())
      .then(d => {
        if (!d.hasOwnProperty(id)) return (router.push(id), false);
        effects.setProject(d[id]);
      });
  },
  allProjects: () => fetch(projekte).then(r => r.json()).then(d => effects.set(d)),
  set: value => state => ({ projekte: value })
};