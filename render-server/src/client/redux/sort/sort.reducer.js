const INITIAL_STATE = "";

const sortReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_SORT_TYPE":
      return action.payload;
    default:
      return state;
  }
};

export default sortReducer;
