const view = (props, children) => (
  <button {...props}>
    {children || 'Hier klicken'}
  </button>
);

export default view;
