import React  from 'react'
import Navbar from './Navbar/Navbar'
import PopularSales from './PopularSales/PopularSales';
import TopRated from './TopRated/TopRated';
import Explore from './Explore/Explore';
import HomeSection from './HeroSection/HomeSection';

import "./Home.scss" ; 


const Home = () => {


  return (
    <div className='home'>
      <Navbar   />
      <HomeSection  />
      <PopularSales   />
      < Explore 
      
      head = "HIGHLIGHTS" 
      choice = "PUMA AIR WITH LIMITLESS CHOICES"
      desc = "asfkjdasfkjd"
      link = "https://in.puma.com"
      img="./images/shoe1b.png"
      
      />
      <TopRated />
      < Explore 
      head = "FEATURED" 
      choice = "PUMA AIR WITH LIMITLESS CHOICES"
      desc = "asfkjdasfkjd"
      link = "https://in.puma.com"
      img="./images/shoe1b.png"
      />
      
    </div>
  )
}

export default Home
