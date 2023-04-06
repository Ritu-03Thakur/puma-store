import React  from 'react'
import Navbar from './Navbar'
import PopularSales from './PopularSales';
import TopRated from './TopRated';
import Explore from './Explore';
import HomeSection from './HomeSection';
import {Topdata , PopSales} from "./Data" ; 

const Home = () => {


  return (
    <div className='home'>
      <Navbar   />
       <HomeSection />
      <PopularSales   PopSales = {PopSales}/>
      < Explore 
      
      head = "HIGHLIGHTS" 
      choice = "PUMA AIR WITH LIMITLESS CHOICES"
      desc = "asfkjdasfkjd"
      link = "https://in.puma.com"
      img="./assert/Fshoe3.png"
      
      />
      <TopRated Topdata = {Topdata}/>
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
