import React, { Component } from "react";
import { generatePath } from "react-router-dom";
import { connect } from "react-redux";

import Fruit from "./Fruit/Fruit";
import "./Fruits.css";

class Fruits extends Component {
  render() {
    const fruits = this.props.fruits.map((fruit) => (
      <Fruit key={fruit.id} link={generatePath("/:id", { id: fruit.id })}>
        {fruit.name}
      </Fruit>
    ));
    return (
      <div className="Fruits">
        <nav>
          <ul>{fruits}</ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fruits: state.reducer.fruits,
  };
};

export default connect(mapStateToProps)(Fruits);
