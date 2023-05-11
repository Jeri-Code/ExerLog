import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import "../css/index.css";

function App(props) {
	return (
		<div className="App">
			<header className="App-header">
				<main>
					<Header />
					<Routes>
						<Route index path="/Homepage" element={<Homepage />} />
					</Routes>
					<Footer />
				</main>
			</header>
		</div>
	);
}

export default App;
