const style = {
  border: 'none',
  padding: '5px 15px',
  cursor: 'pointer',
  outline: 'none'
};

export default (props, children) => {
  return (
    <button {...props} style={style}>
      {children || 'Hier klicken'}
    </button>);
};