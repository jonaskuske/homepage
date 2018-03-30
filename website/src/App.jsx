import { RouterView } from '@/router';
import { HTMLColorInput, cssVariables } from '@/lib/browser-support';
import { wait } from '@/lib/helpers';
import Button from '@@/Button';
import NavHeader from '@@/NavHeader';
import SideMenu from '@@/SideMenu';
import ColorPicker from '@@/ColorPicker';
import actions from '@/main';
import Load from '@@/LoadingScreen';
import ImageOverlay from '@@/ImageOverlay';

const startup = () => { addMobileListener(); actions.setRandomColor(); };
const animate = el => wait(30).then(() => el.classList.remove('animate-in'));
const openColorPicker = color => {
  const el = document.querySelector('input[type=color]'); el.value = color; el.focus(); el.click();
};
const addMobileListener = () => {
  const matcher = window.matchMedia('(min-width: 900px)');
  const handler = query => actions.setLayout(query.matches ? false : true);
  handler(matcher);
  matcher.addListener(handler);
};
const handleScrollPosition = (page, positions) => {
  if (!(positions.restore && positions[page])) return document.documentElement.scrollIntoView(true);
  document.documentElement.scrollTop = positions[page];
  actions.setRestoreScroll(false);
};

const view = ({ page, mobile, scrollPositions, locales: { App = {}, ...locales }, ...state }, actions) => (
  <div oncreate={startup}>
    {state.overlay && <ImageOverlay src={state.overlayImage} />}
    <SideMenu class={`${!state.panel ? 'slideout' : ''} ${state.disableGlass ? 'disable-glass' : ''}`} mobile={mobile} lang={state.language} panel={App.panel} />
    <NavHeader scroll={state.scrollTop} menu={state.panel} mobile={mobile} links={App.links} />
    <section class='color-btn-container'>
      {cssVariables && [
        <span><Button onclick={actions.setRandomColor}> {App.ColorButton1} </Button></span>,
        HTMLColorInput && [
          <span><Button onclick={() => openColorPicker(state.themeColor)} >
            {App.ColorButton2}
          </Button></span>,
          <ColorPicker />
        ]]}
    </section>
    <RouterView
      class={'content-container animate-in '}
      data-page={page}
      data={{ mobile, locales, ...state }}
      oncreate={el => { animate(el); handleScrollPosition(page, scrollPositions); }}
      onupdate={(el, old) => page !== old['data-page'] && animate(el)}
    />
  </div>
);

export default view;
