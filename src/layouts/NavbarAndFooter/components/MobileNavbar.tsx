import { NavLink } from "react-router-dom";

export const MobileNavbar = () => {
  let brandStyle = {
    height: "60px",
    display: "block",
    marginLeft: "45%",
    marginRight: "auto",
  };

  return (
    <div className="container-fluid d-lg-none mt-3">
      {/* Mobile */}
      <img className="navbar-brand" src="src/Images/PublicImages/logo.png" style={brandStyle}></img>
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
