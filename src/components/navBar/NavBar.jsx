import React from "react";
import "../navBar/NavBar.css";
const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="container">
          <div className="row center-xs between-xs">
              <a href="localhost:3000/">&lt;</a>
              <a href="localhost:3000/">Inicio</a>
              <a href="localhost:3000/">Productos</a>
              <a href="localhost:3000/">Ofertas</a>
              <a href="localhost:3000/">FAQ</a>
              <a href="localhost:3000/">Próximamente</a>
              <a href="localhost:3000/">Empleo</a>
              <a href="localhost:3000/">COVID-19</a>
              <a href="localhost:3000/">Nosotros</a>
              <a href="localhost:3000/">Contacto</a>
              <a href="localhost:3000/">&gt;</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
