import Button from '@@/Button';
import ProfilePic from '@@/ProfilePic';
import router from '@/router';
import actions from '@/main';

const menuItems = [
  { text: 'Start', route: '/' },
  { text: 'Projekte', route: '/projekte' },
  { text: 'Über mich', route: '/me' },
  { text: 'Impressum', route: '/impressum' }
];

const view = ({ class: className = '', mobile }) => (
  <nav class={`side-panel ${className}`} >
    <div />
    <ProfilePic onclick={() => { mobile && actions.setMenu(false); router.push('/me'); }} />
    {menuItems.map(({ route, text }) => (
      <a class='side-link' href={route} onclick={() => false}>
        <Button class={'side-btn'} onclick={() => { mobile && actions.setMenu(false); router.push(route); }}> {text} </Button>
      </a>
    ))}
  </nav>
);

export default view;