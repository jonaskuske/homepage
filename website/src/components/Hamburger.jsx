const view = ({ class: className, ...props }) => {
  return (
    <div {...props} class={'hamburger ' + className} />
  );
};

export default view;