//will have the amazon log, search bar, sign in, and link to shopping cart page
import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link , Router, useLocation} from 'react-router-dom';
//rfce renders functions  component RFC---
function Header() {
  return (
    <div className="header">
      
      <Link to="/">
        <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
      </Link>
      {/* </Router> */}

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className='header__searchIcon'/>
      </div>

      <div className="header__nav">
        <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span  className="header__optionLineTwo">Sign In</span>
        </div>
    
        <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span  className="header__optionLineTwo">And Orders</span>
        </div>

        <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span  className="header__optionLineTwo">Prime</span>
        </div>

        <div className="header__optionBasket">
            <ShoppingCartIcon/>
            <span className="header__optioniLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
