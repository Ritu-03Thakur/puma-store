import React from 'react'
import Card  from '../Card/Card' ; 

const TopRated = () => {
  return (
    <div className='toprated'>
      <h1>TOP RATED SALES</h1>
       <Card 
        heading = "Puma"
      shoeType = "Walking Shoe"
      price = "200"
      rating = "5 "
      img = "logo.png"
      />

       <Card  
       heading = "Puma"
      shoeType = "Walking Shoe"
      price = "200"
      rating = "5 "
      img = "logo.png"
      />

       <Card  
       heading = "Puma"
      shoeType = "Walking Shoe"
      price = "200"
      rating = "5 "
      img = "logo.png"
      />
    </div>
  )
}

export default TopRated
