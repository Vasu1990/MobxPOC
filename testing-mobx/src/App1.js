import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react';
import {getStore} from './store';


class App1 extends Component {

  constructor() {
    super();
    this.data = getStore();
  }

  render() {
    return (
      <div className="App">
      
      <h1>{this.props.data.title}</h1>


        {this.data.sharedData.productList.map((product, index) =>
                      <div key={index}>
                        <p>{this.props.data.name} : {product.name}</p>
                        <p>{this.props.data.quantity} : {product.quantity}</p>
                        <hr/>
                      </div>
                  )}
      </div>
    );
  }
}

export default observer(App1);
