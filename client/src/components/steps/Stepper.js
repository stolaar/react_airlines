import React from "react";
import "./Stepper.css";

function Stepper(props) {
  return (
    <div className="progress align-items-center">
      <div className="pl-2 pr-2 fa-stack fa-2x">
        <i className=" text-center fa fa-circle-o fa-stack-2x" />
        <div>
          <i className="  text-center fas fa-plane-departure" />
        </div>
      </div>
      <div className="line-btw" />
      <div className="pl-3 pr-3 fa-stack fa-2x text-center">
        <i className="text-center fa fa-circle-o fa-stack-2x" />
        <div>
          <i className="text-center fas fa-concierge-bell" />
        </div>
      </div>
      <div className="line-btw" />
      <div className="pl-2 pr-2 fa-stack fa-2x text-center">
        <i className="fa fa-circle-o fa-stack-2x" />
        <div>
          <i className="text-center fas fa-plane-arrival" />
        </div>
      </div>
    </div>
  );
}

export default Stepper;
