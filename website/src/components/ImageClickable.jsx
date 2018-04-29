import actions from '@/main';
import { objectFitSupported, isFirefox } from '@/lib/browser-support';
import objectFitPolyfill from 'object-fit-images';

const openOverlay = evt => {
  const image = evt.target.src;
  actions.setOverlayImage(image);
  actions.showOverlay();
};

const view = ({ class: className = '', mobile, ...props }) => (
  <img
    class={`pointer ${className}`}
    style={!mobile && (isFirefox || !objectFitSupported) && { minWidth: '500px' }}
    oncreate={!objectFitSupported && objectFitPolyfill}
    onclick={openOverlay}
    {...props}
  />
);

export default view;