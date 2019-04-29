import { LoadingSpinner } from '@/components'

const LoadingPage = ({ data, ...props }) => {
  const { safeThemeColor } = data
  const className = 'loading-screen ' + props.class || ''

  return (
    <main {...props} class={className}>
      <LoadingSpinner
        class="main-spinner"
        fallbackClassOn="container"
        color={{ stroke: safeThemeColor }}
      />
    </main>
  )
}

export default LoadingPage
