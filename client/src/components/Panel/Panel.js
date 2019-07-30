import React from "react";
import "./Panel.css";
import IconInput from "../common/IconInput";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const inputs1 = [
  {
    userInput: "",
    icon: "fas fa-plane-departure",
    placeholder: "From",
    suggestion: false,
    hasSuggestion: true
  },
  {
    userInput: "",
    icon: "fas fa-plane-arrival",
    placeholder: "To",
    suggestion: false,
    hasSuggestion: true
  }
];
const inputs2 = [
  {
    userInput: "",
    icon: "fas fa-plane-departure",
    placeholder: "Ticked ID",
    suggestion: false,
    hasSuggestion: false
  },
  {
    userInput: "",
    icon: "fas fa-plane-arrival",
    placeholder: "Passport ID",
    suggestion: false,
    hasSuggestion: false
  }
];
const inputs3 = [
  {
    userInput: "",
    suggestion: false,
    icon: "fas fa-plane-departure",
    placeholder: "Ticket ID",
    hasSuggestion: false
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
Panel.propTypes = {
  tabs: PropTypes.object
};

export default connect(mapStateToProps)(Panel);
