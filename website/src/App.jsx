import actions from '@/main';
import { wait } from '@/lib/helpers';
import { HTMLColorInput, cssVariables } from '@/lib/browser-support';
import { RouterView } from '@/router';
import { ColorPicker, SidePanel, NavHeader, Button, ImageOverlay } from '@/components';

const animate = el => { el.classList.add('animate-in'); wait(30).then(() => el.classList.remove('animate-in')); };
const openColorPicker = color => {
  const el = document.querySelector('input[type=color]'); el.value = color; el.focus(); el.click();
};
/* If restore = true and a previous scroll position for the page is saved, restore it. Else scroll to top. */
const handleScrollPosition = (page, positions) => {
  if (!(positions.restore && positions[page])) return document.documentElement.scrollIntoView(true);
  document.documentElement.scrollTop = positions[page];
  actions.setRestoreScroll(false);
};

const view = ({ page, mobile, scrollPositions, locales: { App = {}, ...locales }, ...state }, actions) => (
  <div>
    {state.overlay && <ImageOverlay src={state.overlayImage} />}
    <SidePanel class={`${!state.panel ? 'slideout' : ''}`} mobile={mobile} lang={state.language} panel={App.panel} />
    <NavHeader scroll={state.scrollTop} menu={state.panel} mobile={mobile} links={App.links} />
    <section class={`color-btn-container ${state.panel ? 'menu-aside' : ''}`}>
      {cssVariables && [
        <span><Button onclick={actions.setRandomColor}> {App.ColorButton1} </Button></span>,
        HTMLColorInput && [
          <span>
            <Button onclick={() => openColorPicker(state.themeColor)} >
              {App.ColorButton2}
            </Button>
          </span>,
          <ColorPicker />
        ]]}
    </section>
    <RouterView
      class={`content-container ${state.panel ? 'menu-aside' : ''}`}
      data-page={page}
      data={{ mobile, locales, ...state }}
      oncreate={el => { animate(el); handleScrollPosition(page, scrollPositions); }}
      onupdate={(el, old) => page !== old['data-page'] && animate(el)}
    />
  </div>
);

export default view;
