import React from 'react';
import styled from 'styled-components';

import Toolbar from '../../Components/Toolbar/Toolbar';
import Footer from '../../Components/Footer/Footer';

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  margin-top: 10px;
  height: 79vh;
`;

const layout = (props) => {
  return (
    <DivContainer>
      <Toolbar isAuth={props.isAuth} />
      <MainContent>{props.children}</MainContent>
      <Footer />
    </DivContainer>
  );
};

export default layout;
