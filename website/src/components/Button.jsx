const style = {
  border: 'none',
  padding: '5px 15px',
  cursor: 'pointer',
  outline: 'none'
};

export default props => {
  const { text, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      style={style}
    >
      {text || 'Hier klicken'}
    </button>);
};