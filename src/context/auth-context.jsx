import { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer } from "../reducers";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {
    user: {},
    auth: {},
  });

  useEffect(() => {
    const auth =JSON.parse(localStorage.getItem("auth"));
    const user = JSON.parse(localStorage.getItem("user"));

    authDispatch({
      type: "FETCH_INITIAL_STATE",
      payload: { user: user, auth: auth },
    });

  }, []);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
