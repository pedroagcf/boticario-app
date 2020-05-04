import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductsPage = () => {
  return (
    <section className="products">
      <h1 className="products__category">Ultimos Produtos</h1>
      <ProductCard />
    </section>
  );
};

export default ProductsPage;
