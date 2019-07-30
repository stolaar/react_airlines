import React from "react";
import isEmpty from "lodash.isempty";
import PropTypes from "prop-types";

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

TextInput.propTypes = {
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextInput;
