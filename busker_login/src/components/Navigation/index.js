//React and navigation imports
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import * as ROUTES from "../../constants/routes";
import SignOutButton from "../SignOut";

//Firebase and compose imports.
import { compose } from "recompose";
import { withFirebase } from "../Firebase";

//React Bootstrap and Frontend imports.
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";

class Navigation extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">CurbStyle</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link to={ROUTES.HOME}>Home</Nav.Link>
              <Nav.Link to={ROUTES.ABOUT}>About</Nav.Link>
              <Nav.Link to={ROUTES.MAP}>Map</Nav.Link>
              <Nav.Link to={ROUTES.EVENTS}>Events</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Username"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Image
              style={{ width: "40px", height: "40px" }}
              src="https://www.pinclipart.com/picdir/middle/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png"
              onClick={this.handleShow}
              responsive
            />
          </Navbar.Collapse>
        </Navbar>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Please SIGN IN using one of the following methods.
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form>
            <p>
              Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

// const Navigation = () => (
//   <Navbar bg="light" expand="lg">
//     <Navbar.Brand href="#home">CurbStyle</Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="mr-auto">
//         <Nav.Link to={ROUTES.HOME}>Home</Nav.Link>
//         <Nav.Link to={ROUTES.ABOUT}>About</Nav.Link>
//         <Nav.Link to={ROUTES.MAP}>Map</Nav.Link>
//         <Nav.Link to={ROUTES.EVENTS}>Events</Nav.Link>
//       </Nav>
//       <Form inline>
//         <FormControl type="text" placeholder="Username" className="mr-sm-2" />
//         <Button variant="outline-success">Search</Button>
//       </Form>
//       <Image
//         style={{ width: "40px", height: "40px" }}
//         src="https://www.pinclipart.com/picdir/middle/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png"
//         responsive
//       />
//     </Navbar.Collapse>
//   </Navbar>
// );

export default Navigation;
