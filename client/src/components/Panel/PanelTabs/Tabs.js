import React, { useState } from "react";
import TabButton from "./TabButton";
import "./Tabs.css";
import { connect } from "react-redux";
import { setPanel } from "../../../actions/tabsActions";
import PropTypes from "prop-types";

function Tabs(props) {
  const [buttons, setButtons] = useState([
    { title: "Book a flight", name: "Panel1", isActive: true },
    { title: "Check-in", name: "Panel2", isActive: false },
    { title: "Flight Status", name: "Panel3", isActive: false }
  ]);
  const setButtonsHandler = index => {
    const btn = {
      ...buttons[index],
      isActive: true
    };
    const newBtns = [...buttons];
    newBtns.forEach(btn => (btn.isActive = false));
    newBtns[index] = btn;
    setButtons([...newBtns]);
    props.setPanel(btn.name);
  };
  return (
    <ul className="tabs">
      {buttons.map((btn, index) => {
        return (
          <TabButton
            key={btn.title}
            onClick={() => setButtonsHandler(index)}
            isActive={btn.isActive}
            btnName={btn.title}
          />
        );
      })}
    </ul>
  );
}

Tabs.propTypes = {
  setPanel: PropTypes.func.isRequired
};
export default connect(
  null,
  { setPanel }
)(Tabs);
