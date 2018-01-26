import projekte from '@/assets/projekte.json';
import effects from '@/main';
import router from '@/router';

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
  getState: () => state => state,
  forceUpdate: () => state => ({ updateHack: !state.updateHack }),
  toggleBackground: () => state => {
    document.querySelector('body').classList.toggle('app-dark');
    return { lightBackground: !state.lightBackground };
  },
  toggleMenu: () => state => ({ sideMenu: !state.sideMenu }),
  setMenu: value => state => ({ sideMenu: value }),
  setProject: ({ title, image, text }) => state => {
    return { title, image, text };
  },
  deleteProject: () => ({ title: {}, image: {}, text: {} }),
  getProject: id => state => {
    return fetch(projekte)
      .then(response => response.json())
      .then(data => {
        if (!data.hasOwnProperty(id)) return (router.push(id), false);
        effects.setProject(data[id]);
      });
  },
  allProjects: () => {
    return fetch(projekte).then(r=>r.json()).then(d=>effects.set(d));
  },
  set: value => state => ({projekte: value})
};