import Spinner from '@@/LoadingSpinner';
import { svgAnimation } from '@/lib/browser-support';

const view = ({ data: { color }, class: className = '', ...props }) => (
  <main class={`${className} loading-screen `} {...props}>
    {svgAnimation
      ? < Spinner class='main-spinner' color={{ stroke: color }} />
      : (
        < div class='animation-fallback main-spinner'>
          <Spinner animation={{ inner: false, outer: false }} color={{ stroke: color }} />
        </div>)
    }
  </main>
);

export default view;
