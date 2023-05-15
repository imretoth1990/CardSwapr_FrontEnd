import { NavLink } from "react-router-dom";

export const DesktopNavbar = () => {
  let brandStyle = {
    height: "60px",
    display: "block",
    marginLeft: "33%",
    marginRight: "auto",
  };

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
        <img className="navbar-brand" src="src/Images/PublicImages/logo.png" style={brandStyle}></img>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item m-1">
            <a type="button" className="btn btn-outline-light" href="#">
              Sign in
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
