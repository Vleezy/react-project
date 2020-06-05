import React, { useEffect,  useState } from "react";

import Products from "../components/productgrid/products";
import ProductData from "../data/products.json";

const Product = () => {

  const [processor, setProcessor] = useState('default');
  const [price, setPrice] = useState({min: 0, max: 999999999});
  const filterProcessor = p => {
    if (processor === "default") {
      return true;
    } 
    return processor === p.type
  }



  const filterPrice = p => {
    return p.price > price.min && p.price < price.max;
  }

  const items = ProductData.filter(filterProcessor).filter(filterPrice)
  

  return (
    <>
      <main class="heroimg"></main>
      <div class="grid__filter">
        <label for="filterSelect" class="filters">
          Filter by:
        </label>
        <select id="filterSelect" onChange={({target: { value }}) => setProcessor(value)}>
          <option value="default">All</option>
          <option value="Amd">AMD</option>
          <option value="Intel">Intel</option>
        </select>
      </div>
      <div class="gridpricefilter">
        <label for="priceSelect" class="filters">
          Filter Price:
        </label>
        <select id="priceSelect" onChange={({target: { value }}) => setPrice(value)}>
          <option value={{min:0, max:99999999999}}>All</option>
          <option value={{min:0, max:1000}}>$0 - $1000</option>
          <option value={{min:1000, max:1500}}>$1000 - $1500</option>
          <option value={{min:1500, max:2000}}>$1500 - $2000</option>
          <option value={{min:2000, max:99999999999}}>$2000 - max</option>
        </select>

        <Products items={items} />
      </div>
    </>
  );
};

export default Product;
