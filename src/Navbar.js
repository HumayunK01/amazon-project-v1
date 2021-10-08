import React from 'react'
import './Navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder';
function Navbar() {
    return (
        <div className="header__navdown">
            <div className="header__options"><ReorderIcon />
        </div>
            <div className="header__nav">
               <p>All</p>
               <p>Mobiles</p>
               <p>Best Sellers</p>
               <p>Fashion</p>
               <p>Customer Service</p>
               <p>Electronics</p>
               <p>Prime</p>
               <p>Today's Deals</p>
               <p>Amazon Pay</p>
               <p>Computers</p>
               <p>New Releases</p>
               <p>Home & Kitchen</p>
               <p>Books</p>
               <p>Toys & Games</p>
               <p>Coupons</p>
               <p>Sell</p>
               <p>Mobiles</p>

               <img className="header__navlogo" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Jup21/P1/SWM1._CB640760428_.jpg" alt="amazon"/>
            </div>
        </div>
    )
}

export default Navbar
