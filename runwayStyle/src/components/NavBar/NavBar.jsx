import React from 'react';
import CartWidget from './CartWidget';
import './styles.css';

const NavBar = () => {
    return (
      <nav className="NavBar">
        <div className="navbar-logo">
          <a href="/">runwayStyle</a>
        </div>
        <ul className="navbar-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="/productos">Productos</a></li>
          <li><a href="/contacto">Contacto</a></li>
          <li><a href="/carrito">Carrito</a></li>
        </ul>
      </nav>
    );
  };
  

export default NavBar;