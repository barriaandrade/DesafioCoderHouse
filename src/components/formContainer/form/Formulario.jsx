import React, { useState, useEffect } from "react";
import { useCartContext } from "../../../context/cartContext";
import { getFirestore } from "../../../firebase";
import * as firebase from "firebase/app";
import ResumeCart from "../resumeCart/ResumeCart";

const Formulario = () => {
  const { cart, total, cleanCart } = useCartContext();
  const [checkout, setCheckout] = useState("");
  const [errorForm, setError] = useState(false);
  const [complete, setComplete] = useState(false);
  const [dataform, setDataform] = useState({
    nombre: "",
    telefono: "",
    email: "",
    email2: ""
  });

  const handleChange = (event) => {
    setDataform({
      ...dataform,
      [event.target.name]: event.target.value,
    });


  
  };

  useEffect(() => {
    if (dataform.email == dataform.email2) {
      setError(false);
    } else {
      setError(true);
    }
    

  }, [dataform])

  useEffect(() => {
    if (
      dataform.nombre === "" ||
      dataform.telefono === "" ||
      dataform.email === "" ||
      dataform.email2 === "" ||
      errorForm === true
    ) {
      setComplete(false);
    } else {
      setComplete(true);
    }
  }, [dataform, errorForm])

  async function createOrder() {

    const order = {
      buyer: {
        name: dataform.nombre,
        phone: dataform.telefono,
        email: dataform.email,
      },
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
      {checkout == "" ? (
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <div class="nes-field">
                  <label for="name_field">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    class="nes-input"
                    name="nombre"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div class="nes-field">
                  <label for="name_field">telefono</label>
                  <input
                    type="text"
                    id="telefono"
                    class="nes-input"
                    name="telefono"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div class="nes-field">
                  <label for="name_field">E-mail</label>
                  <input
                    type="text"
                    id="email"
                    class="nes-input"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row" style={{ marginBottom: 50 }}>
              <div className="col-md-12">
                <div class="nes-field">
                  <label for="name_field">Repita su E-mail</label>
                  <input
                    type="text"
                    id="email2"
                    class="nes-input"
                    name="email2"
                    onChange={handleChange}
                  />
                </div>
                {errorForm === true ? (
                  <span class="nes-text is-error">
                    Los correos no coinciden
                  </span>
                ) : (
                  <div></div>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-md-5">
                <div style={{ padding: 10 }}>
                  {" "}
                  Total de la compra: $ {total()}
                </div>
              </div>
              {complete === true ? (
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
              ) : (
                <span class="nes-text is-warning">
                  Complete formulario para poder crear una orden
                </span>
              )}
            </div>
          </div>

          <ResumeCart></ResumeCart>

        </div>
      ) : (
        <div className="nes-container is-rounded is-dark">
          <p>tu id de orden es: {checkout}</p>
        </div>
      )}
    </div>
  );
};

export default Formulario;
