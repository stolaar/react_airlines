import React from "react";
import "./Header.css";
// import { FormattedMessage } from "react-intl";
import PanelTabs from "../../Panel/PanelTabs/Tabs";
import Panel from "../../Panel/Panel";
import PageTabs from "../../PageTabs/PageTabs";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <div className="jumbotron">
      <div className="bg" />
      <div className="content-bg">
        <div className="content ">
          <div className="text-center">
            <h2 className="welcome">WELCOME TO</h2>
            <h2 className="brand display-7">
              <strong> {props.heading.toUpperCase()} </strong>
            </h2>
            <PanelTabs />
            <Panel />
            <br />
            <div className="pb-2">
              <PageTabs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  heading: PropTypes.string.isRequired
};

export default Header;
