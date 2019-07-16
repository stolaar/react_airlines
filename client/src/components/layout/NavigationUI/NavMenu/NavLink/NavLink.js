import React from "react";
import { Link } from "react-router-dom";

const NavLink = props => {
  return (
    <li className={"nav-item" + props.active ? "active" : ""}>
      <Link onClick={props.onClick} className="nav-link" to={props.linkTo}>
        {props.text}
      </Link>
    </li>
  );
};

export default NavLink;
