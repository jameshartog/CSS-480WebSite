// Filename - "./components/Navbar.js
 
import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/things-to-read" activeStyle>
                        Things to Read
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;