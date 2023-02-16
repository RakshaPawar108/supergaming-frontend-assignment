import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import { logout } from "../../utils";
import { toast } from "react-toastify";

export const Header = ({
  isLoggedIn,
  setIsLoggedIn,
}) => {
  const {
    authState: { user },
    authDispatch,
  } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await logout();
      if (response?.status === 202) {
        setIsLoggedIn(false);

        authDispatch({
          type: "LOGOUT",
          payload: {},
        });

        toast.success("Logged out successfully!", {
          theme: "dark",
        });

        localStorage.removeItem("user");
        localStorage.removeItem("auth");
        localStorage.removeItem("isLoggedIn");
        navigate("/logout");
      }
    } catch (err) {
      toast.error(err.message, {
        theme: "dark",
      });
    }
  };
  return (
    <div className="ui secondary pointing menu">
      <div
        className="header"
        style={{
          display: "flex",
          alignItems: "center",
          padding: "1rem",
          fontSize: "1.2rem",
          fontWeight: "bold",
          fontFamily: "Poppins",
        }}
      >
        INDUS GAME DASHBOARD
      </div>

      <NavLink to="/" className="item">
        Home
      </NavLink>
      <div className="right menu">
        {!isLoggedIn && (
          <NavLink to="/login" className="ui item">
            <i className="sign in alternate icon"></i>
            Login
          </NavLink>
        )}
        {isLoggedIn && user && (
          <>
            <div className="ui item">
              <i className="user icon"></i>
              Hello {user.firstname} {user.lastname}
            </div>
            <a className="ui item" onClick={handleLogout}>
              <i className="sign out alternate icon"></i>
              Logout
            </a>
          </>
        )}
      </div>
    </div>
  );
};
