import Spinner from '@@/LoadingSpinner';
import { svgAnimation } from '@/lib/browser-support';

const view = ({ image, class: className = '', id, mobile, href = '#', color, ...props }, child) => (
  <a href={href} onclick={() => false}>
    <div class={`thumbnail ${className}`} style={{ backgroundImage: `url(${image})` }} {...props}>
      <div class='overlay'>
        {svgAnimation
          ? <Spinner class='spinner' color={color} mobile={mobile} id={id} />
          : (
            < div class='animation-fallback'>
              <Spinner class='spinner' mobile={mobile} color={color} id={id} />
            </div>
          )}

        <p> {child || 'Projekt'}</p>
      </div>
    </div>
  </a>
);

export default view;
