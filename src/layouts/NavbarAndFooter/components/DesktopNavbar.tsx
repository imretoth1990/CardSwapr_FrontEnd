import { NavLink } from "react-router-dom";
import { SignButtons } from "./SignButtons";
import Logo from "../../../Images/PublicImages/logo.png";
export const DesktopNavbar = () => {
  return (
    <div className="container-fluid d-none d-lg-block">
      {/* Desktop */}
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
        <img className="navbar-brand logoDesktop" src={Logo}></img>
        <SignButtons />
      </div>
    </div>
  );
};
