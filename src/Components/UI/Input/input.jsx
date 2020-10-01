import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 1rem 0;
  width: 100%;
`;

const StyledLabel = styled.label`
  display: block;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
`;

const StyledInput = styled.input`
  display: block;
  font: inherit;
  padding: 0.25rem 0.5rem;
  width: 95%;
  border-radius: 3px;
  border: 1px solid #ccc;

  border-color: ${(props) => {
    if (!props.valid && props.touched) {
      return 'red';
    } else {
      return 'solid #ccc';
    }
  }};
  background: ${(props) => {
    if (!props.valid && props.touched) {
      return '#ffc2c2';
    } else {
      return '';
    }
  }};

  $:focus {
    outline: none;
    border-color: #3b0062;
    color: #3b0062;
  }
`;

const input = (props) => (
  <Wrapper>
    <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
    <StyledInput
      valid={props.valid}
      touched={props.touched}
      type={props.type}
      id={props.id}
      required={props.required}
      value={props.value}
      placeholder={props.placeholder}
      onChange={(e) => props.onChange(props.id, e.target.value, e.target.files)}
      onBlur={props.onBlur}
    />
  </Wrapper>
);

export default input;
