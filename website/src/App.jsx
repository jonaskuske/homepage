import router from '@/router';
import actions from '@/main';
import Button from '@@/Button';
import NavHeader from '@@/NavHeader';
import SideMenu from '@@/SideMenu';
import Splash from '@@/Splash';
import Projects from '@@/Projects';
import Impressum from '@@/Imprint';
import Details from '@@/Details';


function toggleBackground() {
  actions.toggleBackground();
  document.querySelector('body').classList.toggle('app-dark');
}

export default (state, actions) => (
  <div oncreate={router.init} style={{ marginTop: '5rem' }}>
    <SideMenu light={state.lightBackground} class={state.sideMenu ? '' : 'slideout'} />
    <NavHeader actions />
    <div style={{ marginLeft: '50%', transform: 'translateX(-52%)' }}>
      <Button onclick={toggleBackground}> Hell / Dunkel </Button>
    </div>
    {state.page === '/' ? <Splash state /> : ''}
    {state.page === 'projects' ? <Projects state /> : ''}
    {state.page === 'detail' ? <Details state /> : ''}
    {state.page === 'imprint' ? <Impressum state /> : ''}
  </div>
);