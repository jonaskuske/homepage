import Button from '@@/Button';
import ProfilePic from '@@/ProfilePic';
import router from '@/router';

const menuItems = [
  { text: 'Start', route: '/' },
  { text: 'Projekte', route: '/projekte' },
  { text: 'Über mich', route: '/me' },
  { text: 'Impressum', route: '/impressum' }
];

const view = ({ light, class: className }) => (
  <div class={`side-panel ${light ? 'panel-light ' : 'panel-dark'} ${className || ''}`} >
    <div />
    <ProfilePic onclick={() => router.push('/me')} />
    {menuItems.map(({ route, text }) => (
      <a class='side-link' href={route} onclick={() => false}>
        <Button class={'side-btn'} onclick={() => router.push(route)}>
          {text}
        </Button>
      </a>
    ))}
  </div>
);

export default view;