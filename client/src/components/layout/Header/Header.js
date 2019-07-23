import React from "react";
import "./Header.css";
import { FormattedMessage } from "react-intl";
import Tabs from "../../tabs/Tabs";
import Panel from "../../flights/Panel";

function Header(props) {
  return (
    <div className="jumbotron">
      <div className="bg" />
      <div className="content-bg">
        <div className="content ">
          <div className="text-center">
            <h1 className="display-4">{props.heading}</h1>
            <Tabs />
          </div>
          <Panel />

          <hr className="my-4" />
          <p>
            <FormattedMessage
              id="header.desc"
              defaultMessage="Default message for header desc"
            />
          </p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="/" role="button">
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
