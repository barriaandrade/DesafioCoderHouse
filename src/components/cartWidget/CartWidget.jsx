import React from "react";
import { useCartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

const CartWidget = ({ cantidad }) => {
  const { total } = useCartContext();
  return (
    <div style={{ paddingLeft: 20 }}>
      <Link to="/cart">
        <div className="row">
          <div className="col-md-2 right-header end-xs">
            <section className="icon-list">
              <i className="nes-icon coin is-medium"></i>
            </section>
          </div>

          <div className="col-md-10 left-header">
            <p style={{ height: 10 }}>Carro</p>
            <p style={{ fontSize: 12 }}>
              {cantidad} Artículo(s) - $ {total()}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CartWidget;
