import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  background-color: black;
  color: #ccc;
  text-align: center;
  font-size: 10px;
  height: 11vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div`
  padding: 10px 17px;
`;

const footer = (props) => {
  return (
    <Wrapper>
      <StyledDiv>
        All Rights Reserved | Terms and Conditions | Privacy Policy
      </StyledDiv>
    </Wrapper>
  );
};

export default footer;
