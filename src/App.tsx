import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { HomePage } from "./layouts/HomePage/HomePage";
import { SearchCards } from "./layouts/HomePage/components/SearchCards";
import { SignUp } from "./layouts/AuthPages/components/SignUp";
import { SignIn } from "./layouts/AuthPages/components/SignIn";

export const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
      <Navbar />
      <div className="flex-grow-1">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/searchCards">
            <SearchCards />
          </Route>
          <Route path="/auth/signup">
            <SignUp />
          </Route>
          <Route path="/auth/signin">
            <SignIn />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
};
