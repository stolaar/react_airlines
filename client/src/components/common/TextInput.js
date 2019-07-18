import React from "react";

function TextInput(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        className="form-control"
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        aria-describedby={props.desc}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default TextInput;
