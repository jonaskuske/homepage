export const state = {
  updateHack: false,
  sideMenu: true,
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
  setMenu: value => state => ({ sideMenu: value })
};