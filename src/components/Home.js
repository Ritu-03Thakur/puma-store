import React  from 'react'
import Navbar from './Navbar/Navbar'
import PopularSales from './PopularSales/PopularSales';
import TopRated from './TopRated/TopRated';
import Explore from './Explore/Explore';


import "./Home.scss" ; 


const Home = () => {

  
  


  return (
    <div className='home'>
      <Navbar 
      
       />
      <PopularSales   />
      < Explore 
      
      head = "HIGHLIGHTS" 
      choice = "PUMA AIR WITH LIMITLESS CHOICES"
      desc = "asfkjdasfkjd"
      link = ""
      img = "logo.png"
      
      />
      <TopRated />
      < Explore 
      head = "HIGHLIGHTS" 
      choice = "PUMA AIR WITH LIMITLESS CHOICES"
      desc = "asfkjdasfkjd"
      link = ""
      img = "logo.png"
      />

    </div>
  )
}

export default Home
