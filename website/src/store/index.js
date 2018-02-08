import projects from '@/assets/projekte.json';
import loadImage from '@/lib/image-loader';

export const state = {
  mobile: false,
  panel: false,
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
