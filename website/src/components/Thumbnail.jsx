import { svgAnimation } from '@/lib/browser-support';
import { LoadingSpinner } from '@/components';

const view = ({ image, class: className = '', id, mobile, href = '#', color, ...props }, child = 'Projekt') => (
  <a href={href} onclick={e => e.preventDefault()}>
    <div class={`thumbnail ${className}`} style={{ backgroundImage: `url(${image})` }} {...props}>
      <div class='overlay'>
        {svgAnimation
          ? <LoadingSpinner class='spinner' color={{ dash: color }} animation={{ inner: true, outer: !mobile }} id={id} />
          : (
            < div class='animation-fallback'>
              <LoadingSpinner class='spinner' animation={{ inner: false, outer: false }} color={{ dash: color }} id={id} />
            </div>
          )}
        {child}
      </div>
    </div>
  </a>
);

export default view;
