import HeaderLink from '@@/HeaderLink';
import Hamburger from '@@/Hamburger';
import actions from '@/main';

const links = [
  { text: 'GitHub', href: 'https://github.com/jonaskuske' },
  { text: 'LinkedIn', href: 'https://www.linkedin.com/in/jonaskuske/' },
  { text: 'Adobe Portfolio', href: 'http://jonaskuske.com' },
  { text: 'Kontakt', href: 'mailto:joku49@gmail.com' },
];

const handleScroll = (e) => { actions.setScrollTop(document.documentElement.scrollTop || document.body.scrollTop); };
const addListener = () => document.addEventListener('scroll', handleScroll, { passive: true });
const removeListener = () => document.removeEventListener('scroll', handleScroll);

export default ({ scroll, menu, mobile }) => {
  return (
    <div class='header' oncreate={addListener} ondestroy={removeListener}>
      <div>
        <Hamburger class='events' style={{ marginLeft: '3.5rem' }} onclick={actions.toggleMenu} />
      </div>
      <div class={`link-container ${scroll > 0 || (menu && mobile) ? 'invisible' : ''}`}>
        {links.map(({ text, href }) => <HeaderLink class='events' href={href}>{text}</HeaderLink>)}
      </div>
    </div>
  );
};