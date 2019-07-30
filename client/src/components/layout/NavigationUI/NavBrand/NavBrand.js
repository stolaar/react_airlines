import React from "react";
import PropTypes from "prop-types";

const NavBrand = props => {
  return (
    <a className="navbar-brand" href={props.linkTo}>
      {props.text}
    </a>
  );
};

NavBrand.propTypes = {
  text: PropTypes.string.isRequired
};

export default NavBrand;
