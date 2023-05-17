import { NavLink } from "react-router-dom";

export const SignButtons = () => {
  return (
    <>
      <ul className="navbar-nav">
        <li className="nav-item m-1">
          <NavLink to={"/auth/signup"}>
            <a type="button" className="btn btn-outline-light signUp" href="#">
              Sign up
            </a>
          </NavLink>
          <NavLink to={"/auth/signin"}>
            <a type="button" className="btn btn-outline-light signIn" href="#">
              Sign in
            </a>
          </NavLink>
        </li>
      </ul>
    </>
  );
};
