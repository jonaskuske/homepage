import { RouterView } from '@/router';
import { HTMLColorInput, cssVariables } from '@/lib/browser-support';
import Button from '@@/Button';
import NavHeader from '@@/NavHeader';
import SideMenu from '@@/SideMenu';
import Color from '@@/ColorPicker';
import actions from '@/main';

const colors = [
  '#77f113',
  '#b815ef',
  '#f58b00',
  '#00ffff'
];

const fadeIn = el => {
  el.classList.add('invisible');
  setTimeout(() => el.classList.remove('invisible'), 15);
};
const random = max => Math.floor(Math.random() * Math.floor(max));
const setRandomColor = () => actions.setColor(colors[random(colors.length)]);
const openColorPicker = color => {
  const el = document.querySelector('input[type=color]'); el.value = color; el.focus(); el.click();
};
const addMobileListener = () => {
  const matcher = window.matchMedia('(min-width: 1000px)');
  const handler = query => actions.setMobileMode(query.matches ? false : true);
  handler(matcher);
  matcher.addListener(handler);
};

export default (state, actions) => (
  <div id='app' oncreate={() => { actions.allProjects(); setRandomColor(); addMobileListener(); }}>
    <SideMenu class={state.sideMenu ? '' : 'slideout'} mobile={state.isMobile} />
    <NavHeader scroll={state.scrollTop} menu={state.sideMenu} mobile={state.isMobile} />
    <div class='dark-light-btn'>
      {cssVariables && [
        <Button onclick={setRandomColor}> Zufallsfarbe </Button>,
        HTMLColorInput && [
          <Button onclick={() => openColorPicker(state.themeColor)} style={{ marginLeft: '15px' }}>
            Farbe ausw&auml;hlen
          </Button>,
          <Color style={{ opacity: 0 }} />
        ]]}
    </div>
    <RouterView state={state} oncreate={fadeIn} onupdate={(el, old) => state.page !== old['data-page'] && fadeIn(el)} />
  </div>
);