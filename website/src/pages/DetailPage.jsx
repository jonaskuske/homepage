import { parseText } from '@/lib/helpers';
import { ImageClickable, ImageTextBlock } from '@/components';

const view = ({ data: { project: { title, image, text, showcase, blocks, footer }, mobile }, class: className = '', ...props }) => (
  <main key='details' class={`${className}`} {...props} >
    <h1>{title.toUpperCase()}</h1>
    <section class='detail-container'>
      <ImageClickable class='detail-image' mobile={mobile} src={showcase.image} />
      <p class='detail-text showcase textsquish-blocker'> {parseText(showcase.text)} </p>
      {blocks.map(({ image, text }, index) => {
        const mode = index % 2 === 0 ? 'left' : 'right';
        return <ImageTextBlock src={image} mode={mode} mobile={mobile}>{text}</ImageTextBlock>;
      })}
      {footer && <p class="detail-text textsquish-blocker"> {parseText(footer)} </p>}
    </section>
  </main>
);

export default view;
