export const navProps = {
  brand: { linkTo: "/", text: "Airlineser" },
  links: [
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
  ]
};
export const subNavProps = {
  brand: { linkTo: "/", text: "Search" }
};
