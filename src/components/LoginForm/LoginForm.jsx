import "./LoginForm.css";

export const LoginForm = () => {
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
                <input type="text" name="username" placeholder="Username" />
              </div>
            </div>
            <div className="field login-field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input type="password" name="password" placeholder="Password" />
              </div>
            </div>
            <div className="ui fluid blue submit button">Login</div>
          </div>
        </form>
      </div>
    </div>
  );
};
