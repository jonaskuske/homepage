import projekte from '@/assets/projekte.json';

export const state = {
  updateHack: false,
  sideMenu: true,
  projekt: undefined,
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
  setProject: value => state => {
    let projekte;
    fetch(projekte).then(r => r.json().then(d => (projekte = d)));
    return { projekt: projekte[value] };
  }
};