import { svgAnimation as supportsSvgAnimation } from '@/lib/browser-support'

const cssAnimation = 'spin 1.6s linear infinite'
const animationProps = { inner: true, outer: true }

const LoadingSpinnerBase = ({ id = '', color = {}, animation = animationProps, ...props }) => {
  const { dash = '#f0f0f0', stroke = '#f0f0f0' } = color

  const outerAnimation = animation.outer ? cssAnimation : ''
  const innerAnimation = animation.inner ? `${cssAnimation} reverse -0.2s` : ''

  return (
    <svg viewBox="0 0 120 120" fill="transparent" {...props}>
      <circle
        r={42}
        cx={60}
        cy={60}
        fill={'transparent'}
        stroke={dash}
        stroke-width={6}
        stroke-dasharray="2 9.5"
        style={{ animation: outerAnimation, transformOrigin: '60px 60px' }}
      />
      <linearGradient id={`half-circle${id}`}>
        <stop offset="0%" stop-opacity="0" />
        <stop offset="49.99%" stop-opacity="0" />
        <stop offset="50%" stop-color={stroke} />
        <stop offset="100%" stop-color={stroke} />
      </linearGradient>
      <circle
        r={36}
        cx={60}
        cy={60}
        fill={'transparent'}
        stroke={`url(#half-circle${id})`}
        stroke-width="2"
        style={{ animation: innerAnimation, transformOrigin: '60px 60px' }}
      />
    </svg>
  )
}

const LoadingSpinner = ({ fallbackClassOn, ...props }) => {
  if (supportsSvgAnimation) return <LoadingSpinnerBase {...props} />

  let fallbackProps = props
  let containerClassName = 'animation-fallback '

  if (fallbackClassOn === 'container' || fallbackClassOn === 'both') {
    containerClassName += props.class || ''
  }
  if (fallbackClassOn === 'container') {
    fallbackProps = { ...props, class: '' }
  }

  return (
    <div class={containerClassName}>
      <LoadingSpinnerBase {...fallbackProps} animation={{ inner: false, outer: false }} />
    </div>
  )
}

export default LoadingSpinner
