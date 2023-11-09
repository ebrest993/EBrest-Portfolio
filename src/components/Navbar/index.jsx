import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />
					<h1>
						Elliott Brest
					</h1>
				<NavMenu>
					<NavLink to="/aboutme" >
						About Me
					</NavLink>
					<NavLink to="/portfolio" >
						Portfolio
					</NavLink>
					<NavLink to="/contact" >
						Contact Me
					</NavLink>
					<NavLink to="/resume" >
						Resume
					</NavLink>
				</NavMenu>
				<NavBtn>
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
