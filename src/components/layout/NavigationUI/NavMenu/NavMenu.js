import React, { useState } from "react";
import NavLinkDropdown from "./NavLinkDropdown/NavLinkDropdown";
import NavLink from "./NavLink/NavLink";

const NavMenu = props => {
  const [showMenu, setShowMenu] = useState(false);

  const onShowMenu = () => {
    setShowMenu(!showMenu);
  };

  let links = null;
  const show = showMenu ? "show" : "";
  if (props.links) {
    links = props.links.map((link, index) => {
      if (link.dropdown) {
        return (
          <NavLinkDropdown
            key={index}
            links={link.links}
            text={link.text}
            active={link.active}
          />
        );
      } else {
        return (
          <NavLink
            key={index}
            linkTo={link.linkTo}
            text={link.text}
            active={link.active}
          />
        );
      }
    });
  }
  return (
    <React.Fragment>
      {props.links ? (
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => onShowMenu()}
        >
          <span className="navbar-toggler-icon" />
        </button>
      ) : (
        ""
      )}
      <div className={`collapse navbar-collapse ${show}`}>
        <ul className="navbar-nav">{links}</ul>
      </div>
    </React.Fragment>
  );
};

export default NavMenu;
