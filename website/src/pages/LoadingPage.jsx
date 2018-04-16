import { svgAnimation } from '@/lib/browser-support';
import { LoadingSpinner } from '@/components';

const view = ({ data: { safeThemeColor }, class: className = '', ...props }) => (
  <main class={`${className} loading-screen `} {...props}>
    {svgAnimation
      ? < LoadingSpinner class='main-spinner' color={{ stroke: safeThemeColor }} />
      : (
        < div class='animation-fallback main-spinner'>
          <LoadingSpinner animation={{ inner: false, outer: false }} color={{ stroke: safeThemeColor }} />
        </div>)
    }
  </main>
);

export default view;
