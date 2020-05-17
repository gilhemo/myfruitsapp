import * as actionTypes from "./actionTypes";
import axios from "axios";

export const setFruits = (fruits) => {
  return {
    type: actionTypes.SET_FRUITS,
    fruits: fruits,
  };
};

export const initFruits = () => {
  return (dispatch) => {
    axios
      .get(
        "https://gist.githubusercontent.com/ggordonutech/c04f47fcdad76f8e5e77ee38a9614773/raw/1034ee607ed0971767c3cff97b595bfe1f8a6323/fruits.json"
      )
      .then((response) => {
        dispatch(setFruits(response.data));
      })
      .catch((error) => {});
  };
};

export const addFavorites = (favorite) => {
  return {
    type: actionTypes.ADD_FAVORITES,
    favorite: favorite,
  };
};

export const removeFavorites = (favId) => {
  return {
    type: actionTypes.REMOVE_FAVORITES,
    favId: favId,
  };
};

export const changeHandler = (val, id) => {
  return {
    type: actionTypes.CHANGE_HANDLER,
    val: val,
    id: id,
  };
};
