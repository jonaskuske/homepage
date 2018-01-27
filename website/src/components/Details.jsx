const view = ({ state: { title, image, text }, class: className, ...props }) => (
  <div key='details' class={`content-container ${className ? className : ''}`} {...props} >
    <h1>{title.toUpperCase()}</h1>
    <div class='detail-container'>
      <div class='detail-image' style={{ backgroundImage: `url(${image})` }} /> <p>{text}</p>
    </div>
  </div>
);

export default view;