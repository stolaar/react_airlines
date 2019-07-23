import React from "react";
import "./Header.css";
// import { FormattedMessage } from "react-intl";
import Tabs from "../../tabs/Tabs";
import Panel from "../../flights/Panel";
import Stepper from "../../steps/Stepper";

function Header(props) {
  return (
    <div className="jumbotron">
      <div className="bg" />
      <div className="content-bg">
        <div className="content ">
          <div className="text-center">
            <h1 className="display-4">{props.heading}</h1>
            <Tabs />
            <Panel />
            <hr className="my-4" />
            <Stepper />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
