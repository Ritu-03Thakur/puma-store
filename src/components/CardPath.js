import React from 'react'
import { LocalMall, ArrowForwardIos} from '@mui/icons-material'
import { Link } from 'react-router-dom'

const CardPath = () => {
  return (
    <>
      
<nav className="card-path" aria-label="Breadcrumb">
  <ul className="card-path-items">
    <li className="path-one">
      <Link to={"/cartPage"} className="path-one-link">
        <LocalMall sx={{fontSize :'20px' , color : "#4a5568"}}/>
        Cart
      </Link>
    </li>
    <li>
      <div className="path-two">
        <ArrowForwardIos />
        <Link to={"/delAddress"} className='path-two-link'>Contact</Link>
      </div>
    </li>
    <li aria-current="page">
      <div className="path-end">
      <ArrowForwardIos />
        <span >Payment</span>
      </div>
    </li>
  </ul>
</nav>

    </>
  )
}

export default CardPath
