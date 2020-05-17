import React, { Component } from "react";
import { connect } from "react-redux";

import FruitHeader from "../../Components/FruitHeader/FruitHeader";
import "./FruitDetails.css";
import * as actions from "../../store/actions/actions";

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
      <div className="FruitDetails">
        <button className="BackButton" onClick={this.BackHanlder}>
          &#8249; Back
        </button>
        <h1>Fruit info</h1>
        <FruitHeader
          photoSrc={this.props.fruits[this.props.match.params.id - 1].photoUrl}
          fruitName={this.props.fruits[this.props.match.params.id - 1].name}
          clicked={this.FavoritesHandler}
          favBtnStyle={this.state.favBtnType}
        />
        <h4>
          Description:
          <button className="EditButton" onClick={this.editHanlder}>
            <i className="fas fa-square-full"></i>
          </button>
        </h4>
        <textarea
          placeholder={
            this.props.fruits[this.props.match.params.id - 1].description
          }
          onChange={(event) => this.changeInputHandler(event)}
          disabled={this.state.editable}
        >
          {this.props.fruits[this.props.match.params.id - 1].description}
        </textarea>
      </div>
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
