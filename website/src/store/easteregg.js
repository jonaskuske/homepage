let beforeEastereggColor = '';

export const eastereggState = {
  eastereggActive: false,
  eastereggInterval: false
};

export const eastereggActions = {
  toggleEasteregg: () => (state, actions) => {
    if (state.eastereggActive) {
      clearInterval(state.eastereggInterval);
      actions.setMetaTagColor(true);
      actions.setColor(beforeEastereggColor);
      return { eastereggActive: false };
    } else {
      beforeEastereggColor = state.themeColor;
      actions.setMetaTagColor(false);
      return {
        eastereggActive: true,
        eastereggInterval: setInterval(actions.setRandomColor, 200)
      };
    }
  }
};