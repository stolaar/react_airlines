import React from "react";
import Navigation from "./components/layout/Navigation";
import "./App.css";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import { Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const headingLead = `This is a simple hero unit, a simple jumbotron-style component for
calling extra attention to featured content or information.`;

var navProps = {};
navProps.brand = { linkTo: "/", text: "Airlines" };
navProps.links = [
  { linkTo: "/", text: "Offers" },
  { linkTo: "/", text: "Destinations" },
  {
    dropdown: true,
    text: "Plans",
    links: [
      { linkTo: "/", text: "Link1" },
      { linkTo: "/", text: "Dropdown Link 2", active: true }
    ]
  }
];

var subNavProps = {};
subNavProps.brand = { linkTo: "/", text: "Search" };

function App() {
  return (
    <React.Fragment>
      <Navigation linkId="navbarNav" {...navProps} />
      <div>
        <Header heading="Stole Airlines" lead={headingLead} />
        <div className="container">
          <Navigation
            linkId="navbarSub"
            borderRadius={"7px"}
            {...subNavProps}
          />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
