import React from 'react'
import Button from "@mui/material/Button";

const HomeSection = () => {
  return (
    <div className='home-section'>
       <div className="fimg">
        <img src="./assert/h.jpeg" alt="" />
       </div>
       <Button
              className="info"
              size="large"
              variant="contained"
              style={{ backgroundColor: "#113f3a" }}
            >
             Explore More 
            </Button>
    </div>
  )
}

export default HomeSection
