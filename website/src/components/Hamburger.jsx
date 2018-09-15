import { withBlur } from '@/lib/helpers';

const view = ({ class: className = '', fn, ...props }) => (
  <div
    class={`hamburger ${className}`}
    tabindex={0}
    onclick={withBlur(fn)}
    onkeydown={e => {
      if (e.keyCode === 13 || e.keyCode === 32) {
        e.preventDefault();
        fn(e);
      }
    }}
    {...props}
  />
);

export default view;