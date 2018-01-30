import { RouterView } from '@/router';
import { HTMLColorInput, cssVariables } from '@/lib/browser-support';
import { wait } from '@/lib/helpers';
import Button from '@@/Button';
import NavHeader from '@@/NavHeader';
import SideMenu from '@@/SideMenu';
import Color from '@@/ColorPicker';
import actions from '@/main';

const startup = colors => { actions.fetchProjects(); addMobileListener(); setRandomColor(colors); };
const animate = el => {
  el.classList.add('animate-in');
  wait(25).then(() => el.classList.remove('animate-in'));
};
const random = max => Math.floor(Math.random() * Math.floor(max));
const setRandomColor = colors => actions.setColor(colors[random(colors.length)]);
const openColorPicker = color => {
  const el = document.querySelector('input[type=color]'); el.value = color; el.focus(); el.click();
};
const addMobileListener = () => {
  const matcher = window.matchMedia('(min-width: 1000px)');
  const handler = query => actions.setLayout(query.matches ? false : true);
  handler(matcher);
  matcher.addListener(handler);
};

const view = ({ colors, page, panel, scrollTop, mobile, themeColor, ...state }, actions) => (
  <div id='app' oncreate={() => startup(colors)}>
    <SideMenu class={!panel ? 'slideout' : ''} mobile={mobile} />
    <NavHeader scroll={scrollTop} menu={panel} mobile={mobile} />
    <div class='color-btn-container'>
      {cssVariables && [
        <Button onclick={() => setRandomColor(colors)}> Zufallsfarbe </Button>,
        HTMLColorInput && [
          <Button onclick={() => openColorPicker(themeColor)} >
            Farbe ausw&auml;hlen
          </Button>,
          <Color />
        ]]}
    </div>
    <RouterView
      class='content-container'
      data-page={page}
      color={themeColor}
      projects={state.projects}
      project={state.project}
      oncreate={animate}
      onupdate={(el, old) => page !== old['data-page'] && animate(el)}
    />
  </div>
);

export default view;
