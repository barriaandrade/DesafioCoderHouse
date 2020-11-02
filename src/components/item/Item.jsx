import React from "react";

const Item = ({id, title, price, pictureUrl}) => {


  return (
      <div
        className="nes-container is-rounded col-md-3"
        style={{ marginRight: 30 }}
      >
        <div className="row center-xs">
          <div className="col-md-12" style={{ marginBottom: 15 }}>{title}</div>
        </div>
        <div className="row center-xs">
          <div className="col-md-12">
            <img src={pictureUrl} alt="" style={{width: 200, marginBottom: 15, height: 200 }}/>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-md-12">
            $ {price}
          </div>
        </div>
      </div>
  );
};

export default Item;
