import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <div className="signInAlign px-3 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
      <div className="container">
        <div className="row gx-lg-5 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-5 center border shadow-lg">
            <div className="card-body py-5 px-md-5">
              <div>
                <h2 className="formTitel">Sign In</h2>
              </div>
              <form>
                <div className="form-outline mb-4">
                  <input type="email" id="emailOrUsername" className="form-control" />
                  <label className="form-label" htmlFor="emailOrUsername">
                    Email address/Username
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="password" className="form-control" />
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                </div>

                <button type="submit" className="btn main-color btn-lg text-white mb-4">
                  Sign in
                </button>

                <p className="text-center text-muted mt-5 mb-0">
                  Not have an account?{" "}
                  <Link to={"/auth/signup"}>
                    <a className="makeBlue">
                      <u>Sign Up Here</u>
                    </a>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
