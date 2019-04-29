import { LoadingSpinner } from '@/components'

const Thumbnail = (
  { image, class: className = '', id, mobile, href = '#', color, fn = () => {}, ...props },
  child = 'Projekt',
) => (
  <a
    href={href}
    onclick={e => e.preventDefault()}
    onkeydown={e => {
      if (e.keyCode == 13 || e.keyCode == 32) {
        e.preventDefault()
        fn(e)
      }
    }}
  >
    <div
      class={`thumbnail ${className}`}
      style={{ backgroundImage: `url(${image})` }}
      onclick={fn}
      {...props}
    >
      <div class="overlay">
        <LoadingSpinner
          class="spinner"
          color={{ dash: color }}
          animation={{ inner: true, outer: !mobile }}
          id={id}
        />
        {child}
      </div>
    </div>
  </a>
)

export default Thumbnail
