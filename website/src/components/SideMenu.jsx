import Button from '@@/Button';
import ProfilePic from '@@/ProfilePic';
import router from '@/router';
import actions from '@/main';

const view = ({ class: className = '', mobile, lang, panel: { nav = [] } = {} }) => (
  <nav class={`side-panel ${className}`} >
    <div />
    <ProfilePic onclick={() => { mobile && actions.setMenu(false); router.push('/me'); }} />
    {nav.map(({ route, text }) => (
      <a class='side-link' href={route} onclick={() => false}>
        <Button class={'side-btn'} onclick={() => { mobile && actions.setMenu(false); router.push(route); }}> {text} </Button>
      </a>
    ))}
    <p class='side-link' onclick={actions.toggleLanguage}>
      <span>{lang === 'de' ? 'Deutsch' : 'English'}</span>
      /{lang === 'de' ? 'English' : 'Deutsch'}
    </p>
  </nav>
);

export default view;