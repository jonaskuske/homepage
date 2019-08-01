import { createI18n } from '@/lib/i18n'
import * as ui from './ui'
import * as theme from './theme'
import * as projects from './projects'
import { wait, getQueryParams, domainExtension } from '@/lib/helpers'

const textElements = () => document.querySelectorAll('p,h1,h2,h3,button,.side-link')

const { lang } = getQueryParams(window.location.href)
const useGerman = domainExtension === 'de' || lang === 'de'
const initialLanguage = lang === 'en' || !useGerman ? 'en' : 'de'

const i18nOptions = {
  initialLanguage,
  locales: {
    en: { /* Added through inline translations */ }, // prettier-ignore
    de: () => import(/* webpackChunkName: 'locales/de-DE' */ '../locales/de-DE.json'),
  },
}
const i18n = createI18n(i18nOptions)

const init = () => i18n.resolveInitialLanguage()

const state = {
  page: '/',
  scrollPositions: { restore: false },
  sessionID: '',
  ui: ui.state,
  i18n: i18n.state,
  theme: theme.state,
  projects: projects.state,
}

const actions = {
  setLanguage: langKey => async (state, actions) => {
    textElements().forEach(el => el.classList.add('textsquish'))
    await wait(210)

    await Promise.all([
      actions.i18n.setLanguage(langKey),
      actions.getProjectList(langKey),
      state.projects.project.id && actions.getProjectById({ language: langKey }),
    ])

    textElements().forEach(el => el.classList.remove('textsquish'))
  },
  toggleLanguage: () => (state, actions) => {
    const next = state.i18n.language === 'de' ? 'en' : 'de'
    return actions.setLanguage(next)
  },
  getProjectList: langKey => (state, actions) => {
    return actions.projects.getProjectList(langKey || state.i18n.language)
  },
  getProjectById: ({ id, language }) => (state, actions) => {
    return actions.projects.getProjectById({ id, language: language || state.i18n.language })
  },
  setPage: page => ({ page }),
  /* Save the scroll position of the current page, called before navigating away from a page */
  saveScrollPosition: ({ pos }) => ({ scrollPositions, page }) => ({
    scrollPositions: { ...scrollPositions, [page]: pos },
  }),
  /* Set the restore prop for the scroll positions to the given value (true or false) */
  setRestoreScroll: val => ({ scrollPositions }) => ({
    scrollPositions: { ...scrollPositions, restore: val },
  }),
  setSessionID: sessionID => ({ sessionID }),
  ui: ui.actions,
  i18n: i18n.actions,
  theme: theme.actions,
  projects: projects.actions,
  getState: () => state => state,
}

export { state, actions, init }
