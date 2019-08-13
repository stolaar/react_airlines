import React, { useState, useEffect } from "react";
import "./Panel.css";
import IconInput from "../common/IconInput";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
  useEffect(() => {
    props.auth.isAuthenticated && setUser(true);
    !props.auth.isAuthenticated && setUser(false);
  }, [props.auth]);

  const onClickHandler = () => {
    user ? setError(false) && props.history.push("/services") : setError(true);
    user && window.scrollTo(0, 800);
  };

  useEffect(() => {
    setError(false);
  }, [props.tabs.panel]);

  let activePanel = "";
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  let panel1 = (
    <IconInput onClick={() => onClickHandler()} inputs={[...inputs1]} />
  );
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
      {error && (
        <div className="pt-4">
          <p>
            You have to{" "}
            <Link onClick={() => window.scrollTo(0, 800)} to="/login">
              Login
            </Link>{" "}
            first
          </p>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = ({ tabs, auth }) => ({ tabs, auth });
Panel.propTypes = {
  tabs: PropTypes.object
};

export default connect(mapStateToProps)(Panel);
