import React from "react";
import styled from "styled-components";

import NavItems from "../NavItems/NavItems";

const Header = styled.header`
  height: 56px;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 0px 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
`;

const Nav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const toolbar = (props) => (
  <Header>
    <Nav>
      <NavItems />
    </Nav>
  </Header>
);

export default toolbar;
