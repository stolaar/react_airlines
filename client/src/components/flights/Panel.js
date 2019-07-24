import React from "react";
import "./Panel.css";
import IconInput from "../common/IconInput";
import { connect } from "react-redux";

function Panel(props) {
  let activePanel = "";
  let panel1 = (
    <IconInput
      leftIcon="fas fa-plane-departure"
      leftPlaceholder="From"
      rightIcon="fas fa-plane-arrival"
      rightPlaceholder="To"
    />
  );
  let panel2 = (
    <IconInput
      leftIcon="fas fa-plane-departure"
      leftPlaceholder="Ticket ID"
      rightIcon="fas fa-plane-arrival"
      rightPlaceholder="Credentials"
    />
  );
  let panel3 = (
    <IconInput
      leftIcon="fas fa-plane-departure"
      leftPlaceholder="Ticket ID"
      rightIcon="fas fa-plane-arrival"
      rightPlaceholder="To"
    />
  );
  switch (props.tabs.panel) {
    case "Panel1":
      activePanel = panel1;
      break;
    case "Panel2":
      activePanel = panel2;
      break;
    case "Panel3":
      activePanel = panel3;
      break;
    default:
      activePanel = panel1;
  }

  return (
    <div
      style={{ marginTop: "0", marginBottom: "0", padding: "20px 20px" }}
      className="jumbotron panel bg-dark text-white"
    >
      {activePanel}
    </div>
  );
}

const mapStateToProps = ({ tabs }) => ({ tabs });

export default connect(mapStateToProps)(Panel);
