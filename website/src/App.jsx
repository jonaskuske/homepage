import actions from '@/main';
import Button from '@@/Button';
import NavHeader from '@@/NavHeader';
import SideMenu from '@@/SideMenu';
import Splash from '@@/Splash';
import Projects from '@@/Projects';
import Impressum from '@@/Imprint';


function toggleBackground() {
  actions.toggleBackground();
  document.querySelector('body').classList.toggle('app-light');
  document.querySelector('body').classList.toggle('app-dark');
}

export default (state, actions) => {
  return (
    <div style={{ marginTop: '5rem' }}>
      <SideMenu state={state} class={state.sideMenu ? '' : 'slideout'} />
      <NavHeader actions={actions} />
      <div style={{ marginLeft: '50%', transform: 'translateX(-51%)' }}>
        <Button onclick={toggleBackground} style={{ fontWeight: 'lighter' }} text={'Hell / Dunkel'} />
      </div>
      {state.page === 'splash' ? <Splash state={state} /> : ''}
      {state.page === 'projects' ? <Projects state={state} /> : ''}
      {state.page === 'imprint' ? <Impressum state={state} /> : ''}
    </div>
  );
};