import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react';
import './../css/default.css';

function Main() {
    return (
      <div className="main">
        <div className='visual-con v1'>
          <div className='inner'>
            <div className='visual-para'>
              <h2>STAY IN ROOP&#33;</h2>
              <p>All your favorite tastes, plus some new goodies</p>
            </div>
            <Link to="/recipe" className='main-images'>
            <img src="https://github.com/woogwayeon/heinz/blob/main/images/visual3.png?raw=true" alt=""/>
            </Link> 
          </div>

        </div>
        <div className='visual-con v2'>
          <div className="inner">
            <Link to="/who" className='main-images'>
            <img src="https://github.com/woogwayeon/heinz/blob/main/images/visual2.png?raw=true" alt=""/>
             </Link> 
            <div className='visual-para'>
              <h2>GREAT FOR PLANET,</h2>
              <h2>GREAT BUSINESS</h2>
              <p>From how we grow our plants to the materials that make up our packs, we're stepping up with sustainability </p>
            </div>
          </div>
        </div>
        <div className='visual-con v3'>
          <div className="inner">
            <div className='visual-para'>
              <h2>THERE'S A SAUCE FOR THAT&#33;</h2>
              <p>All your favorite tastes, plus some new goodies</p>
            </div>
            <Link to="/products">
            <img src="https://github.com/woogwayeon/heinz/blob/main/images/visual1.png?raw=true" alt=""/>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
export default Main;
  