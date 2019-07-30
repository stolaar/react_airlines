import React from "react";

function TabButton(props) {
  const activeBtn = props.isActive ? "btn-primary" : "btn-dark";
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
