import { Navigate, Route, Routes } from "react-router-dom";
import { Header, LoginForm } from "./components";
import { ToastContainer } from "react-toastify";
import { Home, LogoutPage, UnitDetails } from "./pages";
import { useEffect, useState } from "react";
import { useAuth } from "./context";
import { refreshAccessToken } from "./utils";
import "react-toastify/dist/ReactToastify.css";
import "semantic-ui-css/semantic.min.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") || false
  );
  const { authState, authDispatch } = useAuth();

  const handleRefreshAccessToken = async () => {
    try {
      if (
        !authState.auth?.accessToken ||
        Date.now() >= authState.auth.expiresInSeconds * 1000
      ) {
        const response = await refreshAccessToken(authState.auth.refreshToken);
        if (response?.status === 200) {
          let authData = JSON.parse(localStorage.getItem("auth"));
          authData.accessToken = response.data.accessToken;
          authData.refreshToken = response.data.refreshToken;
          authData.expiresInSeconds = response.data.expiresInSeconds;

          localStorage.setItem("auth", JSON.stringify(authData));

          // update auth state in hook
          authDispatch({
            type: "TOKEN_REFRESH",
            payload: {
              auth: {
                accessToken: response.data.accessToken,
                refreshToken: response.data.refreshToken,
                expiresInSeconds: response.data.expiresInSeconds,
              },
            },
          });
        }
      }

      return () => clearTimeout(timeoutId);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let timeoutId = null;
    if (authState.auth?.accessToken) {
      timeoutId = setTimeout(
        handleRefreshAccessToken,
        (authState.auth.expiresInSeconds - 60) * 1000
      );
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [authState.auth]);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div className="App">
      <Header
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
      />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={<LoginForm setIsLoggedIn={setIsLoggedIn} />}
        />

        <Route path="/logout" element={<LogoutPage />} />

        <Route
          path="/unit/:unitId"
          element={isLoggedIn ? <UnitDetails /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
