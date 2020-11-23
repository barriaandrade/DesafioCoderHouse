import React from "react";
import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [amount, setAmount] = useState(initial);
  const [ini, setIni] = useState(initial);
  const [max, setMax] = useState(stock);

  const onMinus = () => {
    if (amount > ini) {
      setAmount(amount - 1);
    }
  };

  const onPlus = () => {
    if (amount < max) {
      setAmount(amount + 1);
    }
  };

  const handleOnAdd = () => {
    onAdd(amount, max, ini);
    setMax(max - amount);
    setAmount(ini);
    if (max < amount) {
      setMax(0);
    }
  };

  return (
    <>
      <div className="col-md-12">
        <div className="container" style={{ paddingLeft: 100 }}>
          <div className="row">
            <div
              className="container nes-container is-rounded col-md-4"
              style={{ paddingRight: 25, width: 300 }}
            >
              {/* <div className="row center-xs">
          <div className="col-md-12">Producto</div>
            <p>Stock = {max}</p>
        </div> */}
              <div className="row center-xs">
                <div className="col-md-4">
                  <button
                    type="button"
                    className="nes-btn is-warning"
                    onClick={onMinus}
                  >
                    -
                  </button>
                </div>
                <div className="col-md-4">
                  <p style={{ fontSize: 20, paddingLeft: 6, paddingTop: 6 }}>
                    {amount}
                  </p>
                </div>
                <div className="col-md-4">
                  <button
                    type="button"
                    className="nes-btn is-success"
                    onClick={onPlus}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="row center-xs" style={{ paddingTop: 6 }}>
                <div className="col-md-12">
                  <button
                    type="button"
                    className="nes-btn is-primary"
                    onClick={() => handleOnAdd()}
                    style={{ width: 300, paddingLeft: 6, paddingTop: 10 }}
                  >
                    Agregar 
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
