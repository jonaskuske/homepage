import { RouterView } from '@/router';
import Button from '@@/Button';
import NavHeader from '@@/NavHeader';
import SideMenu from '@@/SideMenu';

export default (state, actions) => (
  <div id='app' oncreate={actions.allProjects}>
    <SideMenu light={state.lightBackground} class={state.sideMenu ? '' : 'slideout'} />
    <NavHeader scroll={state.scrollTop} />
    <div class='dark-light-btn'>
      <Button onclick={actions.toggleBackground} style={{ padding: 0 }}> Farbe ändern </Button>
    </div>
    <RouterView state={state} />
  </div>
);