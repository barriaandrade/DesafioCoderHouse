import React from "react";

const CartWidget = ({total}) => {
  return (
    <div style={{paddingLeft: 20}}>
        <div className="row">

          <div className="col-md-2 right-header end-xs">
            <section className="icon-list">
              <a href="">
              <i className="nes-icon coin is-medium"></i>
              </a>
              
            </section>
          </div>
  
        <div className="col-md-10 left-header">
            <p style={{height: 10}}>Carro</p>
            <p>{total} Artículo(s) - $0</p>
          </div>
         
      </div>
    </div>
  );
};

export default CartWidget;
