import React, { Component } from "react";
import ProductData from "../../data/products.json";
import "./products.css";

class products extends Component {
  render() {
    return (
      <>
        <div class="container">
          {ProductData.map((productDetail, index) => {
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
      </>
    );
  }
}

export default products;
