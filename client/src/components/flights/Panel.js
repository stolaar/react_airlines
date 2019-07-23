import React, { useState } from "react";
import "./Panel.css";
import TextInput from "../common/TextInput";

function Panel(props) {
  const [state, setState] = useState({
    from: "",
    to: ""
  });

  const onChangeHandler = e => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <div
      style={{ marginTop: "0", marginLeft: "0", padding: "20px 20px" }}
      className="jumbotron bg-dark text-white"
    >
      <div className="md-form">
        <TextInput
          onChange={e => onChangeHandler(e)}
          id="from"
          name="from"
          label="From"
          type="text"
          desc="from"
          placeholder="From"
        />
        <TextInput
          onChange={e => onChangeHandler(e)}
          id="to"
          name="to"
          label="To"
          type="text"
          desc="to"
          placeholder="To"
        />

        {/*<input type="text" id="form1" className="form-control" />
        <label htmlFor="form1">Example label</label>*/}
      </div>
    </div>
  );
}

export default Panel;
