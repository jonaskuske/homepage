import Button from '@@/Button';
import ProfilePic from '@@/ProfilePic';
import actions from '@/main';
import router from '@/router';

const style = {
};

const menuItems = [
  { text: 'Start', route: '/' },
  { text: 'Projekte', route: '/projekte' },
  { text: 'Über mich', route: '/me' },
  { text: 'Impressum', route: '/impressum' }
];

const view = props => {
  return (
    <div class={`side-panel ${props.light ? 'panel-light' : 'panel-dark'} ${props.class}`} style={{ ...style, ...props.style }}>
      <div /> {/* spacer for css grid */}
      <ProfilePic onclick={() => router.push('/me')} />
      {menuItems.map(({ route, text }) => <Button class={'side-btn'} onclick={() => router.push(route)}>{text}</Button>)}
    </div>
  );
};

export default view;