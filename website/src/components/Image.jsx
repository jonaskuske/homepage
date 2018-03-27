import actions from '@/main';

const openOverlay = evt => {
  const image = evt.target.src;
  actions.setOverlayImage(image);
  actions.showOverlay();
};

const view = ({ class: className = '', ...props }) => (
  <img class={`pointer ${className}`} {...props} onclick={openOverlay} />
);

export default view;