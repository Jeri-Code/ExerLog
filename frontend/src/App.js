import React, { Component } from "react";
import { Route, Switch,  } from "react-router-dom"; // <--- remove BrowserRouter
import Register from "./components/auth/Register";

import Root from "./Root"; // <------------- new import
import { ToastContainer } from "react-toastify";
import axios from "axios";
import Login from "./components/login/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import requireAuth from "./utils/RequiredAuth";



if (window.location.origin === "http://localhost:3000") {
  axios.defaults.baseURL = "http://127.0.0.1:8000";
} else {
  axios.defaults.baseURL = window.location.origin;
}

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Root>
        <ToastContainer hideProgressBar={true} newestOnTop={true} />

          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={requireAuth(Dashboard)} />



          </Switch>
        </Root>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;