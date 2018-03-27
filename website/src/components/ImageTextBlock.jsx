import { parseText } from '@/lib/helpers';
import Image from '@@/Image';

const view = ({ mode = 'left', src }, [children]) => (
  <div class={`image-text-block image-text-block-${mode}`}>
    <Image class='image-block' src={src} alt="" />
    <div class='text-block'>
      <p class="textsquish-blocker"> {parseText(children)} </p>
    </div>
  </div>
);

export default view;