const view = ({ class: className = '', href = '', hide }, children) => (
  <a
    class='header-link'
    target={!href.startsWith('mailto') ? '_blank' : ''}
    tabindex={hide ? -1 : 0}
    rel='noopener'
    href={href || '#'}
  >
    <p class={'header-link-text ' + className}>
      {children || 'Platzhalter'}
    </p>
  </a>
);

export default view;
