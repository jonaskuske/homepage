const HeaderLink = ({ class: className, href, text, hide }) => (
  <a
    class="header-link"
    target={href.startsWith('mailto') ? '' : '_blank'}
    tabindex={hide ? -1 : 0}
    rel="noopener"
    href={href || '#'}
  >
    <p class={'header-link-text ' + (className || '')}>{text}</p>
  </a>
)

export default HeaderLink
