import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from "@mui/icons-material/LocalMall" ; 
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


const Navbar = () => {
 // const count = useSelector((state) => state.cart.value)
  const count = 0

  return (
    <div className='navbar'>
      <div className="img" >
        <img src="./images/logo.png" alt=""   />
      </div>
      <div className="icons">
        
     <SearchIcon  sx={{color: "#113f3a"}}/>
     <FavoriteBorderIcon  sx={{color: "#113f3a"}}/>
     <Link to="/cartPage">
     <div className="cart">
       
     <LocalMallIcon   sx={{color: "#113f3a"}}/>
     
     <span>{count}</span>
     </div>
     </Link>
    
      </div>
    </div>
  )
}

export default Navbar
