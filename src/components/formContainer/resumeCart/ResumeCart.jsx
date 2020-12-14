import React from "react";
import { useCartContext } from "../../../context/cartContext";

const ResumeCart = () => {

const { cart } = useCartContext();

  return (
    <div className="col-md-6" style={{ padding: 30 }}>
      <div className="nes-container with-title is-centered">
        <p class="title">resumen de compra</p>
        <div className="row" style={{ marginBottom: 30 }}>
          <div className="col-md-6">Titulo</div>
          <div className="col-md-4">Cantidad</div>
          <div className="col-md-2">Total</div>
        </div>
        {cart.map((item) => (
          <div className="row" style={{ marginBottom: 10 }}>
            <div className="col-md-6">{item.titulo}</div>
            <div className="col-md-4">{item.total}</div>
            <div className="col-md-2">{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeCart;
