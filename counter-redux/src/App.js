import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux";
import { connect, Provider } from "react-redux";



const INCREMENT = "INCREMENT";
const incrementValue = () => {
  return {
    type: INCREMENT,
  };
};
export default class App extends React.Component {
  constructor(props){
  
  }
  render() {

    return (
      <div>
        <p className="total">{this.props.counter}</p>
        <button>+</button>
        <button>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
return state
}
const mapDispatchToProps = () => {
return{
  increment(){ dispatch(incrementValue())}
}
}
connect()(App)