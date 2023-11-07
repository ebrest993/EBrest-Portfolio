import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Events from "./pages/portfolio";
import AnnualReport from "./pages/contact";
import Teams from "./pages/resume";
// import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
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
				{/* <Route path="/resume" element={<Blogs />} />
				<Route
					path="/sign-up"
					element={<SignUp />}
				/> */}
			</Routes>
		</Router>
	);
}

export default App;
