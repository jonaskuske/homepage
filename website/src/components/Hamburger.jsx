const Hamburger = ({ class: className = '', fn, ...props }) => (
  <button class={`hamburger ${className}`} tabindex={0} onclick={fn} {...props} />
)

export default Hamburger
