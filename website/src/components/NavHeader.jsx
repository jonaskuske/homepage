import HeaderLink from '@@/HeaderLink';
import Hamburger from '@@/Hamburger';
import actions from '@/main';

const links = [
  { text: 'GitHub', href: 'https://github.com/jonaskuske' },
  { text: 'LinkedIn', href: 'https://www.linkedin.com/in/jonaskuske/' },
  { text: 'Adobe Portfolio', href: 'http://jonaskuske.com' },
  { text: 'Kontakt', href: 'mailto:joku49@gmail.com' },
];

const handleScroll = () => actions.setScrollTop(document.documentElement.scrollTop);
const addListener = () => document.addEventListener('scroll', handleScroll, { passive: true });
const removeListener = () => document.removeEventListener('scroll', handleScroll);

export default ({ scroll }) => {
  return (
    <div class='header' oncreate={addListener}>
      <div>
        <Hamburger class='events' style={{ marginLeft: '3.5rem' }} onclick={actions.toggleMenu} />
      </div>
      <div class={`link-container ${scroll > 0 ? 'invisible' : ''}`}>
        {links.map(({ text, href }) => <HeaderLink class='events' href={href}>{text}</HeaderLink>)}
      </div>
    </div>
  );
};