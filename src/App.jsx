import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./hoc/Layout/Layout";
import "./App.css";

import Fruits from "./Containers/Fruits/Fruits";
import FruitDetails from "./Containers/FruitDetails/FruitDetails";
import Favorites from "./Containers/Favorites/Favorites";

import * as actions from "./store/actions/actions";
import Spinner from "./Components/UI/Spinner/Spinner";

class App extends Component {
  componentDidMount() {
    this.props.onInitFruits();
  }

  render() {
    let routes = <Spinner />;
    if (this.props.fruits) {
      routes = (
        <Switch>
          <Route path="/favorites" component={Favorites} />
          <Route path="/:id" component={FruitDetails} />
          <Route path="/" exact component={Fruits} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return <Layout>{routes}</Layout>;
  }
}

const mapStateToProps = (state) => {
  return {
    fruits: state.reducer.fruits,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitFruits: () => dispatch(actions.initFruits()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
