import React, { Component } from "react";
import { Link } from "react-router-dom";
import fire from "./config/fire";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
        var errorMessage1 = error.message;
        alert(errorMessage1);
      });
  }

  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(function(user) {
        fire.auth
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .catch(error => {
            var errorMessage = error.message;
            alert(errorMessage);
          });
      })
      .catch(error => {
        console.log(error);
        var errorMessage = error.message;
        alert(errorMessage);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="col-md-6">
        <form id="signup form">
          <div class="form-group">
            <label for="FirstName1">
              <b>First Name</b>
            </label>
            <input
              value={this.state.firstname}
              onChange={this.handleChange}
              type="firstname"
              name="firstname"
              class="form-control"
              id="firstname"
              placeholder="Enter First Name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">
              <b>Email Address</b>
            </label>

            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
            />
            <large id="emailHelp" class="form-text">
              <b>***We'll never share your email blah blah*** </b>
            </large>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">
              <b>Password</b>
            </label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" onClick={this.login} class="btn btn-primary">
            Login
          </button>
          <button
            onClick={this.signup}
            style={{ marginLeft: "25px" }}
            className="btn btn-success"
          >
            Signup
          </button>
        </form>
      </div>
    );
  }
}
export default Login;