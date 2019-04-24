import React, { Component } from "react";
import fire from "./config/fire";

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div className="col-md-6">
        <h1>This is the next page after Login</h1>
        <button class="btn btn-primary" onClick={this.logout}>
          Logout
        </button>
      </div>
    );
  }
}

export default Home;
