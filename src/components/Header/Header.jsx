import { NavLink } from "react-router-dom";
import { useAuth } from "../../context";

export const Header = () => {
  const {
    authState: { user },
  } = useAuth();
  return (
    <div className="ui secondary pointing menu">
      <NavLink to="/" className="item">
        Home
      </NavLink>
      <div className="right menu">
        {!user && (
          <NavLink to="/login" className="ui item">
            <i class="sign in alternate icon"></i>
            Login
          </NavLink>
        )}
        {user && (
          <>
            <div className="ui item">
              <i class="user icon"></i>
              Hello {user.firstname} {user.lastname}
            </div>
            <NavLink to="/logout" className="ui item">
              <i class="sign out alternate icon"></i>
              Logout
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};
