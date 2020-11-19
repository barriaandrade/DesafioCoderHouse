import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/cartContext";
import ItemCount from "../../itemCount/ItemCount";

const ItemDetail = ({ id, title, price, pictureUrl, description }) => {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState({});
  const [hide, setHide] = useState(true);
  const [hide2, setHide2] = useState(false);

  const { cart, add, remove } = useCartContext();

  useEffect(() => {
    setItem({ id: id, titulo: title, total: total, price: price });
    
  }, []) 
  
  setTimeout(() => {
    setHide2(true);
  },2000);

  const handleAdd = (amount, stock, initial) => {
    if (stock >= amount) {
      setTotal(total + amount);
      add({ id: id, titulo: title, total: total+amount, price: price, pictureUrl: pictureUrl});
    }
    
    setHide(false);
  };
  

 
  return (
    <div
      className="nes-container is-rounded col-md-12"
      style={{ marginRight: 30 }}
    >
      <div className="row center-xs">
        <div className="col-md-6" style={{ paddingTop: 30 }}>
          <div className="row center-xs">
            <div className="col-md-12">{description}</div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="row center-xs">
            <div className="col-md-12" style={{ marginBottom: 15 }}>
              <h2>{title}</h2>
            </div>
          </div>
          <div className="row center-xs">
            <div className="col-md-12">
              <img
                src={pictureUrl}
                alt=""
                style={{ width: 400, marginBottom: 15, height: 400 }}
              />
            </div>
          </div>
          <div className="row center-xs">
            <div className="col-md-12">
              <h2>$ {price}</h2>
            </div>
          </div>
          <div className="row center-xs">
            {hide ? (
              hide2 ? (<ItemCount onAdd={handleAdd} stock={10} initial={1}></ItemCount>) : (
                <button type="button" className="nes-btn is-success">
                Cargando
              </button>
              )
            ) : (
              <Link to="/cart">
                <button type="button" className="nes-btn is-success">
                  Termina tu compra
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
