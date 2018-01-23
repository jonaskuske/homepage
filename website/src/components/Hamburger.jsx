const view = props => {
  const { style, className, ...rest } = props;
  return (
    <div {...rest} style={{ position: 'relative', ...style }} class={'hamburger ' + className} />
  );
};

export default view;