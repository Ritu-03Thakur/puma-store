import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from "@mui/icons-material/LocalMall" ; 



const Navbar = () => {

  return (
    <div className='navbar'>
      <div className="img" >
        <img src="logo.png" alt=""  />
      </div>
      <div className="icons">
        
     <SearchIcon />
     <FavoriteBorderIcon />
     <div className="cart">
      
     <LocalMallIcon  />
     
     <span>0</span>
     </div>
    
      </div>
    </div>
  )
}

export default Navbar
