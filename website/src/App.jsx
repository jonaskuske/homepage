import actions from '@/main';
import router from '@/router';
import { wait } from '@/lib/helpers';
import { RouterView } from '@/router';
import { ColorSelection, SidePanel, NavHeader, ImageOverlay } from '@/components';
import Miniswipe from 'miniswipe';

const animate = el => { el.classList.add('animate-in'); wait(30).then(() => el.classList.remove('animate-in')); };
/* If restore = true and a previous scroll position for the page is saved, restore it. Else scroll to top. */
const handleScrollPosition = (page, positions) => {
  if (positions.restore && positions[page]) {
    document.documentElement.scrollTop = positions[page];
    actions.setRestoreScroll(false);
  } else document.documentElement.scrollIntoView(true);
};

const view = ({ page, mobile, scrollPositions, colorSelection, locales: { App = {}, ...locales }, ...state }, actions) => (
  <div onclick={el => mobile && state.panel && actions.setMenu(false)}>
    {state.overlay && <ImageOverlay src={state.overlayImage} />}
    <SidePanel class={`${!state.panel ? 'slideout' : ''}`} mobile={mobile} lang={state.language} panel={App.panel} />
    <div
      id='menu-touchtarget'
      oncreate={el => new Miniswipe(el, { allowClick: true, allowMouseLeave: true })
        .right(() => actions.setMenu(true))
        .start()}
    >
    </div>
    <NavHeader scroll={state.scrollTop} menu={state.panel} mobile={mobile} links={App.links} />
    <ColorSelection
      panel={state.panel}
      color={state.themeColor}
      open={colorSelection}
      mobile={mobile}
      text={App.ColorSelection}
    />
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
