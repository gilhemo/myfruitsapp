import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import FruitHeader from "../../Components/FruitHeader/FruitHeader";
import * as actions from "../../store/actions/actions";

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

class FruitDetails extends Component {
  state = {
    editable: true,
    favBtnType: "far fa-star",
    isFav:
      this.props.favorites &&
      this.props.favorites.find(
        (fav) => fav.key === this.props.match.params.id
      ),
  };

  componentDidMount() {
    if (this.state.isFav) {
      this.setState({ favBtnType: "fas fa-star" });
    }
  }
  BackHanlder = () => {
    this.props.history.goBack();
  };

  FavoritesHandler = () => {
    const setFav = [];
    setFav.push({
      ...this.props.fruits[this.props.match.params.id - 1],
      key: this.props.match.params.id,
    });
    if (
      this.props.favorites &&
      this.props.favorites.find((fav) => fav.key === this.props.match.params.id)
    ) {
      this.props.onRemoveFavorites(this.props.match.params.id);
      this.setState({ favBtnType: "far fa-star" });
    } else {
      this.props.onAddFavorites(setFav);
      this.setState({ favBtnType: "fas fa-star" });
    }
  };

  editHanlder = () => {
    this.setState({ editable: !this.state.editable });
  };

  changeInputHandler = (event) => {
    this.props.fruits[this.props.match.params.id - 1].description =
      event.target.value;
    this.props.onChangeHandler(event.target.value, this.props.match.params.id);
  };

  render() {
    return (
      <StyledDiv>
        <BackButton onClick={this.BackHanlder}>&#8249; Back</BackButton>
        <StyledH1>Fruit info</StyledH1>
        <FruitHeader
          photoSrc={this.props.fruits[this.props.match.params.id - 1].photoUrl}
          fruitName={this.props.fruits[this.props.match.params.id - 1].name}
          clicked={this.FavoritesHandler}
          favBtnStyle={this.state.favBtnType}
        />
        <StyledH4>
          Description:
          <EditButton onClick={this.editHanlder}>
            <i className="fas fa-square-full"></i>
          </EditButton>
        </StyledH4>
        <StyledTextarea
          placeholder={
            this.props.fruits[this.props.match.params.id - 1].description
          }
          onChange={(event) => this.changeInputHandler(event)}
          disabled={this.state.editable}
        >
          {this.props.fruits[this.props.match.params.id - 1].description}
        </StyledTextarea>
      </StyledDiv>
    );
  }
}

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
    onChangeHandler: (val, id) => dispatch(actions.changeHandler(val, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FruitDetails);
