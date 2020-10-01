import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  fruits: null,
  favorites: [],
  isAuth: false,
  token: null,
  userId: null,
  authRedirectPath: '/',
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

const authSignup = (state, action) => {
  return updateObject(state, {
    error: null,
    isAuth: false,
    authRedirectPath: '/fruits',
  });
};

const authLogin = (state, action) => {
  return updateObject(state, {
    token: action.token,
    userId: action.userId,
    isAuth: true,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null,
    userId: null,
    isAuth: false,
    authRedirectPath: '/',
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
    case actionTypes.AUTH_SIGNUP:
      return authSignup(state, action);
    case actionTypes.AUTH_LOGIN:
      return authLogin(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
