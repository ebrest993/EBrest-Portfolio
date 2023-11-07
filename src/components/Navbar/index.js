// components/Navbar/index.js

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
					<NavLink to="/portfolio" activeStyle>
						Portfolio
					</NavLink>
					<NavLink to="/contact" activeStyle>
						Contact Me
					</NavLink>
					<NavLink to="/resume" activeStyle>
						Resume
					</NavLink>
					{/* <NavLink to="/blogs" activeStyle>
						Blogs
					</NavLink>
					<NavLink to="/sign-up" activeStyle>
						Sign Up
					</NavLink> */}
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				<NavBtn>
					{/* <NavBtnLink to="/signin">
						Sign In
					</NavBtnLink> */}
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
