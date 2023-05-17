import { Link } from "react-router-dom";

export const WantedServices = () => {
  return (
    <div className="container my-5">
      <div className="row p-4 align-items-center border shadow-lg">
        <div className="col-lg-7 p-3">
          <h1 className="display-4 fw-bold">Can't find what you are looking for?</h1>
          <p className="lead">If you cannot find what you are looking for, create an advertisement or send our admin's a personal message!</p>
          <div className="d-grid gap-2 justify-content-md-start mb-4 mb-lg-3">
            <Link to={"/auth/signup"}>
              <a className="btn main-color btn-lg text-white" href="#">
                Sign up
              </a>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 shadow-lg lost-image"></div>
      </div>
    </div>
  );
};
