import React from "react";

const ItemDetail = ({ id, title, price, pictureUrl, description }) => {
  return (
    <div
      className="nes-container is-rounded col-md-12"
      style={{ marginRight: 30 }}
    >
      <div className="row center-xs">
        <div className="col-md-6" style={{paddingTop: 30}}>
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
            <div className="col-md-12"><h2>$ {price}</h2></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
