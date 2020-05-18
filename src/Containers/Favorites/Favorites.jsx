import React, { Component } from "react";
import { generatePath } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import Fruit from "../Fruits/Fruit/Fruit";

const Ul = styled.ul`
  list-style: none;
  width: 80%;
  margin: 20px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  text-align: left;
`;

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
      <div>
        <nav>
          <Ul>{favorites}</Ul>
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
