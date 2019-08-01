import { LoadingSpinner } from '@/components'

const LoadingPage = ({ state, ...props }) => {
  const className = 'loading-screen ' + (props.class || '')

  return (
    <main {...props} class={className}>
      <LoadingSpinner
        class="main-spinner"
        fallbackClassOn="container"
        color={{ stroke: state.theme.safeThemeColor }}
      />
    </main>
  )
}

export default LoadingPage
