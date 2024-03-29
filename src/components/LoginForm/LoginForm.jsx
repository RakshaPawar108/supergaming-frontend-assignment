import { useState } from "react";
import "./LoginForm.css";
import { provideAuth } from "../../utils";
import { useAuth } from "../../context";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const LoginForm = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
        localStorage.setItem("auth", JSON.stringify(response.data.auth));

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
