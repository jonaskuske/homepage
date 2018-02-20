import ImageText from '@@/ImageTextBlock';
import { parseText } from '@/lib/helpers';

const view = ({ data: { project: { title, image, text, showcase, blocks, footer }, page }, class: className = '', ...props }) => (
  <main key='details' class={`${className}`} {...props} >
    <h1>{title.toUpperCase()}</h1>
    <section class='detail-container'>
      <img class='detail-image' src={showcase.image} />
      <p class='detail-text showcase'> {parseText(showcase.text)} </p>
      {blocks.map(({ image, text }, index) => {
        const mode = index % 2 === 0 ? 'left' : 'right';
        return <ImageText src={image} mode={mode}>{text}</ImageText>;
      })}
      {footer && <p class="detail-text"> {parseText(footer)} </p>}
    </section>
  </main>
);

export default view;
