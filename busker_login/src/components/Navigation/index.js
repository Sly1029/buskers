import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import SignOutButton from "../SignOut";

const Navigation = () => (
  <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand"> Buskers Philly</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav item">
            <Link class="nav-link" to={ROUTES.SIGN_UP}>
              Sign Up
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={ROUTES.SIGN_IN}>
              Sign In
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={ROUTES.LANDING}>
              Landing
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={ROUTES.HOME}>
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={ROUTES.ACCOUNT}>
              Account
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={ROUTES.ADMIN}>
              Admin
            </Link>
          </li>
          <li class="nav-item">
            <SignOutButton />
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
