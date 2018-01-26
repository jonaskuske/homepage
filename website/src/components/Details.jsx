const view = ({ state: { title, image, text }, ...rest }) => {
  return (
    <div class='content-container'>
      <h1>{title.toUpperCase()}</h1>
      <div class='detail-container'>
        <div class='detail-image' style={{ backgroundImage: `url(${image})` }} /> <p>{text}</p>
      </div>
    </div>
  );
};

export default view;