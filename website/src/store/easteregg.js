let beforeEastereggColor = ''
const addPartyColors = (() => {
  let added = false

  return actions => {
    if (added) return
    actions.addColor('#000000')
    actions.addColor('#006200')
    actions.addColor('#ff3edd')
    actions.addColor('#f3ff0d')
    actions.addColor('#dd0000')
    actions.addColor('#ffe42b')
    added = true
  }
})()

export const eastereggState = {
  eastereggActive: false,
  eastereggInterval: false,
}

export const eastereggActions = {
  toggleEasteregg: () => (state, actions) => {
    addPartyColors(actions)
    if (state.eastereggActive) {
      clearInterval(state.eastereggInterval)
      actions.setMetaTagColor(true)
      actions.setColor(beforeEastereggColor)
      return { eastereggActive: false }
    } else {
      beforeEastereggColor = state.themeColor
      actions.setMetaTagColor(false)
      return {
        eastereggActive: true,
        eastereggInterval: setInterval(actions.setRandomColor, 400),
      }
    }
  },
}
