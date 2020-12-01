import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Navbar.css'

const Navbar = () => {
  return (
    <Menu right width={ 380 } >
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/aboutme">
        About me
      </a>
      <a className="menu-item" href="/proyects">
        My Proyects
      </a>
      <a className="menu-item" href="/skills">
        Skills
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>

  );
};

export default Navbar;