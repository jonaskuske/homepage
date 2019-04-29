import { parseText, isEven } from '@/lib/helpers'
import { ImageClickable, ImageTextBlock } from '@/components'

const DetailPage = ({ data, ...props }) => {
  const { project, mobile } = data
  const { title, showcase, blocks, footer } = project

  const ImageTextBlocks = blocks.map((block, index) => (
    <ImageTextBlock src={block.image} mode={isEven(index) ? 'left' : 'right'} mobile={mobile}>
      {block.text}
    </ImageTextBlock>
  ))
  const Footer = footer && <p class="detail-text textsquish-blocker"> {parseText(footer)} </p>

  return (
    <main key={'details' + title} {...props}>
      <h1>{title}</h1>
      <section class="detail-container">
        <ImageClickable class="detail-image" mobile={mobile} src={showcase.image} />
        <p class="detail-text showcase textsquish-blocker"> {parseText(showcase.text)} </p>
        {ImageTextBlocks}
        {Footer}
      </section>
    </main>
  )
}

export default DetailPage
