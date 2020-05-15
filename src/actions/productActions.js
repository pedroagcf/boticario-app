import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import axios from "axios";

export function loadCourse() {
  return axios
    .get("https://5ea8cf740ebc1d001649028b.mockapi.io/api/v1/produtos")
    .then((produtos) => {
      dispatcher.dispatch({
        actionType: actionTypes.LOAD_PRODUCTS,
        produtos: produtos.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

export function sendValueProd(valor) {
  return dispatcher.dispatch({
    actionType: actionTypes.ADD_CART_VALUE,
    valorProduto: valor,
  });
}
