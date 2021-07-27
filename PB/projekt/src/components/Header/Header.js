import React from "react";
import { NavLink } from "react-router-dom";
import Container from "components/Container/Container";

const Header = () => (
  <nav className="navbar">
    <Container>
      <ul className="nav">
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog">Catalog</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </Container>
  </nav>
);

export default Header;
