import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react';
import { updateProductStore } from './store';


class App extends Component {

  addToCart = (product) => {
    updateProductStore(product);
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>{this.props.data.title}</h1>
        {this.props.data.products.map((product, index) =>
          <div key={index}>
            <p>{this.props.data.name} : {product.name}</p>
            <p>{this.props.data.quantity} : {product.quantity}</p>
            <button onClick={this.addToCart.bind(this,product)} type="button">addToCart</button>
            <hr />
          </div>
        )}

      </div>
    );
  }
}

export default observer(App);
