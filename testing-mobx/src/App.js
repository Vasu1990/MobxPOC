import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react';


class App extends Component {

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      
        <h1>Component1</h1>

        {this.props.store.counter}

        <button onClick={this.props.store.onIncrement} type="button">Increment</button>
        <button onClick={this.props.store.onDecrement} type="button">Decrement</button>


      </div>
    );
  }
}

export default observer(App);
