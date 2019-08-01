import router from '@/router'
import { ProfilePicture } from '@/components'
import { isIE } from '@/lib/browser-support'
import Miniswipe from 'miniswipe'

let swipeHandler
const addSwipeHandler = (el, cb) => (swipeHandler = new Miniswipe(el).left(cb).start())
const removeSwipeHandler = () => {
  if (swipeHandler && swipeHandler.active) swipeHandler.stop()
  swipeHandler = null
}

const SidePanel = props => (_, actions) => {
  const { i18n } = props
  const t = i18n.t.forNamespace('App')

  const openMenu = () => actions.ui.setMenu(true)
  const closeMenu = () => actions.ui.setMenu(false)
  const navigate = path => evt => {
    if (evt && evt.preventDefault) evt.preventDefault()
    if (!window.matchMedia('(min-width: 1550px)').matches) closeMenu()
    router.push(path)
  }

  const className = (isIE ? 'ie ' : '') + (props.class || '')
  const links = [
    { text: 'Start', href: '/' },
    { text: t.inline('menu.projects')`Projects`, href: '/projects' },
    { text: t.inline('menu.aboutMe')`About Me`, href: '/me' },
    { text: t.inline('menu.legalNotice')`Legal Notice`, href: '/legal' },
  ]

  return (
    <nav
      class={`side-panel ${className}`}
      tabindex={-1}
      onclick={e => e.stopPropagation()}
      oncreate={el => addSwipeHandler(el, () => actions.ui.setMenu(false))}
      ondestroy={removeSwipeHandler}
    >
      <ProfilePicture onclick={navigate('/me')} />
      <div class="side-link-container">
        {links.map(link => (
          <a class="side-link" href={link.href} onclick={navigate(link.href)} onfocus={openMenu}>
            {link.text}
          </a>
        ))}
      </div>
      <button class="language-toggle" onclick={actions.toggleLanguage}>
        <span>{i18n.language === 'en' ? 'English' : 'Deutsch'}</span>/
        {i18n.language === 'en' ? 'Deutsch' : 'English'}
      </button>
    </nav>
  )
}

export default SidePanel
