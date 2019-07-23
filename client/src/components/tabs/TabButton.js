import React from "react";

function TabButton(props) {
  const activeBtn = props.isActive ? "btn-primary" : "btn-secondary";
  const classes = ["btn", activeBtn];

  return (
    <li className="tab-btn">
      <button onClick={props.onClick} className={classes.join(" ")}>
        {props.btnName}
      </button>
    </li>
  );
}
export default TabButton;
