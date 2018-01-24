export const state = {
  sideMenu: false,
  lightBackground: true,
  page: '/'
};

export const actions = {
  toggleMenu: () => state => ({ sideMenu: !state.sideMenu }),
  setMenu: value => state => ({ sideMenu: value }),
  setPage: value => state => ({ page: value }),
  toggleBackground: () => state => ({ lightBackground: !state.lightBackground })
};