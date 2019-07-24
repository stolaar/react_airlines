import React from "react";
import "./Header.css";
// import { FormattedMessage } from "react-intl";
import Tabs from "../../tabs/Tabs";
import Panel from "../../Panel/Panel";
import Stepper from "../../BookingSteps/Stepper";

function Header(props) {
  return (
    <div className="jumbotron">
      <div className="bg" />
      <div className="content-bg">
        <div className="content ">
          <div className="text-center">
            <h1 className="display-5">WELCOME TO</h1>
            <h2 className="display-7 text-white">
              {props.heading}
              <sub>.com</sub>
            </h2>
            <Tabs />
            <Panel />
            <hr className="my-4" />
            <div className="pb-4">
              <Stepper />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
