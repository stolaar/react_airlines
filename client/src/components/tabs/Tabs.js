import React, { useState } from "react";
import TabButton from "./TabButton";
import "./Tabs.css";

function Tabs(props) {
  const [buttons, setButtons] = useState([
    { title: "Book a flight", isActive: true },
    { title: "Check-in", isActive: false },
    { title: "Flight Status", isActive: false }
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
export default Tabs;
