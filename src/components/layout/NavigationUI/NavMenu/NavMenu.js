import React from "react";
import NavLinkDropdown from "./NavLinkDropdown/NavLinkDropdown";
import NavLink from "./NavLink/NavLink";

const NavMenu = props => {
  console.log("Menu", props.links);
  let links = null;
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
          data-toggle="collapse"
          data-target={props.linksId}
          aria-controls={props.linksId}
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      ) : (
        ""
      )}
      <div className="collapse navbar-collapse" id={props.linksId}>
        <ul className="navbar-nav">{links}</ul>
      </div>
    </React.Fragment>
  );
};

export default NavMenu;
