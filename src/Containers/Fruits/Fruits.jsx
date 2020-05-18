import React, { Component } from "react";
import { generatePath } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import Fruit from "./Fruit/Fruit";

const Wrapper = styled.div`
  list-style: none;
  width: 80%;
  height: 90%;
  margin: 10px auto;
  text-align: left;
`;

const Ul = styled.ul`
  margin: auto;
  box-sizing: border-box;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  text-align: left;
`;

class Fruits extends Component {
  render() {
    const fruits = this.props.fruits.map((fruit) => (
      <Fruit key={fruit.id} link={generatePath("/:id", { id: fruit.id })}>
        {fruit.name}
      </Fruit>
    ));
    return (
      <Wrapper>
        <nav>
          <Ul>{fruits}</Ul>
        </nav>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fruits: state.reducer.fruits,
  };
};

export default connect(mapStateToProps)(Fruits);
