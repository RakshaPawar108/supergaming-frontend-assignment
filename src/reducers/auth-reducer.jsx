const authReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INITIAL_STATE":
      return {
        ...state,
        user: action.payload.user,
        auth: action.payload.auth,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        auth: action.payload.auth,
      };

    case "LOGOUT":
      return {
        ...state,
        user: {},
        auth: {},
      };

    default:
      return state;
  }
};

export { authReducer };
