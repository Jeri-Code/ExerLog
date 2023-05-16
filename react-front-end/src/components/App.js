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
			<header className="App-header">
				<main>
					<Header />
					<Routes>
						<Route index path="/Homepage" element={<Homepage />} />
						<Route index path="/FAQ" element={<FAQ />} />
						<Route index path="/AboutUs" element={<AboutUs />} />
					</Routes>
					<Footer />
				</main>
			</header>
		</div>
	);
}

export default App;
