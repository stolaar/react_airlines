import React from "react";

const Service = props => {
  return (
    <div className="service">
      <div className="service-image">
        <img src={props.image} alt="service" />
      </div>
      <div className="service-content">
        <h2>{props.heading}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
export default Service;
