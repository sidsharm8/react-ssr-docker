const INITIAL_STATE = {
  species: [],
  gender: [],
  origin: [],
};
const selectedFiltersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_FILTER":
      return {
        ...state,
        [action.payload.filterType]: state[action.payload.filterType].concat([
          action.payload.value,
        ]),
      };
    case "REMOVE_FILTER":
      return {
        ...state,
        [action.payload.filterType]: state[action.payload.filterType].filter(
          (value) => value !== action.payload.value
        ),
      };
    default:
      return state;
  }
};

export default selectedFiltersReducer;
