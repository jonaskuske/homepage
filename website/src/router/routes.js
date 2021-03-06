import {
  WelcomePage,
  ProjectsPage,
  DetailPage,
  AboutPage,
  ImprintPage,
  PhonePairPage,
} from '@/pages'

export default [
  {
    path: '/',
    name: 'Portfolio',
    component: WelcomePage,
  },
  {
    path: {
      de: '/projekte',
      en: '/projects',
    },
    name: {
      de: 'Projekte',
      en: 'Projects',
    },
    component: ProjectsPage,
  },
  {
    path: '/detail',
    name: 'Project',
    component: DetailPage,
  },
  {
    path: '/me',
    name: {
      de: 'Über mich',
      en: 'About Me',
    },
    component: AboutPage,
  },
  {
    path: {
      de: '/rechtliches',
      en: '/legal',
    },
    name: {
      de: 'Rechtliches',
      en: 'Legal Notice',
    },
    component: ImprintPage,
  },
  {
    path: '/connect',
    name: {
      de: 'Telefon verbinden',
      en: 'Pair your Phone',
    },
    component: PhonePairPage,
  },
]
