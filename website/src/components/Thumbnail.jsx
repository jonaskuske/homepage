import Spinner from '@@/LoadingSpinner';

const view = ({ image, class: className = '', id, href = '#', color, ...props }, child) => (
  <a href={href} onclick={() => false}>
    <div class={`thumbnail ${className}`} style={{ backgroundImage: `url(${image})` }} {...props}>
      <div class='overlay'>
        <Spinner class='spinner' color={color} id={id} />
        <p> {child || 'Projekt'}</p>
      </div>
    </div>
  </a>
);

export default view;
