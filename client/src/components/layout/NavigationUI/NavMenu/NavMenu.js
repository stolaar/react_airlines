import React, { useState } from "react";
import NavLinkDropdown from "./NavLinkDropdown/NavLinkDropdown";
import NavLink from "./NavLink/NavLink";
import "./NavMenu.css";

const NavMenu = props => {
  const [showMenu, setShowMenu] = useState(false);

  const onShowMenu = () => {
    setShowMenu(!showMenu);
  };

  let links = null;
  const show = showMenu ? "show" : "";

  let authLinks = null;

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
    authLinks = (
      <React.Fragment>
        <NavLink linkTo="/login" text="Login" active={false} />
        <NavLink linkTo="/register" text="Sign up" active={false} />
      </React.Fragment>
    );
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
        <ul className="navbar-nav ml-auto auth">{authLinks}</ul>
      </div>
    </React.Fragment>
  );
};

export default NavMenu;
