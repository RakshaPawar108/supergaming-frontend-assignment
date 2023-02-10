import { useState, useEffect } from "react";
import "./LoginForm.css";
import { provideAuth, refreshAccessToken } from "../../utils";
import { useAuth } from "../../context";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const LoginForm = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [expiresInSeconds, setExpiresInSeconds] = useState(0);
  const { authDispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await provideAuth(
        username,
        password,
        setUsername,
        setPassword
      );

      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("accessToken", response.data.auth.accessToken);
        localStorage.setItem(
          "expiresInSeconds",
          response.data.auth.expiresInSeconds
        );
        setAccessToken(response.data.auth.accessToken);
        setExpiresInSeconds(response.data.auth.expiresInSeconds);
        setRefreshToken(response.data.auth.refreshToken);
        console.log(accessToken);

        authDispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            user: response.data.user,
            auth: response.data.auth,
          },
        });

        toast.success("Login successful", {
          theme: "dark",
        });
        setIsLoggedIn(true);
        navigate("/");
        setUsername("");
        setPassword("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleRefreshAccessToken = async () => {
    try {
      const response = await refreshAccessToken(refreshToken);
      if (response.status === 200) {
        setRefreshToken(response.data.refreshToken);
        let accToken = localStorage.getItem("accessToken");
        accToken = response.data.accessToken;
        localStorage.setItem("accessToken", accToken);
        let expInSecs = localStorage.getItem("expiresInSeconds");
        expInSecs = response.data.expiresInSeconds;
        localStorage.setItem("expiresInSeconds", expInSecs);
        setAccessToken(response.data.accessToken);
        setExpiresInSeconds(response.data.expiresInSeconds);
        setRefreshToken(response.data.refreshToken);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (expiresInSeconds && refreshToken) {
        handleRefreshAccessToken();
        console.log(expiresInSeconds);
      }
    }, (expiresInSeconds - 60) * 1000); // Refresh access token 60 seconds before it expires
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="ui middle aligned centered card login-form">
      <div className="column">
        <form className="ui form">
          <div className="ui segment">
            <h2 className="ui centered header">
              <div className="content" style={{ fontFamily: "Poppins" }}>
                Login to your account
              </div>
            </h2>
            <div className="field login-field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="field login-field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="ui fluid blue submit button" onClick={handleLogin}>
              Login
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
