import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App1 from './App1';
import registerServiceWorker from './registerServiceWorker';
import { extendObservable } from 'mobx';


const appState = extendObservable(this, {
    counter: 0,
})

appState.onIncrement = () => {
    this.counter++;
}

appState.onDecrement = () => {
    this.counter--;
}

ReactDOM.render(<App store={appState} />, document.getElementById('root'));
ReactDOM.render(<App1 store={appState} />, document.getElementById('root1'));

registerServiceWorker();
