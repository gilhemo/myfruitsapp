import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import FruitHeader from '../../Components/FruitHeader/FruitHeader';
import * as actions from '../../store/actions/actions';

const StyledDiv = styled.div`
  list-style: none;
  width: 80%;
  height: 90%;
  margin: 10px auto;
  text-align: left;
`;

const StyledTextarea = styled.textarea`
  width: 90%;
  height: 250px;
  margin: 10px;
  box-sizing: border-box;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  text-align: left;
  display: block;
  resize: none;
  line-height: 1.5;
  overflow-y: auto;
  color: black;
  background-color: white;
  cursor: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  flex-direction: column;
`;

const StyledH1 = styled.h1`
  margin: 10px;
`;

const StyledH4 = styled.h4`
  margin: 10px;
`;

const EditButton = styled.button`
  color: blue;
  background-color: white;
  border: 0;
  size: 1.17em;
`;

const BackButton = styled.button`
  color: darkblue;
  size: 1.17em;
  font-weight: bold;
  background-color: white;
  box-sizing: border-box;
  border-radius: 25px;
  border: 1px solid #ccc;
  margin: auto 10px;
`;

const fruitDetails = (props) => {
  const [editable, setEditable] = useState(true);
  const [favBtnType, setFavBtnType] = useState('far fa-star');
  const [isFav, setIsFav] = useState(
    props.favorites &&
      props.favorites.find((fav) => fav.key === props.match.params.id)
  );
  const [fruitIndex, setFruitIndex] = useState(
    props.fruits.findIndex((f) => f._id === props.match.params.id)
  );

  useEffect(() => {
    if (isFav) {
      setFavBtnType('fas fa-star');
    }
  }, []);

  const BackHanlder = () => {
    props.history.goBack();
  };

  const FavoritesHandler = () => {
    const setFav = [];
    setFav.push({
      ...props.fruits[fruitIndex],
      key: props.match.params.id,
    });
    if (
      props.favorites &&
      props.favorites.find((fav) => fav.key === props.match.params.id)
    ) {
      props.onRemoveFavorites(props.match.params.id);
      setFavBtnType('far fa-star');
    } else {
      props.onAddFavorites(setFav);
      setFavBtnType('fas fa-star');
    }
  };

  const editHanlder = () => {
    setEditable(!editable);
  };

  const changeInputHandler = (event) => {
    props.fruits[fruitIndex].description = event.target.value;
    props.onUpdateFruit(event.target.value, props.match.params.id);
  };

  return (
    <StyledDiv>
      <BackButton onClick={BackHanlder}>&#8249; Back</BackButton>
      <StyledH1>Fruit info</StyledH1>
      <FruitHeader
        photoSrc={props.fruits[fruitIndex].photoUrl}
        fruitName={props.fruits[fruitIndex].name}
        clicked={FavoritesHandler}
        favBtnStyle={favBtnType}
      />
      <StyledH4>
        Description:
        <EditButton onClick={editHanlder}>
          <i className="fa fa-pencil"></i>
        </EditButton>
      </StyledH4>
      <StyledTextarea
        placeholder={props.fruits[fruitIndex].description}
        onChange={(event) => changeInputHandler(event)}
        disabled={editable}
      >
        {props.fruits[fruitIndex].description}
      </StyledTextarea>
    </StyledDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    fruits: state.reducer.fruits,
    favorites: state.reducer.favorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddFavorites: (setFav) => dispatch(actions.addFavorites(setFav)),
    onRemoveFavorites: (favId) => dispatch(actions.removeFavorites(favId)),
    onUpdateFruit: (val, id) => dispatch(actions.updateFruit(val, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(fruitDetails);
