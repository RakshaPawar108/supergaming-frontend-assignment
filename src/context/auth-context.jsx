import { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer } from "../reducers";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {
    user: {},
    token: {},
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    authDispatch({
      type: "FETCH_INITIAL_STATE",
      payload: { user: user, token: token },
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
