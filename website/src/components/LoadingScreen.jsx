import Spinner from '@@/LoadingSpinner';
import { svgAnimation } from '@/lib/browser-support';

const view = ({ data: { themeColor }, class: className = '', ...props }) => (
  <main class={`${className} loading-screen `} {...props}>
    {svgAnimation
      ? < Spinner class='main-spinner' color={{ stroke: themeColor }} />
      : (
        < div class='animation-fallback main-spinner'>
          <Spinner animation={{ inner: false, outer: false }} color={{ stroke: themeColor }} />
        </div>)
    }
  </main>
);

export default view;
