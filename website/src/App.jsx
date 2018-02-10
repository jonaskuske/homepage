import { RouterView } from '@/router';
import { HTMLColorInput, cssVariables } from '@/lib/browser-support';
import { wait } from '@/lib/helpers';
import Button from '@@/Button';
import NavHeader from '@@/NavHeader';
import SideMenu from '@@/SideMenu';
import ColorPicker from '@@/ColorPicker';
import actions from '@/main';
import Load from '@@/LoadingScreen';

const startup = colors => { addMobileListener(); setRandomColor(colors); };
const animate = el => {
  wait(30).then(() => { el.classList.remove('animate-in'); document.documentElement.scrollIntoView(true); });
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

const view = ({ colors, page, panel, scrollTop, mobile, themeColor, projects, locales: { App = {}, ...locales }, project, ...state }, actions) => (
  <div oncreate={() => startup(colors)}>
    <SideMenu class={!panel ? 'slideout' : ''} mobile={mobile} lang={state.language} panel={App.panel} />
    <NavHeader scroll={scrollTop} menu={panel} mobile={mobile} links={App.links} />
    <section class='color-btn-container'>
      {cssVariables && [
        <span><Button onclick={() => setRandomColor(colors)}> {App.ColorButton1} </Button></span>,
        HTMLColorInput && [
          <span><Button onclick={() => openColorPicker(themeColor)} >
            {App.ColorButton2}
          </Button></span>,
          <ColorPicker />
        ]]}
    </section>
    <RouterView
      class={'content-container animate-in'}
      data-page={page}
      data={{ color: themeColor, projects, project, mobile, locales }}
      oncreate={animate}
      onupdate={(el, old) => page !== old['data-page'] && animate(el)}
    />
  </div>
);

export default view;
