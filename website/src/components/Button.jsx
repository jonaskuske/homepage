export default ({ class: className, ...props }, children) => {
  return (
    <button {...props} class={'btn ' + (className ? className : '')}>
      {children || 'Hier klicken'}
    </button>);
};