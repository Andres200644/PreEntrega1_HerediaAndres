// src/components/NavBar.js
import React from 'react';
import './NavBar.css'; // Importar el archivo de estilos

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">runwayStyle</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/carrito">Carrito</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
