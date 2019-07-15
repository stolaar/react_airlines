import React from "react";

const NavBrand = props => {
  return (
    <a className="navbar-brand" href={props.linkTo}>
      {props.text}
    </a>
  );
};

export default NavBrand;
