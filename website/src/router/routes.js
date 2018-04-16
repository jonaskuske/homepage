import { WelcomePage, ProjectsPage, DetailPage, AboutPage, ImprintPage } from '@/pages';

export default [
  {
    path: '/',
    name: 'Portfolio',
    component: WelcomePage
  },
  {
    path: {
      de: '/projekte',
      en: '/projects'
    },
    name: {
      de: 'Projekte',
      en: 'Projects'
    },
    component: ProjectsPage
  },
  {
    path: '/detail',
    name: {
      de: 'Projekt',
      en: 'Project'
    },
    component: DetailPage
  },
  {
    path: '/me',
    name: {
      de: 'Über mich',
      en: 'About Me'
    },
    component: AboutPage
  },
  {
    path: {
      de: '/impressum',
      en: '/imprint'
    },
    name: {
      de: 'Impressum',
      en: 'Imprint'
    },
    component: ImprintPage
  }
];