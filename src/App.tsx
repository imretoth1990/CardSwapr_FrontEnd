import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { HomePage } from "./layouts/HomePage/HomePage";
import { SearchPage } from "./layouts/HomePage/components/SearchPage";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};
