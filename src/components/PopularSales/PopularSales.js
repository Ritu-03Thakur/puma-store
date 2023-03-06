import React from 'react'
import Sales from '../Sales/Sales' ; 

const PopularSales = () => {
  return (
    <div className='popularSales'>
      <h1>POPULAR SALES</h1>

      <Sales 
      heading = "Puma"
      shoeType = "Walking Shoe"
      price = "200"
      rating = "5 +"
      img = "logo.png"
      />

      <Sales 
      heading = "Puma"
      shoeType = "Walking Shoe"
      price = "200"
      rating = "5 +"
      img = "logo.png"
      />
      
      <Sales 
      heading = "Puma"
      shoeType = "Walking Shoe"
      price = "200"
      rating = "5 +"
      img = "logo.png"
      />
     
    </div>
  )
}

export default PopularSales
