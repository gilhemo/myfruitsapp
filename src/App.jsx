import React, { useEffect } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';

import Fruits from './Containers/Fruits/Fruits';
import FruitDetails from './Containers/FruitDetails/FruitDetails';
import Favorites from './Containers/Favorites/Favorites';
import Login from './Containers/Auth/Login';
import Signup from './Containers/Auth/Signup';
import Logout from './Containers/Auth/logout';

import * as actions from './store/actions/actions';

const app = (props) => {
  useEffect(() => {
    props.onInitFruits();
    const token = localStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiryDate');
    if (!token || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      logoutHandler();
      return;
    }
    const userId = localStorage.getItem('userId');
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    props.onAuthLogin(token, userId);
    setAutoLogout(remainingMilliseconds);
  }, []);

  const logoutHandler = () => {
    props.onLogout();
  };

  const loginHandler = (event, authData) => {
    event.preventDefault();
    props.onLogin(authData);
  };

  const signupHandler = (event, authData) => {
    event.preventDefault();
    props.onSignup(authData);
    props.history.replace('/');
  };

  const setAutoLogout = (milliseconds) => {
    setTimeout(() => {
      logoutHandler();
    }, milliseconds);
  };

  let routes = (
    <Switch>
      <Route
        path="/"
        exact
        render={(props) => <Login {...props} onLogin={loginHandler} />}
      />
      <Route
        path="/signup"
        exact
        render={(props) => <Signup {...props} onSignup={signupHandler} />}
      />
      <Redirect to="/" />
    </Switch>
  );
  if (props.isAuth) {
    routes = (
      <Switch>
        <Route path="/logout" component={Logout} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/:id" component={FruitDetails} />
        <Route path="/" exact component={Fruits} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return <Layout isAuth={props.isAuth}>{routes}</Layout>;
};

const mapStateToProps = (state) => {
  return {
    fruits: state.reducer.fruits,
    isAuth: state.reducer.isAuth,
    authRedirectPath: state.reducer.authRedirectPath,
    token: state.reducer.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitFruits: (token) => dispatch(actions.initFruits(token)),
    onSignup: (authData) => dispatch(actions.signup(authData)),
    onLogin: (authData) => dispatch(actions.login(authData)),
    onLogout: () => dispatch(actions.authLogout()),
    onAuthLogin: (token, userId) => dispatch(actions.authLogin(token, userId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(app));
