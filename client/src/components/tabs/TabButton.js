import React from "react";

function TabButton(props) {
  return (
    <li className="tab-btn">
      <button className="btn btn-primary">{props.btnName}</button>
    </li>
  );
}
export default TabButton;
