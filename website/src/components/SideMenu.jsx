import Button from '@@/Button';
import ProfilePic from '@@/ProfilePic';
import actions from '@/main';
import router from '@/router';

const style = {
};

const menuItems = [
  { text: 'Start', route: '/' },
  { text: 'Projekte', route: 'projects' },
  { text: 'Impressum', route: 'imprint' }
];

const view = props => {
  return (
    <div class={`side-panel ${props.light ? 'panel-light' : 'panel-dark'} ${props.class}`} style={{ ...style, ...props.style }}>
      <div /> {/* spacer for css grid */}
      <ProfilePic />
      {menuItems.map(m => <Button class={'side-btn'} onclick={() => router.push(m.route)}>{m.text}</Button>)}
    </div>
  );
};

export default view;