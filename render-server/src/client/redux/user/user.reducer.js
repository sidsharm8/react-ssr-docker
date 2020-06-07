const INITIAL_STATE = {
  current_user: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER_FAIL":
      return {
        ...state,
        current_user: null
      }
    case "SET_CURRENT_USER_SUCCESS":
      return {
        ...state,      
        current_user: action.payload
      }
    default:
      return state;
  }
}

export default userReducer;
