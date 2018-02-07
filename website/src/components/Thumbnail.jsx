import Spinner from '@@/LoadingSpinner';
import { svgAnimation } from '@/lib/browser-support';

const view = ({ image, class: className = '', id, mobile, category = '', subtitle = '', href = '#', color, ...props }, child = 'Projekt') => (
  <a href={href} onclick={() => false}>
    <div class={`thumbnail ${className}`} style={{ backgroundImage: `url(${image})` }} {...props}>
      <div class='overlay'>
        {svgAnimation
          ? <Spinner class='spinner' color={{ dash: color }} animation={{ inner: true, outer: !mobile }} id={id} />
          : (
            < div class='animation-fallback'>
              <Spinner class='spinner' animation={{ inner: false, outer: false }} color={{ dash: color }} id={id} />
            </div>
          )}

        <p style={{ lineHeight: '2rem', fontWeight: 600 }}>{subtitle}<br /> {child}
          <br /><br />
          <span style={{ fontWeight: 100 }}>{category}</span>
        </p>
      </div>
    </div>
  </a>
);

export default view;
