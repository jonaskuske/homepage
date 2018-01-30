import Spinner from '@@/LoadingSpinner';
import SVGAnimation from '@/lib/browser-support';

const view = ({ image, class: className = '', id, href = '#', color, ...props }, child) => (
  <a href={href} onclick={() => false}>
    <div class={`thumbnail ${className}`} style={{ backgroundImage: `url(${image})` }} {...props}>
      <div class='overlay'>
        {SVGAnimation
          ? <Spinner class='spinner' color={color} id={id} />
          : (
            < div class='animation-fallback'>
              <Spinner class='spinner' color={color} id={id} />
            </div>
          )}

        <p> {child || 'Projekt'}</p>
      </div>
    </div>
  </a>
);

export default view;
