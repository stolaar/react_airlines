import React from "react";
import Navigation from "./components/layout/Navigation";
import "./App.css";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

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
// subNavProps.links = [
//   { linkTo: "#", text: "Link 1" },
//   { linkTo: "#", text: "Link 2" },
//   {
//     dropdown: true,
//     text: "Dropdown",
//     links: [
//       { linkTo: "#", text: "Dropdown Link 1" },
//       { linkTo: "#", text: "Dropdown Link 2", active: true }
//     ]
//   }
// ];

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
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
