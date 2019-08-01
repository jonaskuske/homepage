import { isEven } from '@/lib/helpers'
import { ImageClickable, ImageTextBlock } from '@/components'

const DetailPage = ({ state, ...props }) => {
  const { title, showcase, blocks, footer } = state.projects.project
  const mobile = state.ui.useMobileLayout

  const ImageTextBlocks = blocks.map((block, index) => (
    <ImageTextBlock src={block.image} mode={isEven(index) ? 'left' : 'right'} mobile={mobile}>
      {block.text}
    </ImageTextBlock>
  ))
  const Footer = footer && <p class="detail-text textsquish-blocker" innerHTML={footer} />

  return (
    <main key={'details'} {...props}>
      <h1>{title}</h1>
      <section class="detail-container">
        <ImageClickable class="detail-image" mobile={mobile} src={showcase.image} />
        <p class="detail-text showcase textsquish-blocker" innerHTML={showcase.text} />
        {ImageTextBlocks}
        {Footer}
      </section>
    </main>
  )
}

export default DetailPage
