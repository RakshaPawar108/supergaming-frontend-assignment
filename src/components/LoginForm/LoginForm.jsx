import { useState } from "react";
import "./LoginForm.css";
import { provideAuth, refreshAccessToken } from "../../utils";
import { useAuth } from "../../context";
import { toast } from "react-toastify";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const { authDispatch } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await provideAuth(
        username,
        password,
        setUsername,
        setPassword
      );

      if (response.status === 200) {
        console.log(response.data.user);
        console.log(response.data.auth);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("auth", JSON.stringify(response.data.auth));
        // setRefreshToken();

        authDispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            user: response.data.user,
            token: response.data.token,
          },
        });

        toast.success("Login successful", {
          theme: "dark",
        });

        setUsername("");
        setPassword("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // const handleRefreshAccessToken = async () => {
  //   try {
  //     const response = await refreshAccessToken(refreshToken);
  //     if (response.status === 200) {
  //       setRefreshToken(response.data.refreshToken);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
            {/* {refreshToken && (
              <div
                className="ui fluid red submit button"
                onClick={handleRefreshAccessToken}
              >
                Refresh Access Token
              </div>
            )} */}
          </div>
        </form>
      </div>
    </div>
  );
};
