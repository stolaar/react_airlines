import React from "react";
import NavBrand from "./NavigationUI/NavBrand/NavBrand";
import NavMenu from "./NavigationUI/NavMenu/NavMenu";
import PropTypes from "prop-types";

const Navigation = props => {
  return (
    <nav
      style={{ borderRadius: props.borderRadius }}
      className="navbar navbar-expand-lg navbar-dark bg-dark"
    >
      {<NavBrand text={props.brand.text} linkTo="/" />}
      <NavMenu linkId={props.linkId} links={props.links} />
    </nav>
  );
};

Navigation.propTypes = {
  brand: PropTypes.object.isRequired,
  linkId: PropTypes.string.isRequired,
  links: PropTypes.array
};

export default Navigation;
