import React from 'react';

import styled from 'styled-components';

const StyledSection = styled.section`
  width: 90%;
  margin: auto;
  padding: 1rem;
  border: 1px solid #3b0062;
  border-radius: 5px;

  @media (min-width: 768px) {
    width: 40rem;
  }
`;

const auth = (props) => <StyledSection>{props.children}</StyledSection>;

export default auth;
