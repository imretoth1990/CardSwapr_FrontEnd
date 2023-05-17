export const SignUp = () => {
  return (
    <div className="px-5 py-1.5 px-md-5 text-center text-lg-start" style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
      <div className="container">
        <div className="row gx-lg-5 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-5">
            <h1 className="my-5 display-3 fw-bold ls-tight">
              The best place <br />
              <span style={{ color: "#0e76a8" }}>for collectors</span>
            </h1>
            <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
              As a trading card collector, you will find thousands of other trading card enthusiast from every corner of the globe. You can communicate with
              others, search for the best rares, browse in our rich collection and swap cards if you have some to offer. We wish you good luck in your journey
              to the world of collectors!
            </p>
          </div>

          <div className="col-lg-4 mb-5 mb-lg-5 border shadow-lg" style={{ maxWidth: "fit-content", marginTop: "2%", marginLeft: "auto", marginRight: "auto" }}>
            <div className="card-body py-5 px-md-5">
              <div>
                <h2 className="formTitel">Sign Up</h2>
              </div>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="firstName" className="form-control" />
                      <label className="form-label" htmlFor="firstName">
                        First name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="lastName" className="form-control" />
                      <label className="form-label" htmlFor="lastName">
                        Last name
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="username" className="form-control" />
                  <label className="form-label" htmlFor="username">
                    Username
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="emailAdress" className="form-control" />
                  <label className="form-label" htmlFor="emailAdress">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="password" className="form-control" />
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                </div>

                <button type="submit" className="btn main-color btn-lg text-white mb-4">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
