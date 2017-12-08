import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react';


class App1 extends Component {

  render() {
    return (
      <div className="App">
      
        <h1>Component2</h1>

        {this.props.store.counter}


      </div>
    );
  }
}

export default observer(App1);
