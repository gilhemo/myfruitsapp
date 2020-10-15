import React, { useEffect } from 'react';
import { generatePath } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Fruit from './Fruit/Fruit';
import * as actions from '../../store/actions/actions';

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

const fruits = (props) => {
  const fruits = props.fruits.map((fruit) => (
    <Fruit key={fruit._id} link={generatePath('/:id', { id: fruit._id })}>
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
};

const mapStateToProps = (state) => {
  return {
    fruits: state.reducer.fruits,
    token: state.reducer.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitFruits: (token) => dispatch(actions.initFruits(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(fruits);
