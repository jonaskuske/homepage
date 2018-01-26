export default (props, children) => (
  <a style={{ marginLeft: '1.5rem' }} target='_blank' rel='noopener' href={props.href || '#'} >
    <p class={'header-link-text ' + props.class}>
      {children || 'Platzhalter'}
    </p>
  </a>
);