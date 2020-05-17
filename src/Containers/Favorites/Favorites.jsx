import React, { Component } from "react";
import { generatePath } from "react-router-dom";
import { connect } from "react-redux";

import Fruit from "../Fruits/Fruit/Fruit";
import "./Favorites.css";

class Favorites extends Component {
  render() {
    let favorites = <p>Please Choose Favorites!</p>;
    if (this.props.favorites) {
      favorites = this.props.favorites.map((fruit) => (
        <Fruit key={fruit.id} link={generatePath("/:id", { id: fruit.id })}>
          {fruit.name}
        </Fruit>
      ));
    }
    return (
      <div className="Fruits">
        <nav>
          <ul>{favorites}</ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fruits: state.reducer.fruits,
    favorites: state.reducer.favorites,
  };
};

export default connect(mapStateToProps)(Favorites);
