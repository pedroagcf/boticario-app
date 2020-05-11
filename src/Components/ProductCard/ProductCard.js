import React from "react";

const ProductCard = ({ produto }) => {
  return <div className="products__Card">{produto.name}</div>;
};

export default ProductCard;
