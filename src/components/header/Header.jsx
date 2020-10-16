import React from "react";
import "../header/Header.css";

const Header = () => {
  return (
    <div>
      <header>
        <div className="container ">
          <div className="row">
            {/* Left title */}
            <div className="col-md-8 left-header">
              <i className="nes-icon github is-medium"></i>
              <h1>8-Bit Sales</h1>
            </div>
            {/* Right title */}
          
            <div className="col-md-4 right-header end-xs">
                <section className="icon-list">
                  <i className="nes-icon facebook is-medium"></i>
                  <i className="nes-icon instagram is-medium"></i>
                  <i className="nes-icon gmail is-medium"></i>
                  <i className="nes-icon linkedin is-medium"></i>
                </section>
              </div>
          </div>
        </div>

        <div className="container fix-progress full-w">
          <div className="row">
            <div className="col-md-12">
              <progress
                className="nes-progress is-pattern"
                value="99"
                max="99"
              ></progress>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
