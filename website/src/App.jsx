import { RouterView } from '@/router';
import Button from '@@/Button';
import NavHeader from '@@/NavHeader';
import SideMenu from '@@/SideMenu';

export default (state, actions) => (
  <div id='app'>
    <SideMenu light={state.lightBackground} class={state.sideMenu ? '' : 'slideout'} />
    <NavHeader />
    <div class='dark-light-btn'>
      <Button onclick={actions.toggleBackground} style={{ padding: 0 }}> Hell / Dunkel </Button>
    </div>
    <RouterView state />
  </div>
);