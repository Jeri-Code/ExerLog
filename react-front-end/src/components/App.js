import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FAQ from "./FAQ";
import Homepage from "./Homepage";
import AboutUs from "./AboutUs";
import Login from "./Login";
import Registration from "./Registration";
import WeeklyPlanner from "./WeeklyPlanner";
import { ToastContainer } from "react-toastify";
import axios from "axios";

import "../css/index.css";

axios.defaults.baseURL = "http://127.0.0.1:8000";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ToastContainer hideProgressBar newestOnTop />
        <Switch>
          <Route path="/Homepage" component={Homepage} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/Login" component={Login} />
          <Route path="/Registration" component={Registration} />
          <Route path="/WeeklyPlanner" component={WeeklyPlanner} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
