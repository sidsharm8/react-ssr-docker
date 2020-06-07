const INITIAL_STATE = {
  list: [],
  nextPage: 1,
  loading: false
};

const charactersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_CHARACTERS_START":
    return {
      ...state,
      loading: true
    };
    case "SET_CHARACTERS":
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case "SET_NEXT_PAGE":
      return {
        ...state,
        nextPage: action.payload
      };
    default:
      return state;
  }
}

export default charactersReducer;
