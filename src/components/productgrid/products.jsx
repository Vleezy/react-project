import React from "react";
import "./products.css";

const Products = ({items}) => {
  return (
    <div class="container">
      {items.map((productDetail, index) => {
        return (
          <div class="grid-item ">
            <h2>{productDetail.name}</h2>
            <img src={productDetail.img} alt="ok"></img>
            <div className="p">${productDetail.price}</div>
            <span class="item_type">{productDetail.type}</span>
            <div>{productDetail.specs}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
