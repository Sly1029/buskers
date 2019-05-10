import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image';
import ReactDOM from "react-dom";


import * as ROUTES from "../../constants/routes";
import SignOutButton from "../SignOut";



const Navigation = () => (
  <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand">CurbStyle </a>
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
            <Link class="nav-link" to={ROUTES.ABOUT}>
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={ROUTES.MAP}>
              Map
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={ROUTES.EVENTS}>
              Events
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <Form inline>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="addon">@</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Search"
        aria-label="Username"
        aria-describedby="addon"
        />
    </InputGroup>
    </Form>
    <Image style={{width: '40px', height: '40px'}} src="https://www.pinclipart.com/picdir/middle/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png" responsive/>
    </nav>
);





export default Navigation;
