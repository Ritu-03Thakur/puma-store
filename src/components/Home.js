import React from "react";
import Navbar from "./Navbar";
import PopularSales from "./PopularSales";
import TopRated from "./TopRated";
import Explore from "./Explore";
import HomeSection from "./HomeSection";
import { Topdata, PopSales } from "./Data";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HomeSection />
      <PopularSales PopSales={PopSales} />
      <Explore
        head="HIGHLIGHTS"
        choice="Puma Air With Limitless Choices"
        desc="Step into the world of style and comfort with Puma's latest collection of shoes.Puma store offers an array of footwear that seamlessly blends fashion and function. "
        link="https://in.puma.com"
        img="./assert/Fshoe3.png"
      />
      <TopRated Topdata={Topdata} />
      <Explore
        head="FEATURED"
        choice="Puma Air With Limitless Choices"
        desc="Step into the world of style and comfort with Puma's latest collection of shoes.Puma store offers an array of footwear that seamlessly blends fashion and function. "
        link="https://in.puma.com"
        img="./assert/Fshoe3.png"
      />
    </div>
  );
};

export default Home;
