import React from "react";

function TabButton(props) {
  const activeBtn = props.isActive ? "tab-active-btn" : "btn-dark";
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
