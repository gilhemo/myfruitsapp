import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  fruits: null,
  favorites: [],
};

const setFruits = (state, action) => {
  return updateObject(state, {
    ...state,
    fruits: action.fruits,
  });
};

const addFavorites = (state, action) => {
  return updateObject(state, {
    favorites: state.favorites.concat(action.favorite),
  });
};

const removeFavorites = (state, action) => {
  return updateObject(state, {
    favorites: state.favorites.filter((fav) => fav.key !== action.favId),
  });
};

const changeHanlder = (state, action) => {
  const newFruits = state.fruits;
  newFruits[action.id].description = action.val;
  return updateObject(state, {
    fruits: newFruits,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FRUITS:
      return setFruits(state, action);
    case actionTypes.ADD_FAVORITES:
      return addFavorites(state, action);
    case actionTypes.REMOVE_FAVORITES:
      return removeFavorites(state, action);
    case actionTypes.CHANGE_HANDLER:
      return changeHanlder(state, action);
    default:
      return state;
  }
};

export default reducer;
