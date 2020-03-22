export const productReducer = (state, action) => {
  switch (action.type) {
    case 'setProduct':
      return [
        {
          ...action.product,
          selectedOption: action.product.options[0],
          selectedAlternative: action.product.options[0].alternatives[0]
        }
      ];
    case 'setNumber':
      const selectedOption = state[0].options.filter(
        item => item.value1 == action.value
      )[0];

      return [
        {
          ...state[0],
          selectedOption: selectedOption,
          selectedAlternative: selectedOption.alternatives[0]
        }
      ];
    case 'setAlternative':
      const selectedAlternative = state[0].selectedOption.alternatives.filter(
        item => item.id == action.value
      )[0];

      return [{ ...state[0], selectedAlternative: selectedAlternative }];
    default:
      return state;
  }
};
