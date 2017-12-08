import { extendObservable } from 'mobx';

let store = undefined;

export const createStore = () => {
  const data = store = {};
  data.sharedData = {};
  data.sharedData.productList = [];

  store = extendObservable(this, data);
  return store;
}


export const updateProductStore = (data) => {
  let selectedProduct = undefined;

  if (store.sharedData.productList.length > 0) {
    selectedProduct = getSelectedProduct(data);
    if(selectedProduct) {
      selectedProduct.quantity +=data.quantity;
    } else {
      addToProductStore(data);
    }
  } else {  
    addToProductStore(data);
  }
}


export const getStore = () => {
  if (store) {
    return store
  } else {
    store = createStore();
  }
  return store;
}

const getSelectedProduct = (data) => {
  for (let i = 0; i < store.sharedData.productList.length; i++) {
    if (store.sharedData.productList[i].id === data.id) {
      return store.sharedData.productList[i];
    }
  }
}


const addToProductStore = (data) => {
  store.sharedData.productList.push(data);
}