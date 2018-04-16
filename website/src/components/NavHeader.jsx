import actions from '@/main';
import { Hamburger, HeaderLink } from '@/components';

const handleScroll = (e) => { actions.setScrollTop(document.documentElement.scrollTop || document.body.scrollTop); };
const addListener = () => document.addEventListener('scroll', handleScroll, { passive: true });
const removeListener = () => document.removeEventListener('scroll', handleScroll);

const view = ({ scroll, menu, mobile, links = [] }) => (
  <header class='header' oncreate={addListener} ondestroy={removeListener}>
    <Hamburger class='events' onclick={() => { actions.toggleMenu(); document.body.scrollTop = 0; }} />
    <nav class={`link-container ${scroll > 0 || (menu && mobile) ? 'link-container-change' : ''}`}>
      {links.map(({ text, href }) => <HeaderLink class='events' href={href}>{text}</HeaderLink>)}
    </nav>
  </header>
);

export default view;
