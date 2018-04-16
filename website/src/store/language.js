import { wait, log, error } from '@/lib/helpers';
const textElements = () => document.querySelectorAll('p,h1,h2,h3,button,.side-link');

export const languageState = {
  language: 'de',
  locales: ''
};

export const languageActions = {
  /* Change language and re-fetch project list to update project titles etc. */
  toggleLanguage: () => async (state, actions) => {
    await actions.getLanguage({ language: state.language === 'de' ? 'en' : 'de', animate: true });
  },
  /* Load language assets and animate the language change */
  getLanguage: ({ language, animate }) => async (state, actions) => {
    try {
      const { default: locales } = language === 'de'
        ? await import(/* webpackChunkName: "de-language" */ '@/locales/de-DE.js')
        : await import(/* webpackChunkName: "en-language" */ '@/locales/en-US.js');
      if (!locales.App) error('Error while loading language, please try again');

      /* Animate changing of language and wait until text elements are transformed by CSS transition */
      if (animate) {
        textElements().forEach(el => el.classList.add('textsquish'));
        await wait(210);
      }

      actions.setLanguage({ language, locales });

      /* Re-fetch project list and details after language is set to get new localized assets */
      actions.fetchProjects();
      actions.requestProject(state.project.id);
    } catch (e) {
      log(e);
    }
  },
  /* Undo the CSS transition performed by getLanguage() and set the new language */
  setLanguage: ({ language, locales }) => {
    textElements().forEach(el => el.classList.remove('textsquish'));
    return { locales, language };
  },
  currentLanguage: () => state => state.language
};