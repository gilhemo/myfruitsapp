import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  list-style: none;
  width: 80%;
  height: 100px;
  margin: 20px 10px;
  display: flex;
  box-sizing: border-box;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  flex-direction: row;
`;

const StyledImg = styled.img`
  width: 100px;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  float: left;
`;

const StyledH3 = styled.h3`
  margin: auto 10px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
`;

const FruitName = styled.div`
  margin: auto 10px;
  font-size: 16px;
`;

const FavoriteButton = styled.button`
  color: yellow;
  background-color: white;
  border: 0;
  size: 1.17em;
`;

const WikiButton = styled.button`
  margin-bottom: 5px;
  margin: auto 10px;
`;

const fruitHeader = (props) => {
  return (
    <Wrapper>
      <StyledImg src={props.photoSrc} alt="Fruit" />
      <StyledDiv>
        <FruitName>Fruit Name:</FruitName>
        <StyledH3>
          {props.fruitName}
          <FavoriteButton onClick={props.clicked}>
            <i className={props.favBtnStyle}></i>
          </FavoriteButton>
        </StyledH3>
        <WikiButton>Show in wiki</WikiButton>
      </StyledDiv>
    </Wrapper>
  );
};

export default fruitHeader;
