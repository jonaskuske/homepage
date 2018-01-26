export default ({ class: className, ...props }, children) => {
  return (
    <button {...props} class={'btn ' + className}>
      {children || 'Hier klicken'}
    </button>);
};