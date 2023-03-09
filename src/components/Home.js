import React  from 'react'
import Navbar from './Navbar/Navbar'
import PopularSales from './PopularSales/PopularSales';
import TopRated from './TopRated/TopRated';
import Explore from './Explore/Explore';

import "./Home.scss" ; 


const Home = () => {


  return (
    <div className='home'>
      <Navbar   />
      <PopularSales   />
      < Explore 
      
      head = "HIGHLIGHTS" 
      choice = "PUMA AIR WITH LIMITLESS CHOICES"
      desc = "asfkjdasfkjd"
      link = "https://in.puma.com"
      img="./assert/shoe1.jpeg"
      
      />
      <TopRated />
      < Explore 
      head = "HIGHLIGHTS" 
      choice = "PUMA AIR WITH LIMITLESS CHOICES"
      desc = "asfkjdasfkjd"
      link = "https://in.puma.com"
      img="./assert/shoe1.jpeg"
      />
      
    </div>
  )
}

export default Home
