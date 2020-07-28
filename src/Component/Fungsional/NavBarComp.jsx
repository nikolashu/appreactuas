import React, { useState, usentext } from 'react';
import { Collapse, Row, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Button } from 'reactstrap';

import { NavLink } from 'react-router-dom';

const NavBarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);



    return (
        <div>
            <Navbar className="navbar-dark bg-dark" expand="md">
                <NavbarBrand href="/">Welcome to CatholicShop.com</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                     
                        <NavItem>
                            <NavLink to="/homepage" className="nav-link">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/mahasiswa" className="nav-link">Items</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/produk" className="nav-link">Produk</NavLink>
                        </NavItem>
                    </Nav>

                   
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBarComp