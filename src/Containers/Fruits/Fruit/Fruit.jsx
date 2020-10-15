import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const StyledList = styled.li`
  display: block;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  }

  &:hover {
  color: blue;
  cursor: pointer;
  }
`;

const fruit = (props) => {
  return (
    <StyledList>
      <StyledNavLink to={props.link}>{props.children}</StyledNavLink>
    </StyledList>
  );
};

export default fruit;
