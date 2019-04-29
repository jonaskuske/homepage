import actions from '@/main'
import { wait } from '@/lib/helpers'
import { objectFitSupported } from '@/lib/browser-support'
import objectFitPolyfill from 'object-fit-images'

let isKeyboardNavigation = false

const animateIn = el => {
  el.focus()
  wait(30).then(() => el.classList.remove('invisible'))
}
const animateOut = async (el, done) => {
  el.classList.add('invisible')
  await wait(200).then(done)
  isKeyboardNavigation && revertFocus(el.firstChild)
}
const showImage = el => {
  !objectFitSupported && objectFitPolyfill(el)
  wait(30).then(() => el.classList.remove('overlay-squish'))
}

const revertFocus = ({ src }) => {
  if (typeof src !== 'string') return

  let originImage

  if (objectFitSupported) {
    src = src.replace(window.location.origin, '') // relative URL for original preview images
    originImage = document.querySelector(`img.clickable-img[src="${src}"]`)
  } else {
    // absolute URL for images created by objectFitPolyfill
    originImage = document.querySelector(`img.clickable-img[data-ofi-src="${src}"]`)
  }
  originImage && originImage.focus()
}

const ImageOverlay = ({ src }) => (
  <div
    id="overlay"
    class="pointer invisible"
    onclick={() => {
      isKeyboardNavigation = false
      actions.hideOverlay()
    }}
    oncreate={animateIn}
    onremove={animateOut}
    tabindex={0}
    onkeydown={e => {
      isKeyboardNavigation = true
      if (e.keyCode === 13 || e.keyCode === 32) {
        e.preventDefault()
        actions.hideOverlay(src)
      }
    }}
  >
    <img class="overlay-squish" oncreate={showImage} src={src} alt="" />
  </div>
)

export default ImageOverlay
