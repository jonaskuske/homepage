const ColorPicker = props => (_, actions) => (
  <input
    type="color"
    aria-label="Select theme color for the site"
    tabindex={-1}
    onchange={({ target: { value } }) => {
      actions.theme.setColor(value)
      actions.theme.addColor(value)
    }}
    {...props}
  />
)

export default ColorPicker
