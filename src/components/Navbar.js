import React from 'react';
import { Navbar as Nav, NavbarBrand } from 'reactstrap';
import '../assets/Navbar.css';

const Navbar = () => {
  return (
    <Nav className="nav">
      <NavbarBrand href="/pokemons/1">
        <img
          src={process.env.PUBLIC_URL + '/logo_pokemon.jpg'}
          alt="Pokemon_GO"
          className="logo"
        />
      </NavbarBrand>
    </Nav>
  );
};
export default Navbar;
