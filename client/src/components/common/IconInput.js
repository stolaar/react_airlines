import React from "react";

function IconInput(props) {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          <i className={props.leftIcon} />{" "}
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder={props.leftPlaceholder}
      />
      <span className="input-group-addon">&nbsp;</span>
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon2">
          <i className={props.rightIcon} aria-hidden="true" />
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder={props.rightPlaceholder}
      />
    </div>
  );
}
export default IconInput;
// fas fa-plane-departure
//"fas fa-plane-arrival"
