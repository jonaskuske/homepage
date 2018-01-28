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

const random = max => Math.floor(Math.random() * Math.floor(max));
const setRandomColor = () => actions.setColor(colors[random(colors.length)]);
const openColorPicker = color => {
  const el = document.querySelector('input[type=color]'); el.value = color; el.focus(); el.click();
};

export default (state, actions) => (
  <div id='app' oncreate={() => { actions.allProjects(); setRandomColor(); }}>
    <SideMenu light={state.lightBackground} class={state.sideMenu ? '' : 'slideout'} />
    <NavHeader scroll={state.scrollTop} />
    <div class='dark-light-btn'>
      {cssVariables && [
        <Button onclick={setRandomColor}> Zufallsfarbe </Button>,
        HTMLColorInput && [
          <Button onclick={() => openColorPicker(state.themeColor)} style={{ paddingLeft: '15px' }}>
            Farbe ausw&auml;hlen
          </Button>,
          <Color style={{ opacity: 0 }} />
        ]]}
    </div>
    <RouterView state={state} />
  </div>
);