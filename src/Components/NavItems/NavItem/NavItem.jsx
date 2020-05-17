import React from "react";
import { NavLink } from "react-router-dom";

import "./NavItem.css";

const navItem = (props) => (
  <li className="NavigationItem">
    <NavLink to={props.link} exact={props.exact} activeClassName="active">
      {props.children}
    </NavLink>
  </li>
);

export default navItem;
