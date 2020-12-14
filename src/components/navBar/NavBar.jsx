import React from "react";
import "../navBar/NavBar.css";
import { Link} from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="container">
          <div className="row center-xs between-xs">
              
              <Link to="/">
               &lt;
              </Link>  
              <Link to="/">
                Inicio
              </Link>              
              <Link to="/">
                Productos
              </Link>
              <Link to="/category/juego">
                Juegos
              </Link>
              <Link to="/category/libro">
                Libros
              </Link>
              <Link to="/">
              &gt;
              </Link> 
              
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
