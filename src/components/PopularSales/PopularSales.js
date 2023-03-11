import React from "react";
import Sales from "../Sales/Sales";

const PopularSales = () => {
  const data = [
    {
      id: 1,
      heading: "Puma",
      shoeType: "Walking Shoe",
      price: 200,
      rating: 4.5,
      img: "./assert/shoe1b.png",
      img2: "./assert/shoe1a.png",
      color : "red"
    },
    {
      id: 2,
      heading: "Puma",
      shoeType: "Walking Shoe",
      price: 200,
      rating: 4.5,
      img: "./assert/shoe1b.png",
      img2: "./assert/shoe1a.png",
      color : "red"
    },
    {
      id: 3,
      heading: "Puma",
      shoeType: "Walking Shoe",
      price: 200,
      rating: 4.5,
      img: "./assert/shoe1b.png",
      img2: "./assert/shoe1a.png",
      color : "red"
    },
  ];

  return (
    <div className="popularSales">
      <h1>POPULAR SALES</h1>
      <div className="popularSales-cards">
        {data.map((item) => (
          <Sales item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default PopularSales;
