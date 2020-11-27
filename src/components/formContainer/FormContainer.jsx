import React from "react";
import Formulario from "./form/Formulario";

const FormContainer = ({title}) => {
  return (
    <div>
      <div className="container" style={{ paddingTop: 30 }}>
        <div className="row">
          <div className="col-md-12">
            <h3 style={{ marginBottom: 30 }}>{title}</h3>
            <div className="row">
              <div className="col-md-12">
                <Formulario></Formulario>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
