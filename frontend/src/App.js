import React, { Component } from "react";
import { Route, Switch } from "react-router-dom"; // <--- remove BrowserRouter
import Register from "./components/auth/Register";
import Root from "./Root"; // <------------- new import
import { ToastContainer } from "react-toastify";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000";


class App extends Component {
  render() {
    return (
      <div>
        <Root>
        <ToastContainer hideProgressBar={true} newestOnTop={true} />

          <Switch>
            <Route path="/register" component={Register} />
          </Switch>
        </Root>
      </div>
    );
  }
}

export default App;