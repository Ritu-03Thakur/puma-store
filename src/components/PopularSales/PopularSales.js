import React from "react";
import Sales from "../Sales/Sales";

const PopularSales = () => {
  return (
    <div className="popularSales">
      <h1>POPULAR SALES</h1>
      <div className="popularSales-cards">
        <Sales
          heading="Puma"
          shoeType="Walking Shoe"
          price="200"
          rating="5 +"
          img="./assert/shoe1.jpeg"
        />

        <Sales
          heading="Puma"
          shoeType="Walking Shoe"
          price="200"
          rating="5 +"
          img="./assert/shoe1.jpeg"
        />

        <Sales
          heading="Puma"
          shoeType="Walking Shoe"
          price="200"
          rating="5 +"
          img="./assert/shoe1.jpeg"
        />
      </div>
    </div>
  );
};

export default PopularSales;
