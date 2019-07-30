import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavLink = props => {
  return (
    <li className={"nav-item" + props.active ? "active" : ""}>
      <Link onClick={props.onClick} className="nav-link" to={props.linkTo}>
        {props.text}
      </Link>
    </li>
  );
};

NavLink.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  linkTo: PropTypes.string.isRequired,
  text: PropTypes.string
};

export default NavLink;
