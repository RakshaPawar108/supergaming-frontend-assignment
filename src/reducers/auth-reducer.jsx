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

    case "TOKEN_REFRESH":
      return {
        ...state,
        auth: {
          ...state.auth,
          accessToken: action.payload.auth.accessToken,
          refreshToken: action.payload.auth.refreshToken,
          expiresInSeconds: action.payload.auth.expiresInSeconds,
        },
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
