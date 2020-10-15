import * as actionTypes from './actionTypes';

export const setFruits = (fruits) => {
  return {
    type: actionTypes.SET_FRUITS,
    fruits: fruits,
  };
};

export const initFruits = (token) => {
  return (dispatch) => {
    fetch('http://localhost:8080/feed/fruits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      Authorization: 'Bearer ' + token,
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('Failed to fetch fruits.');
        }
        return res.json();
      })
      .then((resData) => {
        dispatch(setFruits(resData.fruits));
      })
      .catch((err) => console.log(err));
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

export const updateFruit = (val, fruitId) => {
  return (dispatch) => {
    fetch('http://localhost:8080/feed/fruit/' + fruitId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: val,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        dispatch(changeHandler(val, fruitId));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const authSignup = () => {
  return {
    type: actionTypes.AUTH_SIGNUP,
  };
};

export const authLogin = (token, userId) => {
  return {
    type: actionTypes.AUTH_LOGIN,
    token: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const authLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expiryDate');
  localStorage.removeItem('userId');
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const login = (authData) => {
  return (dispatch) => {
    fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: authData.email,
        password: authData.password,
      }),
    })
      .then((res) => {
        if (res.status === 422) {
          throw new Error('Validation failed.');
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Could not authenticate you!');
        }
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        localStorage.setItem('token', resData.token);
        localStorage.setItem('userId', resData.userId);
        dispatch(authLogin(resData.token, resData.userId));
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem('expiryDate', expiryDate.toISOString());
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};

export const signup = (authData) => {
  return (dispatch) => {
    fetch('http://localhost:8080/auth/signup', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: authData.signupForm.email.value,
        password: authData.signupForm.password.value,
        name: authData.signupForm.name.value,
      }),
    })
      .then((res) => {
        if (res.status === 422) {
          throw new Error(
            "Validation failed. Make sure the email address isn't used yet!"
          );
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Creating a user failed!');
        }
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        dispatch(authSignup());
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail());
      });
  };
};
