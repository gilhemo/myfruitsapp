import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Fruit.css";

class Fruit extends Component {
  render() {
    return (
      <li className="Fruit">
        <NavLink className="Link" to={this.props.link}>
          {this.props.children}
        </NavLink>
      </li>
    );
  }
}

export default Fruit;
