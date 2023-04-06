import React from "react";
import Sales from "./Sales";

const PopularSales = (props) => {
  

  return (
    <div className="popularSales">
      <h1>POPULAR SALES</h1>
      
      <div className="popularSales-cards">
        {props.PopSales.map((item) => (
          <Sales item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default PopularSales;
