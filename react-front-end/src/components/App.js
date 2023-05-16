import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FAQ from "./FAQ";
import Homepage from "./Homepage";
import AboutUs from "./AboutUs";
import "../css/index.css";

function App(props) {
  return (
    <div className="App">
    <Header />
    <main>
    	<Routes>
        	<Route path="/Homepage" element={<Homepage />} />
        	<Route path="/FAQ" element={<FAQ />} />
        	<Route path="/AboutUs" element={<AboutUs />} />
    	</Routes>
    </main>
    <Footer />
    </div>
  );
}

export default App;
