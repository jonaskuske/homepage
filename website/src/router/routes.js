import { WelcomePage, ProjectsPage, DetailPage, AboutPage, ImprintPage } from '@/pages';

export default [
  {
    path: '/',
    name: 'Portfolio',
    component: WelcomePage
  },
  {
    path: '/projekte',
    name: 'Projekte',
    component: ProjectsPage
  },
  {
    path: '/detail',
    name: 'Projekt',
    component: DetailPage
  },
  {
    path: '/me',
    name: 'Über mich',
    component: AboutPage
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: ImprintPage
  }
];