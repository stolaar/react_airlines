import React from "react";

function IconInput(props) {
  let inputs = props.inputs.map((input, index) => {
    return (
      <React.Fragment key={index}>
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            <i className={input.icon} />{" "}
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder={input.placeholder}
        />
        <span className="input-group-addon">&nbsp;</span>
      </React.Fragment>
    );
  });
  return (
    <div className="input-group">
      {inputs}
      <button className="btn btn-danger">
        {" "}
        <i class="fas fa-chevron-right" />
      </button>
    </div>
  );
}
export default IconInput;
// fas fa-plane-departure
//"fas fa-plane-arrival"
