import React  from 'react'
import Navbar from './Navbar'
import PopularSales from './PopularSales';
import TopRated from './TopRated';
import Explore from './Explore';
import HomeSection from './HomeSection';

import "./Home.scss" ; 


const Home = () => {


  return (
    <div className='home'>
      <Navbar   />
       <HomeSection />
      <PopularSales   />
      < Explore 
      
      head = "HIGHLIGHTS" 
      choice = "PUMA AIR WITH LIMITLESS CHOICES"
      desc = "asfkjdasfkjd"
      link = "https://in.puma.com"
      img="./assert/Fshoe3.png"
      
      />
      <TopRated />
      < Explore 
      head = "FEATURED" 
      choice = "PUMA AIR WITH LIMITLESS CHOICES"
      desc = "asfkjdasfkjd"
      link = "https://in.puma.com"
      img="./assert/Fshoe3.png"
      />
      
    </div>
  )
}

export default Home
