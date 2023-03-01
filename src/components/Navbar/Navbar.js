import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="img">
        <img src="" alt="" />
      </div>
      <div className="icons">
     <SearchIcon />
     <FavoriteBorderIcon />
     <ShoppingCartIcon />
    
      </div>
    </div>
  )
}

export default Navbar
