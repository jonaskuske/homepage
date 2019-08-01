import { objectFitSupported } from '@/lib/browser-support'
import objectFitPolyfill from 'object-fit-images'

const ImageClickable = ({ class: className = '', mobile, ...props }) => (_, actions) => {
  const openOverlay = evt => {
    const image = evt.target.src
    actions.ui.setFullsizeImage(image)
  }

  return (
    <img
      class={`pointer clickable-img ${className}`}
      oncreate={!objectFitSupported && objectFitPolyfill}
      tabindex={0}
      onclick={openOverlay}
      onkeydown={e => {
        if (e.keyCode === 13 || e.keyCode === 32) {
          e.preventDefault()
          openOverlay(e)
        }
      }}
      {...props}
    />
  )
}
export default ImageClickable
