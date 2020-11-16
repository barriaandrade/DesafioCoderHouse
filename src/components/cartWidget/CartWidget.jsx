import React from "react";
import { Link } from "react-router-dom";

const CartWidget = ({total}) => {
  return (
    <div style={{paddingLeft: 20}}>
      <Link to="/cart">
        <div className="row">

          <div className="col-md-2 right-header end-xs">
            <section className="icon-list">
              
              <i className="nes-icon coin is-medium"></i>
              
              
            </section>
          </div>
  
        <div className="col-md-10 left-header">
            <p style={{height: 10}}>Carro</p>
            <p>{total} Artículo(s) - $0</p>
          </div>
      </div>
      </Link>
    </div>
  );
};

export default CartWidget;
