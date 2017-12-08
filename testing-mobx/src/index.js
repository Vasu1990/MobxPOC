import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductList from './App';
import MiniCart from './App1';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from './store';


createStore();

window.reactComponents = {};
window.reactComponents.productList = {
    guid: 'root',
    data: {
        title : "Product List Component",
        quantity : "Quantity",
        name : "Name",
        products  :[{
            name:"productt1" ,
            quantity : 10,
            id: 1
        },
        {
            name:"productt2" ,
            quantity : 18,
            id: 2
        }
        ]

    }
};
window.reactComponents.miniCart = {
    guid: 'root1',
    data: {
        title : "Mini Cart Component",
        quantity : "Quantity",
        name : "Name"
    }
};




ReactDOM.render(<ProductList data={window.reactComponents.productList.data} />, document.getElementById(window.reactComponents.productList.guid));
ReactDOM.render(<MiniCart data={window.reactComponents.miniCart.data} />, document.getElementById(window.reactComponents.miniCart.guid));

registerServiceWorker();
