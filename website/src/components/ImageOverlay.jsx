import actions from '@/main';
import { wait } from '@/lib/helpers';
import { objectFitSupported } from '@/lib/browser-support';
import objectFitPolyfill from 'object-fit-images';

const animateIn = el => {
  el.focus(); wait(30).then(() => el.classList.remove('invisible'));
};
const animateOut = (el, done) => {
  el.classList.add('invisible');
  wait(300).then(done);
};
const showImage = el => {
  !objectFitSupported && objectFitPolyfill(el);
  wait(30).then(() => el.classList.remove('overlay-squish'));
};

const view = ({ src }) => (
  <div
    id="overlay"
    class='pointer invisible'
    onclick={actions.hideOverlay}
    oncreate={animateIn}
    onremove={animateOut}
    tabindex={0}
    onkeydown={e => {
      if (e.keyCode === 13 || e.keyCode === 32) {
        e.preventDefault();
        actions.hideOverlay(src);
      }
    }}
  >
    <img class='overlay-squish' oncreate={showImage} src={src} alt="" />
  </div>
);

export default view;