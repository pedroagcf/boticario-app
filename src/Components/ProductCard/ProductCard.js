import React from "react";
import { sendValueProd } from "../../actions/productActions";

//eu preciso inventar uma funçao que vai disparar a minha action
// sendValueProd()



const ProductCard = ({ produto }) => {
  const { imageUrl } = produto.images[0];
  return (
    <div className="product__card" onClick={() => sendValueProd(produto.Value)}>
      <img className="product__card__photo" src={imageUrl} />
      <p className="product__card__name">{produto.name}</p>
      <p className="product__card__price"><span className="product__card__price__currency">R$</span>{produto.Value}</p>
    </div>
  );
};

export default ProductCard;
