import HeaderLink from '@@/HeaderLink';
import Hamburger from '@@/Hamburger';
import actions from '@/main';

const links = [
  { text: 'GitHub', href: 'https://github.com/jonaskuske' },
  { text: 'Adobe Portfolio', href: 'http://jonaskuske.com' },
  { text: 'Kontakt', href: 'mailto:joku49@gmail.com' },
];

export default props => {
  return (
    <div class='header'>
      <div>
        <Hamburger class='events' style={{ marginLeft: '3.5rem' }} onclick={() => actions.toggleMenu()} />
      </div>
      <div style={{ display: 'flex', marginRight: '3.5rem' }}>
        {links.map(props => <HeaderLink class='events' {...props} />)}
      </div>
    </div>
  );
};