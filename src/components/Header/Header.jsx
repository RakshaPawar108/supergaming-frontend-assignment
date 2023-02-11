import { NavLink } from "react-router-dom";
import { useAuth } from "../../context";
import { logout } from "../../utils";
import { toast } from "react-toastify";
import { useState } from "react";

export const Header = () => {
  // const [isLoggedOut, setIsLoggedOut] = useState(false);
  const {
    authState: { user },
    authDispatch,
  } = useAuth();

  const handleLogout = async () => {
    try {
      const response = await logout();
      if (response.status === 202) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("expiresInSeconds");
        localStorage.removeItem("user");

        authDispatch({
          type: "LOGOUT",
          payload: {},
        });

        toast.success("Logged out successfully!", {
          theme: "dark",
        });

        // setIsLoggedOut(true);
      }
    } catch (err) {
      toast.error(err.message, {
        theme: "dark",
      });
    }
  };
  return (
    <div className="ui secondary pointing menu">
      <NavLink to="/" className="item">
        Home
      </NavLink>
      <div className="right menu">
        {!user && (
          <NavLink to="/login" className="ui item">
            <i className="sign in alternate icon"></i>
            Login
          </NavLink>
        )}
        {user && (
          <>
            <div className="ui item">
              <i className="user icon"></i>
              Hello {user.firstname} {user.lastname}
            </div>
            <NavLink to="/logout" className="ui item" onClick={handleLogout}>
              <i className="sign out alternate icon"></i>
              Logout
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};
