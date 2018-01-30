const view = ({ state: { page, project: { title, image, text } }, class: className, ...props }) => (
  <div key='details' data-page={page} class={`content-container ${className ? className : ''}`} {...props} >
    <h1>{title.toUpperCase()}</h1>
    <div class='detail-container'>
      <img class='detail-image' src={image} /> <p class='detail-text'>{text}</p>
    </div>
  </div>
);

export default view;
