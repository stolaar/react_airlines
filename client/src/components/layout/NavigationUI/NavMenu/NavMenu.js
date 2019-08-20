import React, { useState, useEffect } from "react";
import NavLinkDropdown from "./NavLinkDropdown/NavLinkDropdown";
import NavLink from "./NavLink/NavLink";
import "./NavMenu.css";
import { connect } from "react-redux";
import { logoutUser } from "../../../../actions/authActions";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const NavMenu = props => {
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(props.auth.user);
  }, [props.auth]);
  const onShowMenu = () => {
    setShowMenu(!showMenu);
  };

  let links = null;
  const show = showMenu ? "show" : "";

  let guestLinks = null;
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
    guestLinks = (
      <React.Fragment>
        <NavLink linkTo="/login" text="Login" active={false} />
        <NavLink
          className="signup-btn "
          linkTo="/register"
          text="Sign up"
          active={false}
        />
      </React.Fragment>
    );
    authLinks = (
      <React.Fragment>
        <NavLink linkTo="/" text={user.name} active={false} />
        <NavLink
          onClick={() => props.logoutUser(props.history)}
          linkTo="/"
          text="Log out"
          active={false}
        />
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
        <ul className="navbar-nav ml-auto auth">
          {props.auth.isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = dispatch => ({
  logoutUser: history => dispatch(logoutUser(history))
});

NavMenu.propTypes = {
  links: PropTypes.array,
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavMenu));
