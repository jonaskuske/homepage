import actions from '@/main';
import router from '@/router';
import { Button, ProfilePicture } from '@/components';
import { isIE } from '@/lib/browser-support';
import Miniswipe from 'miniswipe';

const view = ({ class: className = '', mobile, lang, panel: { nav = [] } = {} }) => (
  <nav
    class={`side-panel ${isIE ? 'ie' : ''} ${className}`}
    oncreate={el => new Miniswipe(el).left(() => actions.setMenu(false)).start()}
  >
    <ProfilePicture onclick={() => { !window.matchMedia('(min-width: 1550px)').matches && actions.setMenu(false); router.push('/me'); }} />
    <div class='side-link-container'>
      {nav.map(({ route, text }) => (
        <a class='side-link' href={route} onclick={e => {
          e.preventDefault();
          !window.matchMedia('(min-width: 1550px)').matches && actions.setMenu(false);
          router.push(route);
        }}>{text}
        </a>
      ))}
    </div>
    <button class='language-toggle' onclick={e => { e.stopPropagation(); actions.toggleLanguage(); }}>
      <span>{lang === 'de' ? 'Deutsch' : 'English'}</span>
      /{lang === 'de' ? 'English' : 'Deutsch'}
    </button>
  </nav>
);

export default view;