import actions from '@/main'
import router from '@/router'
import { Button, ProfilePicture } from '@/components'
import { isIE } from '@/lib/browser-support'
import { withBlur } from '@/lib/helpers'
import Miniswipe from 'miniswipe'

const SidePanel = ({ class: className = '', mobile, lang, panel: { nav = [] } = {} }) => (
  <nav
    class={`side-panel ${isIE ? 'ie' : ''} ${className}`}
    oncreate={el => new Miniswipe(el).left(() => actions.setMenu(false)).start()}
    onclick={e => e.stopPropagation()}
    tabindex={-1}
  >
    <ProfilePicture
      onclick={() => {
        !window.matchMedia('(min-width: 1550px)').matches && actions.setMenu(false)
        router.push('/me')
      }}
    />
    <div class="side-link-container">
      {nav.map(({ route, text }) => (
        <a
          class="side-link"
          href={route}
          onfocus={() => actions.setMenu(true)}
          onclick={withBlur(e => {
            e.preventDefault()
            !window.matchMedia('(min-width: 1550px)').matches && actions.setMenu(false)
            router.push(route)
          })}
        >
          {text}
        </a>
      ))}
    </div>
    <button class="language-toggle" onclick={withBlur(actions.toggleLanguage)}>
      <span>{lang === 'de' ? 'Deutsch' : 'English'}</span>/{lang === 'de' ? 'English' : 'Deutsch'}
    </button>
  </nav>
)

export default SidePanel
