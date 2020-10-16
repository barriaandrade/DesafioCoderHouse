import React from "react";
import "../navBar/NavBar.css";
const NavBar = () => {
  return (
    <div>
      <nav>
        <div class="container">
          <div className="row center-xs between-xs">
              <a href="#">&lt;</a>
              <a href="#">Inicio</a>
              <a href="#">Productos</a>
              <a href="#">Ofertas</a>
              <a href="#">FAQ</a>
              <a href="#">Próximamente</a>
              <a href="#">Empleo</a>
              <a href="#">COVID-19</a>
              <a href="#">Nosotros</a>
              <a href="#">Contacto</a>
              <a href="#">&gt;</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
