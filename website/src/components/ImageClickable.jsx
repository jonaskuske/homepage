import actions from '@/main';
import { objectFitSupported, isFirefox } from '@/lib/browser-support';
import { withBlur } from '@/lib/helpers';
import objectFitPolyfill from 'object-fit-images';

const openOverlay = evt => {
  const image = evt.target.src;
  actions.setOverlayImage(image);
  actions.showOverlay();
};

const view = ({ class: className = '', mobile, ...props }) => (
  <img
    class={`pointer clickable-img ${className}`}
    style={!mobile && (isFirefox || !objectFitSupported) && { minWidth: '500px' }}
    oncreate={!objectFitSupported && objectFitPolyfill}
    tabindex={0}
    onclick={withBlur(openOverlay)}
    onkeydown={e => {
      if (e.keyCode === 13 || e.keyCode === 32) {
        e.preventDefault();
        openOverlay(e);
      }
    }}
    {...props}
  />
);

export default view;