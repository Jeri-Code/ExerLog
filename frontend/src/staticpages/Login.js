import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";

import axios from "axios";
import { setAxiosAuthToken } from "../utils/Utils";
import {
  Alert,
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      usernameError: "",
      passwordError: "",
      status: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLoginClick = () => {
    this.setState({
      usernameError: "",
      passwordError: "",
      status: ""
    });
  
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
  
    setAxiosAuthToken(""); // send request with empty token
    axios
      .post("/login/", userData) // Update the endpoint URL if needed
      .then(response => {
        this.setState({ status: "success" });
      })
      .catch(error => {
        if (error.response) {
          if (error.response.data.hasOwnProperty("username")) {
            this.setState({ usernameError: error.response.data["username"] });
          }
          if (error.response.data.hasOwnProperty("password")) {
            this.setState({ passwordError: error.response.data["password"] });
          }
          if (error.response.data.hasOwnProperty("detail")) {
            this.setState({ status: "error" });
          }
        } else {
          this.setState({ status: "error" });
        }
      });
  };  

  render() {
    let errorAlert = (
      <Alert variant="danger">
        <Alert.Heading>Login Failed</Alert.Heading>
        Please check your username and password and try again.
      </Alert>
    );

    let successAlert = (
      <Alert variant="success">
        <Alert.Heading>Login Successful</Alert.Heading>
        <p>You have successfully logged in!</p>
      </Alert>
    );

    const form = (
      <div className="login">
        <Form>
          <Form.Group controlId="usernameId">
            <Form.Label>Username</Form.Label>
            <Form.Control
              isInvalid={this.state.usernameError}
              type="text"
              name="username"
              placeholder="Enter your username"
              value={this.state.username}
              onChange={this.onChange}
            />
            <FormControl.Feedback type="invalid">
              {this.state.usernameError}
            </FormControl.Feedback>
          </Form.Group>

          <Form.Group controlId="passwordId">
            <Form.Label>Password</Form.Label>
            <Form.Control
              isInvalid={this.state.passwordError}
              type="password"
              name="password"
              placeholder="Enter your password"
              value={this.password}
              onChange={this.onChange}
            />
            <Form.Control.Feedback type="invalid">
              {this.state.passwordError}
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
        <Button color="primary" onClick={this.onLoginClick}>
          Log in
        </Button>
      </div>
    );

    let alert = "";
    if (this.state.status === "error") {
      alert = errorAlert;
    } else if (this.state.status === "success") {
      alert = successAlert;
    }

    return (
      <Container>
        <Row>
          <Col md="6" className="offset-md-3">
            <h1>Welcome to ExerLog</h1>
            {alert}
            {this.state.status !== "success" && form}
            <p className="register-link">
              Don't have an account? <Link to="/Register">Sign up</Link>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

Login.propTypes = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(withRouter(Login));
