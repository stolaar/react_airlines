import React from "react";

const NavLink = props => {
  return (
    <li className={"nav-item" + props.active ? "active" : ""}>
      <a className="nav-link" href={props.linkTo}>
        {props.text}
      </a>
    </li>
  );
};

export default NavLink;
