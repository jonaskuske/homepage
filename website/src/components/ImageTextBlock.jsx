import { ImageClickable } from '@/components'

const ImageTextBlock = ({ mode = 'left', src, mobile }, [children]) => (
  <div class={`image-text-block image-text-block-${mode}`}>
    <ImageClickable class="image-block" src={src} alt="" mobile={mobile} />
    <div class="text-block">
      <p class="textsquish-blocker" innerHTML={children} />
    </div>
  </div>
)

export default ImageTextBlock
