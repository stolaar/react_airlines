import React, { useState } from "react";
import Suggestions from "../common/Suggestions";
import "./IconInput.css";
const suggestions = [
  "Alligator",
  "Bask",
  "Crocodilian",
  "Death Roll",
  "Eggs",
  "Jaws",
  "Reptile",
  "Solitary",
  "Tail",
  "Wetlands"
];

function IconInput(props) {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState("");

  const onChange = e => {
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setActiveSuggestion(0);
    setFilteredSuggestions(filteredSuggestions);
    setShowSuggestions(true);
    setUserInput(e.currentTarget.value);
  };

  const onClick = e => {
    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(e.currentTarget.innerText);
  };

  const onKeyDown = e => {
    // User pressed the enter key
    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      setUserInput(filteredSuggestions[activeSuggestion]);
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

  let inputs = props.inputs.map((input, index) => {
    return (
      <React.Fragment key={index}>
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            <i className={input.icon} />{" "}
          </span>
        </div>
        <input
          onChange={e => onChange(e)}
          onKeyDown={e => onKeyDown(e)}
          type="text"
          className="form-control"
          placeholder={input.placeholder}
        />
        <Suggestions
          showSuggestions={showSuggestions}
          userInput={userInput}
          filteredSuggestions={filteredSuggestions}
          activeSuggestion={activeSuggestion}
          onClick={e => onClick(e)}
        />
        <span className="input-group-addon">&nbsp;</span>
      </React.Fragment>
    );
  });
  return (
    <div className="input-group">
      {inputs}
      <button className="btn btn-danger">
        {" "}
        <i className="fas fa-chevron-right" />
      </button>
    </div>
  );
}
export default IconInput;
// fas fa-plane-departure
//"fas fa-plane-arrival"
