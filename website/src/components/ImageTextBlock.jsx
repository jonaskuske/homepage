import { parseText } from '@/lib/helpers';
import { ImageClickable } from '@/components';

const view = ({ mode = 'left', src, mobile }, [children]) => (
  <div class={`image-text-block image-text-block-${mode}`}>
    <ImageClickable class='image-block' src={src} alt="" mobile={mobile} />
    <div class='text-block'>
      <p class="textsquish-blocker"> {parseText(children)} </p>
    </div>
  </div>
);

export default view;