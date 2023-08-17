import React from 'react'
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';

const HomeSection = () => {

  return (
    <>
   
    <div className="home-section">
<div className="section-item">
  <div className="video-item">
    <video
      autoPlay
      muted
      loop
    >
      <source src="./assert/home.mp4" type="video/mp4" />
    </video>
   
  </div>
</div>
</div>
     <Link to={"https://in.puma.com"}  className="info">
       <Button
           
              size="large"
              variant="contained"
              style={{ backgroundColor: "#113f3a" }}
            >
             Explore More 
            </Button>
     </Link>
  </>
  )
}

export default HomeSection

