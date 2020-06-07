const INITIAL_STATE = "";
const searchTextReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_SEARCH_TEXT":
      return action.payload;
    default:
      return state;
  }
};

export default searchTextReducer;
