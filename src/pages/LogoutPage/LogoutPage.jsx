import { Link } from "react-router-dom";

export const LogoutPage = () => {
  return (
    <div class="ui centered card">
      <div class="content">
        <i
          class="check icon check-icon"
          style={{
            fontSize: "1.5rem",
            marginLeft: "47%",
            marginTop: "2rem",
            color: "green",
          }}
        ></i>
        <h3 class="ui center aligned header">
          You have been successfully logged out
        </h3>
        <Link
          to="/login"
          class="ui center aligned sub header"
          style={{ fontSize: "1rem", margin: "1rem" }}
        >
          Go to Login Page
        </Link>
      </div>
    </div>
  );
};
