export default (props, children) => (
  <a class='header-link' target='_blank' rel='noopener' href={props.href || '#'} >
    <p class={'header-link-text ' + props.class}>
      {children || 'Platzhalter'}
    </p>
  </a>
);