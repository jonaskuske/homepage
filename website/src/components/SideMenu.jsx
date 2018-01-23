import Button from '@@/Button';
import ProfilePic from '@@/ProfilePic';
import actions from '@/main';

const style = {
  height: '100vh',
  width: '300px',
  position: 'absolute'
};

const menuItems = [
  { text: 'Start', page: 'splash' },
  { text: 'Projekte', page: 'projects' },
  { text: 'Impressum', page: 'imprint' }
];

const view = props => {
  return (
    <div class={'side-panel ' + (props.state.lightBackground ? 'side-panel-light ' : 'side-panel-dark ') + props.class} style={{ ...style, ...props.style }}>
      <div /> {/* spacer for css grid */}
      <ProfilePic />
      {menuItems.map(el => <Button class={'side-button'} onclick={() => actions.setPage(el.page)} text={el.text} />)}
    </div>
  );
};

export default view;