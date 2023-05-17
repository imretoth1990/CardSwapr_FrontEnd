import { NavLink } from "react-router-dom";
import { SignButtons } from "./SignButtons";

export const MobileNavbar = () => {
  return (
    <div className="container-fluid d-lg-none mt-3">
      {/* Mobile */}
      <img className="navbar-brand logoMobile" src="src/Images/PublicImages/logo.png"></img>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle Navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/searchCards">
              Search Cards
            </NavLink>
          </li>
        </ul>
        <SignButtons />
      </div>
    </div>
  );
};
