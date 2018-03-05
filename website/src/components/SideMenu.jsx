import Button from '@@/Button';
import ProfilePic from '@@/ProfilePic';
import router from '@/router';
import actions from '@/main';

const view = ({ class: className = '', mobile, lang, panel: { nav = [] } = {} }) => (
  <nav class={`side-panel ${className}`} >
    <ProfilePic onclick={() => { mobile && actions.setMenu(false); router.push('/me'); }} />
    <div class='side-link-container'>
      {nav.map(({ route, text }) => (
        <a class='side-link' href={route} onclick={() => { mobile && actions.setMenu(false); router.push(route); return false; }}>{text}
          {/*<Button class={'side-btn'} onclick={() => { mobile && actions.setMenu(false); router.push(route); }}> {text} </Button>*/}
        </a>
      ))}
    </div>
    <button class='language-toggle' onclick={actions.toggleLanguage}>
      <span>{lang === 'de' ? 'Deutsch' : 'English'}</span>
      /{lang === 'de' ? 'English' : 'Deutsch'}
    </button>
  </nav>
);

export default view;