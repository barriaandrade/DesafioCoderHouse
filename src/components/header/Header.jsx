import React from "react";
import { useCartContext } from "../../context/cartContext";
import CartWidget from "../cartWidget/CartWidget";

import "../header/Header.css";

const Header = () => {

  const { cart, cantidad, total } = useCartContext();

  console.log('carrito', cart.length);
  
  return (
    <div>
      <header>
        <div className="container ">
          <div className="row">
            {/* Left title */}
            <div className="col-md-8 left-header">
              <i className="nes-icon github is-medium"></i>
              <h1>8-Bit Sales</h1>
            </div>
            {
              total() !==0 && <CartWidget total={cantidad()} className="col-md-4 right-header end-xs"></CartWidget>
            }
              
          </div>
        </div>

        <div className="container fix-progress full-w">
          <div className="row">
            <div className="col-md-12">
              <progress
                className="nes-progress is-pattern"
                value="99"
                max="99"
              ></progress>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
