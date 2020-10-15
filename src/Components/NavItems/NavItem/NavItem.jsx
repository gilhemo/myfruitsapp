import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledList = styled.li`
  @media (min-width: 500px) {
    .NavigationItem {
      margin: 0;
      display: flex;
      height: 100%;
      width: auto;
      align-items: center;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;

  &:hover,
  &:active,
  &.active {
    font-weight: bold;
  }

  @media (min-width: 500px) {
    color: black;
    height: 100%;
    padding: 16px 10px;

    &:hover,
    &:active,
    &.active {
      background-color: white;
      font-weight: bold;
      color: black;
    }
  }
`;

const navItem = (props) => (
  <StyledList>
    <StyledNavLink to={props.link} exact={props.exact}>
      {props.children}
    </StyledNavLink>
  </StyledList>
);

export default navItem;
