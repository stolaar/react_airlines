import React, { useState, useEffect } from "react";
import "./IconInput.css";
import Suggestions from "./Suggestions";
import PropTypes from "prop-types";

function IconInput(props) {
  const [inputs, setInputs] = useState([...props.inputs]);
  const [suggestions, setSuggestions] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  useEffect(() => {
    setInputs([...props.inputs]);
    props.inputs.forEach(input => {
      let newSuggestion;
      if (
        input.placeholder === "Ticket ID" ||
        input.placeholder === "Passport ID"
      ) {
        newSuggestion = [];
        setSuggestions([...newSuggestion]);
      }
      if (input.placeholder === "From" || input.placeholder === "To") {
        newSuggestion = [
          "North of Macedonia",
          "Bosnia",
          "Albania",
          "Portugal",
          "Slovenia",
          "Hungary",
          "Denmark",
          "Sweden",
          "Germany",
          "Poland"
        ];
        setSuggestions([...newSuggestion]);
      }
    });
  }, [props]);

  const onChange = (e, index) => {
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion
          .toLowerCase()
          .indexOf(inputs[index].userInput.toLowerCase()) > -1
    );
    setActiveSuggestion(0);
    setFilteredSuggestions(filteredSuggestions);
    setShowSuggestions(true);
    const updateInputs = [...inputs];
    const inputItem = {
      ...inputs[index],
      suggestion: true,
      userInput: e.currentTarget.value
    };
    updateInputs[index] = { ...inputItem };
    setInputs([...updateInputs]);
  };

  const onClick = (e, index) => {
    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    const updateInputs = [...inputs];
    const inputItem = {
      ...inputs[index],
      suggestion: false,
      userInput: e.currentTarget.innerText
    };
    updateInputs[index] = { ...inputItem };
    setInputs([...updateInputs]);
  };

  const onKeyDown = (e, index) => {
    // User pressed the enter key
    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      const updateInputs = [...inputs];
      const inputItem = {
        ...inputs[index],
        suggestion: false,
        userInput: filteredSuggestions[activeSuggestion]
      };
      updateInputs[index] = { ...inputItem };
      setInputs([...updateInputs]);
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  let displayInputs = inputs.map((input, index) => {
    return (
      <React.Fragment key={index}>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <i className={input.icon} />{" "}
            </span>
          </div>
          <input
            onChange={e => onChange(e, index)}
            onKeyDown={e => onKeyDown(e, index)}
            type="text"
            value={input.userInput}
            className="form-control"
            placeholder={input.placeholder}
          />
        </div>
        {input.suggestion && input.hasSuggestion ? (
          <Suggestions
            showSuggestions={showSuggestions}
            userInput={input.userInput}
            filteredSuggestions={filteredSuggestions}
            activeSuggestion={activeSuggestion}
            onClick={e => onClick(e, index)}
          />
        ) : (
          ""
        )}
        <span className="input-group-addon">&nbsp;</span>
      </React.Fragment>
    );
  });
  return (
    <React.Fragment>
      {displayInputs}
      <button onClick={props.onClick} style={{ width: "100%" }} className="btn btn-danger">
        {" "}
        <i className="fas fa-chevron-right" />
      </button>
    </React.Fragment>
  );
}

IconInput.propTypes = {
  inputs: PropTypes.array.isRequired
};

export default IconInput;
// fas fa-plane-departure
//"fas fa-plane-arrival"
