import React from "react";
import TabButton from "./TabButton";
import "./Tabs.css";

function Tabs(props) {
  return (
    <ul className="tabs">
      <TabButton btnName="Book a flight" />
      <TabButton btnName="Reserve a ticket" />
    </ul>
  );
}
export default Tabs;
