import React, { useState, useEffect } from "react";

import ProductCard from "../ProductCard/ProductCard";
import productStore from "../../stores/productStore";
import * as productActions from "../../actions/productActions";

const ProductsPage = () => {
  const [errors, setErrors] = useState({});
  const [products, setProducts] = useState(productStore.getProducts()); //goal: load all products if they haven't been loaded yet
  // const [product, setProduct] = useState({
  //   name: "",
  //   images: [],
  //   value: "",
  // });

  useEffect(() => {
    productStore.addChangeListener(onChange);

    if (products.length === 0) {
      productActions.loadCourse();
    }

    return () => productStore.removeChangeListener(onChange);
  }, [products.length]);

  function onChange() {
    setProducts(productStore.getProducts());
  }

  return (
    <section className="products">
      <h1 className="products__category">Ultimos Produtos</h1>
      {products.map((produto, key) => (
        <ProductCard produto={produto} key={key} />
      ))}
    </section>
  );
};

export default ProductsPage;
