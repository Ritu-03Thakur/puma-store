import React from 'react'
import Button from '@mui/material/Button';

const Explore = (props) => {
  return (
    <div className='explore'>
      <h2>{props.head}</h2>
      <h3>{props.choice}</h3>
   <p>{props.desc}</p>
   <a href={props.link}>
   <Button className="info" size="small" variant="contained"  style={{backgroundColor : "#113f3a"  }}  >Explore More</Button>
   
   </a>
    <div className="images">
    <img src= {props.img} alt="" />
    </div>
    </div>
  )
}

export default Explore
