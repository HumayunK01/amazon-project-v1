import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="header">
            <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon"/>
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                {/* Material UI */}
                <SearchIcon className="header__searchIcon"/>
            </div>       

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionlineOne">Hello, Sign In</span>
                    <span className="header__optionlineTwo">Accounts & List</span>
                </div>
                <div className="header__option">
                    <span className="header__optionlineOne">Returns</span>
                    <span className="header__optionlineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionlineOne">Your</span>
                    <span className="header__optionlineTwo">Prime</span>
                </div>  
            </div>

            <Link to="/checkout">
            <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionlineTwo header__basketCount">0</span>
            </div>   
            </Link>  
        </div>
        
    )
}

export default Header
