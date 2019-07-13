import React from "react";
import NavLink from "./../NavLink/NavLink";

const NavLinkDropdown = props => {
  console.log("Drop", props.text);
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

export default NavLinkDropdown;
