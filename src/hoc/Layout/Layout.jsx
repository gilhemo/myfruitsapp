import React, { Component } from "react";
import styled from "styled-components";

import Toolbar from "../../Components/Toolbar/Toolbar";
import Footer from "../../Components/Footer/Footer";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  margin-top: 10px;
  height: 79vh;
`;

class Layout extends Component {
  render() {
    return (
      <DivContainer>
        <Toolbar />
        <MainContent>{this.props.children}</MainContent>
        <Footer />
      </DivContainer>
    );
  }
}

export default Layout;
