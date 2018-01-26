export default (props, children) => {
  const { class: className, ...otherProps } = props;
  return (
    <button {...otherProps} class={'btn ' + className}>
      {children || 'Hier klicken'}
    </button>);
};