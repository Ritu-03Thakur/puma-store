import React from "react";
import Card from "./Card";

const TopRated = (props) => {
  
  return (
    <div className="toprated">
      <h1>TOP RATED SALES</h1>

      <div className="toprated-cards">
        {props.Topdata.map((rated) => (
          <Card rated={rated} key={rated.id} />
        ))}
      </div>
    </div>
  );
};

export default TopRated;
