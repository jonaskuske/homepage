import actions from '@/main'
import { Hamburger, HeaderLink } from '@/components'

const handleScroll = e => {
  actions.setScrollTop(document.documentElement.scrollTop || document.body.scrollTop)
}
const addListener = () => document.addEventListener('scroll', handleScroll, { passive: true })
const removeListener = () => document.removeEventListener('scroll', handleScroll)

const NavHeader = ({ scroll, menu, mobile, links = [] }) => (
  <header class="header" oncreate={addListener} ondestroy={removeListener}>
    <Hamburger class="events" fn={actions.toggleMenu} />
    <nav class={`link-container ${scroll > 0 || (menu && mobile) ? 'link-container-change' : ''}`}>
      {links.map(({ text, href }) => (
        <HeaderLink class="events" hide={menu && mobile} href={href}>
          {text}
        </HeaderLink>
      ))}
    </nav>
  </header>
)

export default NavHeader
