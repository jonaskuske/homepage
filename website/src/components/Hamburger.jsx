const view = props => {
  const { class: className, ...rest } = props;
  return (
    <div {...rest} class={'hamburger ' + className} />
  );
};

export default view;