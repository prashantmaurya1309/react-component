// Problem Statement:
// Create a simple calculator with  functionalities:
// 1. Add
// 2. Substract

// Sepearate reducer, actions, store in different files.

import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import "./index.css";

// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props;
    return (
      <div>
        <span>{this.props.componentValue}</span>
        <button onClick={this.props.compnentClicKFunc}>Increase</button>
        {this.props.anandComponent}
        <button onClick={this.props.descreaseShowFunc}>Decrease</button>
      </div>
    );
  }
}

// Action
const increaseAction = { type: "INCREASE", data: "Anand" };
const decreaseAction = { type: "DESCREASE" };

// Reducer
function counterReducer(state = { count: 10, click: 1000, show: 95 }, action) {
  const count = state.count;
  switch (action.type) {
    case "INCREASE":
      return { ...state, count: count + 1 };
    case "DESCREASE":
      return { ...state, show: state.show - 1 };
    default:
      return state;
  }
}

// Store
// reducer == counter
const storeMain = createStore(counterReducer);

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    componentValue: state.count,
    componentClick: state.click,
    anandComponent: state.show
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    compnentClicKFunc: () => dispatch(increaseAction),
    descreaseShowFunc: () => dispatch(decreaseAction)
  };
}

// Connected Component
//HOC
const App = connect(mapStateToProps, mapDispatchToProps)(Counter);

ReactDOM.render(
  <Provider store={storeMain}>
    <App />
  </Provider>,
  document.getElementById("root")
);
