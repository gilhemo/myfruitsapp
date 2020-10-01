import React, { Component } from 'react';
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

class App extends Component {
  componentDidMount() {
    this.props.onInitFruits(this.props.token);
    const token = localStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiryDate');
    if (!token || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      this.logoutHandler();
      return;
    }
    const userId = localStorage.getItem('userId');
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    this.setState({ isAuth: true, token: token, userId: userId });
    this.setAutoLogout(remainingMilliseconds);
  }

  logoutHandler = () => {
    this.props.onLogout();
  };

  loginHandler = (event, authData) => {
    event.preventDefault();
    this.props.onLogin(authData);
  };

  signupHandler = (event, authData) => {
    event.preventDefault();
    this.props.onSignup(authData);
    this.props.history.replace('/');
  };

  setAutoLogout = (milliseconds) => {
    setTimeout(() => {
      this.logoutHandler();
    }, milliseconds);
  };

  render() {
    let routes = (
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <Login {...props} onLogin={this.loginHandler} />}
        />
        <Route
          path="/signup"
          exact
          render={(props) => (
            <Signup {...props} onSignup={this.signupHandler} />
          )}
        />
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.isAuth) {
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

    return <Layout isAuth={this.props.isAuth}>{routes}</Layout>;
  }
}

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
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
