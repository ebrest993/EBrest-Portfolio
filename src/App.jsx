import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import About from "./pages/about";
import Events from "./pages/portfolio";
import AnnualReport from "./pages/contact";
import Teams from "./pages/resume";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<About />} />
				<Route path="/aboutme" element={<About />} />
				<Route
					path="/portfolio"
					element={<Events />}
				/>
				<Route
					path="/contact"
					element={<AnnualReport />}
				/>
				<Route path="/resume" element={<Teams />} />
			</Routes>
		</Router>
	);
}

export default App;
