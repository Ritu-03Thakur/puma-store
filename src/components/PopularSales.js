import React from "react";
import {PopSales} from "./Data.js"
import Sales from "./Sales";

const PopularSales = () => {
  

  return (
    <div className="popularSales">
      <h1>POPULAR SALES</h1>
      
      <div className="popularSales-cards">
        {PopSales.map((item) => (
          <Sales item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default PopularSales;
