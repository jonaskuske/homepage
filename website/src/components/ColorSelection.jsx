import router from '@/router'
import { Button, ColorPicker } from '@/components'
import { HTMLColorInput as supportsColorInputElement } from '@/lib/browser-support'

const openColorPicker = color => {
  const el = document.querySelector('input[type=color]')
  el.value = color
  el.focus()
  el.click()
}

const ColorSelection = ({ panel, color, open, mobile, i18n }) => (_, actions) => {
  const t = i18n.t.forNamespace('App')
  const selectColorHandler = mobile ? () => openColorPicker(color) : actions.ui.toggleColorSelection
  const showSelectionButtons = !mobile && open

  const openPhonePairing = () => {
    router.push('/connect')
    actions.ui.toggleColorSelection()
  }

  const ColorSelectWithOptions = [
    <span>
      <Button onclick={selectColorHandler}>{t.inline('colors.select')`Select color`}</Button>
    </span>,
    <ColorPicker />,
    showSelectionButtons && [
      <br />,
      <span>
        <Button onclick={() => openColorPicker(color)}>
          {t.inline('colors.selectOnDevice')`On device`}
        </Button>
      </span>,
      <span>
        <Button onclick={openPhonePairing}>{t.inline('colors.selectOnPhone')`On phone`}</Button>
      </span>,
    ],
  ]

  const ColorSelectRemoteOnly = (
    <span>
      <Button onclick={openPhonePairing}>
        {t.inline('colors.selectPhoneOnlyOption')`Control colors remotely using your phone`}
      </Button>
    </span>
  )

  const ColorSelect = () => {
    if (!supportsColorInputElement) return !mobile && ColorSelectRemoteOnly
    return ColorSelectWithOptions
  }

  return (
    <section class={`color-btn-container ${panel ? 'menu-aside' : ''}`}>
      <span>
        <Button onclick={actions.theme.setRandomColor}>
          {t.inline('colors.random')`Random color`}
        </Button>
      </span>
      <ColorSelect />
    </section>
  )
}

export default ColorSelection
