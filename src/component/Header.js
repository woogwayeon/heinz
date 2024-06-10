import { Routes, Route, Link } from 'react-router-dom'
import './../css/default.css';

import logo from "./../images/logo.png"
import { useState } from 'react';


function Header() {
    return (
      <div className="header">
        <div className='header-area'>
          <div className="inner">
            <h1><Link to='/'><img src={logo} alt="" /></Link></h1>
            <nav classList="gnb">
                <ul>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/who">Who We Are</Link></li>
                    <li><Link to="/recipe">Recipes</Link></li>
                </ul>
            </nav>
            <button><Link to="/login">Login</Link></button>
          </div>
        </div>
        <div className='blank'>0</div>
      </div>
    );
  }
  
export default Header;
  