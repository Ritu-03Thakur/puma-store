import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from "@mui/icons-material/LocalMall" ; 
import { Link } from "react-router-dom";


const Navbar = () => {

  return (
    <div className='navbar'>
      <div className="img" >
        <img src="./assert/shoe1.jpeg" alt=""   />
      </div>
      <div className="icons">
        
     <SearchIcon />
     <FavoriteBorderIcon />
     <Link to="/cartPage">
     <div className="cart">
       
     <LocalMallIcon  />
     
     <span>0</span>
     </div>
     </Link>
    
      </div>
    </div>
  )
}

export default Navbar
