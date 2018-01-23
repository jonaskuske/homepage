export default props => (
  <a style={{ marginLeft: '1.5rem' }} href={props.href || '#'} >
    <p class={'header-link-text ' + props.class}> {props.text || 'Platzhalter'}</p>
  </a>
);