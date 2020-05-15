import React from "react";

const ProductCard = ({ produto }) => {
  const { imageUrl } = produto.images[0];
  return (
    <div className="product__card">
      <img className="product__card__photo" src={imageUrl} />
      <p className="product__card__name">{produto.name}</p>
      <p className="product__card__price"><span className="product__card__price__currency">R$</span>{produto.Value}</p>
      <button className="btn-test">test button</button>
    </div>
  );
};

export default ProductCard;
