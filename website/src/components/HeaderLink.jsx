export default (props, children) => (
  <a style={{ marginLeft: '1.5rem' }} href={props.href || '#'} >
    <p class={'header-link-text ' + props.class}> {children || 'Platzhalter'}</p>
  </a>
);