import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavLink = props => {
  const onClick = () => {
    window.scroll(0, 700);
    return props.onClick ? props.onClick() : null;
  };
  return (
    <li className={"nav-item " + props.active ? "active" : ""}>
      <Link
        onClick={onClick}
        className={props.className ? props.className : `nav-link`}
        to={props.linkTo}
      >
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
