import Imprint from '@@/Imprint';
import Projects from '@@/Projects';
import Splash from '@@/Splash';
import Details from '@@/Details';
import About from '@@/About';

export default [
  {
    path: '/',
    name: 'Portfolio',
    component: Splash
  },
  {
    path: '/projekte',
    name: 'Projekte',
    component: Projects
  },
  {
    path: '/detail',
    name: 'Projekt',
    component: Details
  },
  {
    path: '/me',
    name: 'Über mich',
    component: About
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: Imprint
  }
];