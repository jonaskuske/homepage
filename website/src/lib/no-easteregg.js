import actions from '@/main'
import Miniswipe from 'miniswipe'
import Shake from 'shake.js'
import { containsArray, createModal } from '@/lib/helpers'
import { consoleStyling } from '@/lib/browser-support'

/*   Hmm, what is this... :P  🔮✨  */

const SHAKE_LISTENER = new Shake({ threshold: 15, timeout: 1000 })
const SWIPE_LISTENER = new Miniswipe(document, { debug: false })
SHAKE_LISTENER.start()
SWIPE_LISTENER.start()
const KEY_UP = 38
const KEY_DOWN = 40
const KEY_LEFT = 37
const KEY_RIGHT = 39
const KEY_A = 65
const KEY_B = 66
const KEY_ENTER = 13
const KEY_SHIFT = 16

const noRickroll = document.createElement('audio')
noRickroll.loop = true
const mp3 = document.createElement('source')
mp3.type = 'audio/mpeg'
mp3.src = 'https://ia800605.us.archive.org/8/items/NeverGonnaGiveYouUp/jocofullinterview41.mp3'
const ogg = document.createElement('source')
ogg.type = 'audio/ogg'
ogg.src = 'https://ia800605.us.archive.org/8/items/NeverGonnaGiveYouUp/jocofullinterview41.ogg'
noRickroll.appendChild(ogg)
noRickroll.appendChild(mp3)
document.body.appendChild(noRickroll)
;(() => {
  let audioIsPlaying = false
  consoleStyling
    ? console.info('%cKonami%cparty? %cYes.', 'color: red', 'color: gold', 'color: rebeccapurple')
    : console.info('Konamiparty? Yes.')

  const konamiCode = [
    KEY_UP,
    KEY_UP,
    KEY_DOWN,
    KEY_DOWN,
    KEY_LEFT,
    KEY_RIGHT,
    KEY_LEFT,
    KEY_RIGHT,
    KEY_B,
    KEY_A,
    KEY_ENTER,
  ]
  const keyPresses = []
  keyPresses.empty = function() {
    while (this.length) this.pop()
  }

  const handleKeyPress = (key, requiresConfirmation) => {
    key = key.keyCode || key
    if (key === KEY_SHIFT || !konamiCode.includes(key)) return

    keyPresses.push(key)
    if (containsArray(keyPresses, konamiCode)) {
      keyPresses.empty()
      const startTheShow = () => {
        actions.toggleEasteregg()
        audioIsPlaying ? (noRickroll.pause(), (noRickroll.currentTime = 0)) : noRickroll.play()
        audioIsPlaying = !audioIsPlaying
      }

      if (requiresConfirmation && !audioIsPlaying) {
        actions.setMenu(false)
        createModal({
          // mobile: ask before playing audio (required by browsers)
          callback: startTheShow,
          message: 'Party time?',
          confirmText: 'Turn it up!',
          allowCancel: false,
        })
      } else startTheShow()
    }
  }

  // listen for konami-relevant events
  document.addEventListener('keyup', handleKeyPress)
  SWIPE_LISTENER.left(() => handleKeyPress(KEY_LEFT))
    .right(() => handleKeyPress(KEY_RIGHT))
    .up(() => handleKeyPress(KEY_UP))
    .down(() => handleKeyPress(KEY_DOWN))
  window.addEventListener(
    'shake',
    () => {
      handleKeyPress(KEY_B)
      handleKeyPress(KEY_A)
      handleKeyPress(KEY_ENTER, true)
    },
    false,
  )
})()
