const view = ({ data: { project: { title, image, text } }, class: className = '', ...props }) => (
  <main key='details' class={`${className}`} {...props} >
    <h1>{title.toUpperCase()}</h1>
    <section class='detail-container'>
      <img class='detail-image' src={image} /> <p class='detail-text'>{text}</p>
    </section>
  </main>
);

export default view;
