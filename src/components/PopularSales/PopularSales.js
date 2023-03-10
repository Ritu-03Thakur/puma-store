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
          rating="4.5"
          img="./assert/shoe1b.png"
        />

        <Sales
          heading="Puma"
          shoeType="Walking Shoe"
          price="200"
          rating="4.5"
          img="./assert/shoe2b.png"
        />+

        <Sales
          heading="Puma"
          shoeType="Walking Shoe"
          price="200"
          rating="4.5"
          img="./assert/shoe3b.png"
        />
      </div>
    </div>
  );
};

export default PopularSales;
