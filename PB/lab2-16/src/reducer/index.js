import { ACTIONS_TYPES } from "../actions";

const initState = {
  user: null,
  isLoading: true,
  isError: false,
};

const reducer = (state = initState, action) => {
  switch (action.typ) {
    case ACTIONS_TYPES.FECH_USER:
      return { ...initState };
    case ACTIONS_TYPES.FECH_USER_SUCCESS:
      return { user: action.user, isLoading: false, isError: false };
    case ACTIONS_TYPES.FECH_USER_ERROR:
      return { user: null, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default reducer;
