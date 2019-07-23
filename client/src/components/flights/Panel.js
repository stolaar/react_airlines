import React from "react";
import "./Panel.css";

function Panel(props) {
  return (
    <div
      style={{ marginTop: "0", marginLeft: "0", padding: "20px 20px" }}
      className="jumbotron bg-dark text-white"
    >
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            <i className="fas fa-plane-departure" />{" "}
          </span>
        </div>
        <input type="text" className="form-control" placeholder="From" />
        <span className="input-group-addon">&nbsp;</span>
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon2">
            <i className="fas fa-plane-arrival" aria-hidden="true" />
          </span>
        </div>
        <input type="text" className="form-control" placeholder="To" />
      </div>
    </div>
  );
}

export default Panel;
