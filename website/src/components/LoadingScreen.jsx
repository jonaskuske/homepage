import Spinner from '@@/LoadingSpinner';
import { svgAnimation } from '@/lib/browser-support';

const view = ({ data: { safeThemeColor }, class: className = '', ...props }) => (
  <main class={`${className} loading-screen `} {...props}>
    {svgAnimation
      ? < Spinner class='main-spinner' color={{ stroke: safeThemeColor }} />
      : (
        < div class='animation-fallback main-spinner'>
          <Spinner animation={{ inner: false, outer: false }} color={{ stroke: safeThemeColor }} />
        </div>)
    }
  </main>
);

export default view;
