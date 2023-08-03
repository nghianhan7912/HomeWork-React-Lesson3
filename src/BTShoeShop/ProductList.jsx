import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ ListData }) => {
  return (
    <div className="row">
      {ListData.map((v) => (
        <ProductItem v={v} key={v.id} />
      ))}
    </div>
  );
};

export default ProductList;
