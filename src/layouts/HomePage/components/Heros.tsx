export const Heros = () => {
  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="row g-0 mt-5">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left"></div>
          </div>
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>What's your favourite card?</h1>
              <p className="lead">
                The CardSwapr team would love to know, which card do you want to see in our collections. We are also interested in cards, which you are ready to
                offer for a swap, so we can create an awesome library based on your preferences. Sign up and create your own collection, communicate with other
                players and search for the best rares!
              </p>
              <a className="btn main-color btn-lg text-white" href="#">
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Our collection is always changing!</h1>
              <p className="lead">
                Try to check in daily as our collection is always changing! We work nonstop to provide the most extensive card selection possible for our
                CardSwapr users! We are diligent about our card selection and searching for rare trading cards are always going to be our top priority.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="col-image-right"></div>
          </div>
        </div>
      </div>
      {/* Mobile Heros */}
      <div className="d-lg-none">
        <div className="container">
          <div className="m-2">
            <div className="col-image-left"></div>
            <div className="mt-2">
              <h1>What's your favourite card?</h1>
              <p className="lead">
                The CardSwapr team would love to know, which card do you want to see in our collections. We are also interested in cards, which you are ready to
                offer for a swap, so we can create an awesome library based on your preferences. Sign up and create your own collection, communicate with other
                players and search for the best rares!
              </p>
              <a className="btn main-color btn-lg text-white" href="#">
                Sign up
              </a>
            </div>
          </div>
          <div className="m-2">
            <div className="col-image-right"></div>
            <div className="mt-2">
              <h1>Our collection is always changing!</h1>
              <p className="lead">
                Try to check in daily as our collection is always changing! We work nonstop to provide the most extensive card selection possible for our
                CardSwapr users! We are diligent about our card selection and searching for rare trading cards are always going to be our top priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
