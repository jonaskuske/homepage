import Spinner from '@@/LoadingSpinner';

const view = ({ img, class: className = '', id, href = '#', color, ...props }, child) => (
  <a href={href} onclick={() => false}>
    <div class={`thumbnail ${className}`} {...props}>
      <div style={{ paddingTop: '100%' }} />
      <div class='overlay'>
        <Spinner class='spinner' color={color} id={id} />
        <p> {child || 'Projekt'}</p>
      </div>
    </div>
  </a>
);

export default view;
