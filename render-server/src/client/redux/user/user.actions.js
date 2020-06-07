const setCurrentUserSuccess = (user) => ({
  type: "SET_CURRENT_USER_SUCCESS",
  payload: user,
});
const setCurrentUserFail = () => ({
  type: "SET_CURRENT_USER_FAIL"
});
const setCurrentUserStart = () => ({
  type: "SET_CURRENT_USER_START"
});

const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get("/auth/current_user");
  if(res.data.id){
    dispatch(setCurrentUserSuccess(res.data));
  }else{
    dispatch(setCurrentUserFail());
  }

}

export default fetchCurrentUser;
