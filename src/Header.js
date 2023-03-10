//will have the amazon log, search bar, sign in, and link to shopping cart page
import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import {auth} from './firebase.js';


//rfce renders functions  component RFC---
function Header() {

const [{ basket, user}, dispatch] = useStateValue();


const handleAuthenticator = () => {
  if(user) {
    auth.signOut();
  }
}

  return (
    <div className="header">
      
      <Link to="/">
        <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="hello" />
      </Link>
      
  
      

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className='header__searchIcon'/>
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
        <div onClick={handleAuthenticator} className="header__option">
            <span className="header__optionLineOne">Hello {user? user.email: "Guest"} </span>
            <span  className="header__optionLineTwo">{user?'Sign Out':'Sign In'}</span>
        </div>
        </Link>
    
        <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span  className="header__optionLineTwo">And Orders</span>
        </div>

        <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span  className="header__optionLineTwo">Prime</span>
        </div>
        <Link to='/checkout'>
        <div className="header__optionBasket">
            <ShoppingCartIcon/>
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
