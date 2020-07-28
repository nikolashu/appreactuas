import React, { useState, useContext } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Button
} from 'reactstrap';
import { AuthContext } from '../App';

function MenuComp() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const { state, dispatch } = useContext(AuthContext)

    return (
        <div>
            <Navbar className="navbar-dark bg-dark" expand="md">
                <NavbarBrand href="/">CatholicShop.com offers over 20,000 religious gifts, all delivered with a virtual smile! Our top-sellers include:</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        
                    </Nav>
                    <NavbarText>
                        <Button color="defult"
                            onClick={() =>
                                dispatch({
                                    type: "LOGOUT"
                                })}>
                            {state.isAuthenticated && (
                                <NavLink>LOGOUT</NavLink>
                            )}
                        </Button>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default MenuComp
