const view = ({ class: className = '', ...props }) => (
  <div class={`hamburger ${className}`} {...props} />
);

export default view;