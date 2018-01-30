export default ({ class: className = '', ...props }) => (
  <div {...props} class={`hamburger ${className}`} />
);