export const ACTIONS_TYPES = {
  FECH_USER: " FETCH_USER",
  FECH_USER_SUCCESS: " FETCH_USER_SUCCESS",
  FECH_USER_ERROR: " FETCH_USER_ERROR",
};

export const fetchUser = () => ({ type: ACTIONS_TYPES.FECH_USER });
export const fetchUserSeccess = (user) => ({
  type: ACTIONS_TYPES.FECH_USER_SUCCESS,
  user,
});
export const fetchUserError = () => ({ type: ACTIONS_TYPES.FECH_USER_ERROR });

export const fetchDate = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUser());

      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      const [user] = data.result;

      dispatch(fetchUserSeccess(user));
    } catch (error) {
      console.log(error.message);
      dispatch(fetchUserError());
    }
  };
};
