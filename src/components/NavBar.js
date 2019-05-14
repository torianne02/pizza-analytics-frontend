import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap';

const NavBar = () => {
  return (
    <Navbar>
      <NavbarBrand href="/" tag={Link}>Pizza Analytics</NavbarBrand>
      <Nav className="nav">
        <NavItem>
          <NavLink tag={Link} to="/name-search">Search Names</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/people">All Consumers</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default NavBar
