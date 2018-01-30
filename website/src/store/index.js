import projects from '@/assets/projekte.json';
import router from '@/router';
import effects from '@/main';

export const state = {
  mobile: false,
  panel: false,
  page: '/',
  scrollTop: 0,
  themeColor: '#0b8dc9',
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
  setColor: color => {
    document.body.style.setProperty('--theme-color', color);
    document.querySelector('meta[name=theme-color]').content = color;
    return { themeColor: color };
  },
  fetchProjects: () => fetch(projects)
    .then(response => response.json())
    .then(projects => effects.storeProjects(projects)),
  storeProjects: value => ({ projects: value }),
  requestProject: id => ({ projects }) => {
    (!projects.hasOwnProperty(id))
      ? router.push(id) // not found: push to router so relevant 404 is shown
      : effects.setProject(projects[id]);
  },
  setProject: project => ({ project })
};