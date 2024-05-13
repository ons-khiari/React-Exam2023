import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavigationBar() {
    const active = {
        fontWeight: "bold",
        textDecoration: "underline"
    };
    const wishlist = useSelector(state => state.wishlist.movies);
    const wishlistCount = wishlist.length;
    return (
        <Navbar bg="light" expand="lg" >
            <Container>
                <Navbar.Brand>MoviesDB</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link
                        as={NavLink}
                        to="movies"
                        style={({ isActive }) => (!isActive ? undefined : active)}
                    >
                        Movies
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        to="wishlist"
                        style={({ isActive }) => (!isActive ? undefined : active)}
                    >
                        WishList({wishlistCount})
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar
