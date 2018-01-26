export default ({ class: className, ...props }, children) => (
  <button {...props} class={'btn ' + (className || '')}>
    {children || 'Hier klicken'}
  </button>
);