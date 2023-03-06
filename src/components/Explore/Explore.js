import React from 'react'

const Explore = (props) => {
  return (
    <div className='explore'>
      <h2>{props.head}</h2>
      <h3>{props.choice}</h3>
   <p>{props.desc}</p>
   <a href={props.link}>
   <button>Explore More</button>
   </a>

    <img src= {props.img} alt="" />
    </div>
  )
}

export default Explore
