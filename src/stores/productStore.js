import { EventEmitter } from "events";

import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _produtos = [];
let _valorProdutos = 0;

class ProductStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  getProducts() {
    return _produtos;
  }
  getValorProdutos() {
    return _valorProdutos;
  }
}

const store = new ProductStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.LOAD_PRODUCTS:
      _produtos = action.produtos;
      store.emitChange();
      break;

    case actionTypes.ADD_CART_VALUE:
      _valorProdutos = action.valorProduto;
      store.emitChange();
      break;


    default:
    //nao faz nada!
  }
});

export default store;
