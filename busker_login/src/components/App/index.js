import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home/HomePage";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import About from "../About";
import Events from "../Events";
import Map from "../Map";
import MyCarousel from "../Navigation/Carousel";
import HomeJumbotron from "../Navigation/Jumbotron";

import * as ROUTES from "../../constants/routes";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
        </div>
        <hr />
        <div>
          <MyCarousel />
        </div>
        <hr />
        <div>
          <HomeJumbotron />
        </div>
        <hr />
        <div class="container fluid">
          <HomePage />

          <hr />

          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          <Route path={ROUTES.ABOUT} component={About} />
          <Route path={ROUTES.MAP} component={Map} />
          <Route path={ROUTES.EVENTS} component={Events} />
        </div>
      </Router>
    );
  }
}

export default App;
