import React from "react";
import Card from "../Card/Card";

const TopRated = () => {
  return (
    <div className="toprated">
      <h1>TOP RATED SALES</h1>

      <div className="toprated-cards">
        <Card
          heading="Puma"
          shoeType="Walking Shoe"
          price="200"
          rating="5 "
          img="./assert/shoe1.jpeg"
        />

        <Card
          heading="Puma"
          shoeType="Walking Shoe"
          price="200"
          rating="5 "
          img="./assert/shoe1.jpeg"
        />

        <Card
          heading="Puma"
          shoeType="Walking Shoe"
          price="200"
          rating="5 "
          img="./assert/shoe1.jpeg"
        />
      </div>
    </div>
  );
};

export default TopRated;
