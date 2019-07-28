import React from "react";
import "./Panel.css";
import IconInput from "../common/IconInput";
import { connect } from "react-redux";

const inputs1 = [
  {
    userInput: "",
    icon: "fas fa-plane-departure",
    placeholder: "From",
    suggestion: false
  },
  {
    userInput: "",
    icon: "fas fa-plane-arrival",
    placeholder: "To",
    suggestion: false
  }
];
const inputs2 = [
  {
    userInput: "",
    icon: "fas fa-plane-departure",
    placeholder: "Ticked ID",
    suggestion: false
  },
  {
    userInput: "",
    icon: "fas fa-plane-arrival",
    placeholder: "Passport ID",
    suggestion: false
  }
];
const inputs3 = [
  {
    userInput: "",
    suggestion: false,
    icon: "fas fa-plane-departure",
    placeholder: "Ticket ID"
  }
];

function Panel(props) {
  let activePanel = "";
  let panel1 = <IconInput inputs={[...inputs1]} />;
  let panel2 = <IconInput inputs={[...inputs2]} />;
  let panel3 = <IconInput inputs={[...inputs3]} />;
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