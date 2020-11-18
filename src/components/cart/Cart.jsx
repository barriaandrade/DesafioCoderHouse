import React from "react";
import { useCartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, remove, total } = useCartContext();

  return (
    <div className="container" style={{ paddingTop: 30 }}>
      <div className="row">
        <div className="col-md-12">
          <h3 style={{ marginBottom: 20 }}>Carrito</h3>
          <div className="row">
            <div className="col-md-12">
              {cart.map((item) => (
                <div className="nes-container is-rounded col-md-12">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="row">
                        <div className="col-md-3">
                          <img
                            src={item.pictureUrl}
                            alt=""
                            style={{
                              width: 100,
                              marginBottom: 15,
                              height: 100,
                            }}
                          />
                        </div>
                        <div className="col-md-4" style={{ padding: 40 }}>
                          {item.titulo}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-7">
                      <div className="row">
                        <div className="col-md-3" style={{ padding: 40 }}>
                          Cantidad: {item.total}
                        </div>
                        <div className="col-md-3" style={{ padding: 40 }}>
                          Precio: {item.price}
                        </div>
                        <div className="col-md-3" style={{ padding: 40 }}>
                          <button
                            type="button"
                            className="nes-btn is-error"
                            onClick={() => remove(item)}
                            style={{ width: 300 }}
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {total() !== 0 ? (
                <div className="nes-container is-rounded col-md-12">
                  <div className="row">total: ${total()}</div>
                </div>
              ) : (
                <div className="nes-container is-rounded col-md-12">
                  <div className="row">
                      <div className="col-md-6" style={{ padding: 40 }}>
                      No hay items
                      </div>
                     <div className="col-md-6">
                     <Link to="/">
                      <button
                        type="button"
                        className="nes-btn is-error"
                        style={{ width: 300, padding: 40  }}
                      >
                        Volver
                      </button>
                    </Link>
                     </div>

                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
