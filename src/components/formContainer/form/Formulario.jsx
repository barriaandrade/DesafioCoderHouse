import React, { useState } from "react";
import { useCartContext } from "../../../context/cartContext";
import { getFirestore } from "../../../firebase";
import * as firebase from "firebase/app";

const Formulario = () => {
  const { cart, total, cleanCart } = useCartContext();
  const [checkout, setCheckout ] = useState('');
  const [dataform, setDataform] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const handleChange = (event) => {
    setDataform({
      ...dataform,
      [event.target.name]: event.target.value,
    });
  };
  
  async function createOrder() {
    const order = {
      buyer: { name: dataform.nombre, phone: dataform.telefono, email: dataform.email },
      items: cart.map((item) => ({
        id: item.id,
        title: item.titulo,
        price: item.price,
        quantity: item.total,
      })),
      date: firebase.firestore.FieldValue.serverTimestamp(),
      total: total(),
    };

    const db = getFirestore();
    const orders = db.collection("orders");

    try {
      const id = await orders.add(order);
      console.log("order creada id: ", id);
      setCheckout(id.id);
      cleanCart();
      
    } catch (err) {
      console.log("error", err);
      console.log(order);
    }
  }

  return (
    <div
      className="nes-container is-rounded col-md-12"
      style={{ marginRight: 30 }}
    >
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <div class="nes-field">
                <label for="name_field">Nombre</label>
                <input type="text" id="nombre" class="nes-input" name="nombre" onChange={handleChange}/>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div class="nes-field">
                <label for="name_field">telefono</label>
                <input type="text" id="telefono" class="nes-input" name="telefono" onChange={handleChange}/>
              </div>
            </div>
          </div>

          <div className="row" style={{ marginBottom: 50 }}>
            <div className="col-md-12">
              <div class="nes-field">
                <label for="name_field">E-mail</label>
                <input type="text" id="email" class="nes-input" name="email" onChange={handleChange}/>
              </div>
            </div>
          </div>

          
          {checkout == '' ?(
                    <div className="row">
                    <div className="col-md-5">
                      <div style={{ padding: 10 }}>
                        {" "}
                        Total de la compra: $ {total()}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <button
                        type="button"
                        className="nes-btn is-warning"
                        onClick={() => createOrder()}
                        style={{ width: 300 }}
                      >
                        crear orden
                      </button>
                    </div>
                  </div>
          ):(
            <div className="nes-container is-rounded is-dark"><p>tu id de orden es: {checkout}</p></div>
          )}
  
        </div>

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
      </div>
    </div>
  );
};

export default Formulario;
