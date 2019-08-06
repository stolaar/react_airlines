import React from "react";
import "./PageTabs.css";
import { Link } from "react-router-dom";

function PageTabs() {
  return (
    <div className="progress panel p-4 align-items-center">
      <Link to="/">
        <div
          style={{ cursor: "pointer", color: "#2E2E2E" }}
          className="pl-2 pr-2 fa-stack fa-2x"
        >
          <i className=" text-center fa fa-circle-o fa-stack-2x" />
          <div>
            <i className="  text-center fas fa-plane-departure" />
          </div>
        </div>
      </Link>
      <div className="line-btw" />
      <Link to="/rent-a-car">
        <div
          style={{ cursor: "pointer", color: "#2E2E2E" }}
          className="pl-3 pr-3 fa-stack fa-2x text-center"
        >
          <i className="text-center fa fa-circle-o fa-stack-2x" />
          <div>
            <i className="text-center fas fa-concierge-bell" />
          </div>
        </div>
      </Link>
      <div className="line-btw" />
      <Link to="/book-a-hotel">
        <div
          style={{ cursor: "pointer", color: "#2E2E2E" }}
          className="pl-2 pr-2 fa-stack fa-2x text-center"
        >
          <i className="fa fa-circle-o fa-stack-2x" />
          <div>
            <i className="text-center fas fa-plane-arrival" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PageTabs;
