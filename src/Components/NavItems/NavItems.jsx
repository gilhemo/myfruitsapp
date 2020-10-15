import React from 'react';
import styled from 'styled-components';

import NavItem from './NavItem/NavItem';

const Ul = styled.ul`
  margin: 0 20px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const navItems = (props) => {
  let navs = (
    <Ul>
      <NavItem link="/">Login</NavItem>
      <NavItem link="/signup">Signup</NavItem>
    </Ul>
  );
  if (props.isAuth) {
    navs = (
      <Ul>
        <NavItem link="/" exact>
          All Fruits
        </NavItem>
        <NavItem link="/favorites">Favorites</NavItem>
        <NavItem link="/logout">Logout</NavItem>
      </Ul>
    );
  }
  return navs;
};

export default navItems;
