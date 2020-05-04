import React from "react";

import ProductsPage from "../ProductsPage/ProductsPage";

const HomePage = () => {
  return (
    <React.Fragment>
      <section className="homePage">
        <ProductsPage />
      </section>
    </React.Fragment>
  );
};

export default HomePage;
