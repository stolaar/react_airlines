import React, { Fragment } from "react";

function Suggestions(props) {
  let suggestionsListComponent;
  if (props.showSuggestions && props.userInput) {
    if (props.filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul className="suggestions">
          {props.filteredSuggestions.map((suggestion, index) => {
            let className;

            // Flag the active suggestion with a class
            if (index === props.activeSuggestion) {
              className = "suggestion-active";
            }

            return (
              <li
                className={className}
                key={suggestion}
                onClick={props.onClick}
              >
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsListComponent = (
        <div className="no-suggestions">
          <em>No suggestions, you're on your own!</em>
        </div>
      );
    }
  }

  return <Fragment>{suggestionsListComponent}</Fragment>;
}

export default Suggestions;
