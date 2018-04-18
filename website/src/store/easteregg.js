export const eastereggState = {
  eastereggActive: false,
  eastereggInterval: false
};

export const eastereggActions = {
  toggleEasteregg: () => (state, actions) => {
    if (state.eastereggActive) {
      clearInterval(state.eastereggInterval);
      return { eastereggActive: false };
    } else {
      return {
        eastereggActive: true,
        eastereggInterval: setInterval(actions.setRandomColor, 200)
      };
    }
  }
};