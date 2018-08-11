import actions from '@/main';
import router from '@/router';
import { Button, ColorPicker } from '@/components';
import { HTMLColorInput } from '@/lib/browser-support';

const openColorPicker = color => {
  const el = document.querySelector('input[type=color]'); el.value = color; el.focus(); el.click();
};
const openPhonePairing = () => { router.push('/connect'); actions.toggleColorSelection(); };

export default ({ panel, color, text = {}, open, mobile }) => (
  <section class={`color-btn-container ${panel ? 'menu-aside' : ''}`}>
    <span><Button onclick={actions.setRandomColor}> {text.ColorButtonRandom} </Button></span>
    {HTMLColorInput
      /* supports HTML color input: show options whether to pick color with <input type=color> or remotely on phone */
      ? [
        <span>
          <Button onclick={mobile ? () => openColorPicker(color) : actions.toggleColorSelection}>{text.ColorButtonSelect}
          </Button>
        </span>,
        <ColorPicker />,
        open && !mobile && [
          <br />,
          <span>
            <Button onclick={() => { openColorPicker(color); }} >
              {text.ColorButtonDevice}
            </Button>
          </span>,
          <span>
            <Button onclick={openPhonePairing}>
              {text.ColorButtonPhone}
            </Button>
          </span>
        ]
      ]
      /* no HTML color input: only show remote color control and only if not in mobile mode */
      : !mobile && <span><Button onclick={openPhonePairing}>{text.ColorButtonPhoneOnly}</Button></span>
    }
  </section>
);