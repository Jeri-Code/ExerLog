import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./navigation/Header";
import Footer from "./navigation/Footer";
import Homepage from "./staticpages/Homepage";
import FAQ from "./staticpages/FAQ";
import AboutUs from "./staticpages/AboutUs";
import Login from "./staticpages/Login";
import Register from "./components/auth/Register";
import WeeklyPlanner from "./staticpages/WeeklyPlanner";
import Root from "./Root";
import { ToastContainer } from "react-toastify";

import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000";


class App extends Component {
  render() {
    return (
      <div className="App">
      <Root>
        <Header />
        <main>
        <ToastContainer hideProgressBar={true} newestOnTop={true} />
          <Switch>
          <Route path="/Homepage" component={Homepage} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/WeeklyPlanner" component={WeeklyPlanner} />
          </Switch>
        </main>
        <Footer />
        </Root>
      </div>
    );
  }
}

export default App;