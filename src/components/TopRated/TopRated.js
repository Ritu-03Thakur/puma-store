import React from "react";
import Card from "../Card/Card";

const TopRated = () => {
  const data = [
    {
      id: 1,
      heading: "Puma",
      shoeType: "Walking Shoe",
      price: 200,
      rating: 5,
      img: "./assert/shoe1b.png",
      color : "red"
    },
    {
      id: 2,
      heading: "Puma",
      shoeType: "Walking Shoe",
      price: 200,
      rating: 5,
      img: "./assert/shoe1b.png",
      color : "red"
    },
    {
      id: 3,
      heading: "Puma",
      shoeType: "Walking Shoe",
      price: 200,
      rating: 5,
      img: "./assert/shoe1b.png",
      color : "red"
    },
  ];
  return (
    <div className="toprated">
      <h1>TOP RATED SALES</h1>

      <div className="toprated-cards">
        {data.map((rated) => (
          <Card rated={rated} key={rated.id} />
        ))}
      </div>
    </div>
  );
};

export default TopRated;
