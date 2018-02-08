const view = ({ class: className = '', href = '' }, children) => (
  <a class='header-link' target={!href.startsWith('mailto') ? '_blank' : ''} rel='noopener' href={href || '#'} >
    <p class={'header-link-text ' + className}>
      {children || 'Platzhalter'}
    </p>
  </a>
);

export default view;
