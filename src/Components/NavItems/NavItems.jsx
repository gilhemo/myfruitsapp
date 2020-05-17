import React from "react";

import "./NavItems.css";
import NavItem from "./NavItem/NavItem";

const navItems = (props) => (
  <ul className="NavigationItems">
    <NavItem link="/" exact>
      All Fruits
    </NavItem>
    <NavItem link="/favorites">Favorites</NavItem>
  </ul>
);

export default navItems;
