const authReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INITIAL_STATE":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    case "LOGOUT":
      return {
        ...state,
        user: {},
        token: {},
      };

    default:
      return state;
  }
};

export { authReducer };
