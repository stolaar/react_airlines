import React from "react";
import NavLink from "./../NavLink/NavLink";
import PropTypes from "prop-types";

const NavLinkDropdown = props => {
  let active = false;
  const links = props.links.map(function(link, index) {
    if (link.active) {
      active = true;
    }
    return (
      <NavLink
        key={index}
        linkTo={link.linkTo}
        text={link.text}
        active={link.active}
      />
    );
  });
  return (
    <li className={"nav-item dropdown " + (active ? "active" : "")}>
      <a
        href="/"
        className="nav-link dropdown-toggle"
        data-toggle="dropdown"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {props.text}
        <span className="caret" />
      </a>
      <ul className="bg-dark dropdown-menu">{links}</ul>
    </li>
  );
};

NavLinkDropdown.propTypes = {
  links: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired
};

export default NavLinkDropdown;
