import { parseText } from '@/lib/helpers';
const view = ({ mode = 'left', src }, [children]) => (
  <div class={`image-text-block image-text-block-${mode}`}>
    <img class='image-block' src={src} alt="" />
    <div class='text-block'>
      <p class="textsquish-blocker"> {parseText(children)} </p>
    </div>
  </div>
);

export default view;