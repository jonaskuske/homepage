import { Hamburger, HeaderLink } from '@/components'
import { throttle } from '@/lib/helpers'

const isNumber = num => typeof num === 'number'
const getScrollTop = () => {
  const d = document
  return isNumber(d.documentElement.scrollTop) ? d.documentElement.scrollTop : d.body.scrollTop
}

let scrollClassAdded
const handleScroll = throttle(() => {
  if (getScrollTop() > 0) {
    if (scrollClassAdded) return
    document.body.classList.add('scrolled')
    scrollClassAdded = true
  } else if (scrollClassAdded) {
    document.body.classList.remove('scrolled')
    scrollClassAdded = false
  }
}, 150)
const addListener = () => window.addEventListener('scroll', handleScroll, { passive: true })
const removeListener = () => window.removeEventListener('scroll', handleScroll)

const NavHeader = ({ menu, mobile, i18n }) => (_, actions) => {
  const t = i18n.t.forNamespace('App')
  const hideLinks = menu && mobile
  const links = [
    { text: 'GitHub', href: 'https://github.com/jonaskuske' },
    { text: 'LinkedIn', href: 'https://www.linkedin.com/in/jonaskuske/' },
    { text: 'Twitter', href: 'https://twitter.com/JonasKuske' },
    { text: t.inline('contact')`Contact`, href: 'mailto:mail@jonaskuske.com' },
  ]

  return (
    <header class="header" oncreate={addListener} ondestroy={removeListener}>
      <Hamburger class="events" fn={actions.ui.toggleMenu} />
      <nav class={`link-container ${hideLinks ? 'link-container-change ' : ''}`}>
        {links.map(({ text, href }) => (
          <HeaderLink class="events" hide={menu && mobile} href={href} text={text} />
        ))}
      </nav>
    </header>
  )
}

export default NavHeader
