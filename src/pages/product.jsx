import React from "react";
import Products from "../components/productgrid/products";

const Product = () => {
  return (
    <>
      <main class="heroimg"></main>
      <div class="grid__filter">
        <label for="filterSelect" class="filters">
          Filter by:
        </label>
        <select id="filterSelect" onchange="filterItems()">
          <option value="default">All</option>
          <option value="AMD">AMD</option>
          <option value="Intel">Intel</option>
        </select>
      </div>
      <div class="gridpricefilter">
        <label for="priceSelect" class="filters">
          Filter Price:
        </label>
        <select id="priceSelect" onchange="priceItems()">
          <option value="default">All</option>
          <option value="0-1000">$0 - $1000</option>
          <option value="1000-1500">$1000 - $1500</option>
          <option value="1500-2000">$1500 - $2000</option>
          <option value="2000-10000">$2000 - max</option>
        </select>
        <Products />
      </div>
    </>
  );
};

export default Product;
