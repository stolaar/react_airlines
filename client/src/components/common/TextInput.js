import React from "react";
import isEmpty from "lodash.isempty";

function TextInput(props) {
  const classes = ["form-control", isEmpty(props.error) ? " " : "is-invalid"];
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        className={classes.join(" ")}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        aria-describedby={props.desc}
        placeholder={props.placeholder}
      />
      {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>
  );
}

export default TextInput;
