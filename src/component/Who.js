import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react';
import './../css/default.css';

// http://woogwayeon.dothome.co.kr/images/product7.png

function Who() {
    return (
      <div className="who">
        
        <div className='who-heading'>
          <div className="inner">
            <img src="https://github.com/woogwayeon/heinz/blob/main/images/who.png?raw=true" alt="" />
            <p>Good for the Planet is Good for Business</p>
          </div>
        </div>

        <div className='who-main-para'>
          <div className="inner">
            <p>Sustainability is core to our business. We’re well on our way to reaching our 2050 goal of carbon neutrality. In fact, we’re also on track to have 100% of Heinz Ketchup tomatoes sustainably sourced by 2025. And our commitment doesn’t stop there.</p>
          </div>
        </div>

        <div className='who-tomato'>
          <div className="inner">
            <h3>OUR TOMATOES</h3>
            <div className="img-wrap">
              <div class="img-block">
                <img src="https://github.com/woogwayeon/heinz/blob/main/images/tomato1.jpg?raw=true" alt="" />
                <h4>Close to home</h4>
                <p>To keep freshness and flavor in, Heinz tomato fields are within an average of four hours from harvest to unloading. This also keeps our carbon footprint low, and our quality high.</p>
              </div>
              <div class="img-block">
                <img src="https://github.com/woogwayeon/heinz/blob/main/images/tomato2.jpg?raw=true" alt="" />
                <h4>The best and the rest</h4>
                <p>95% of our Heinz tomatoes are perfectly ripe when they leave the field. What’s left from harvesting, like vines and leaves are composted back into the soil for added nutrients.</p>
              </div>
              <div class="img-block">
                <img src="https://github.com/woogwayeon/heinz/blob/main/images/tomato3.jpg?raw=true" alt="" />
                <h4>Recycled seeds</h4>
                <p>Even after we’ve strained the thick, juicy tomato pulp, the leftover skins and seeds are upcycled into pet food or used to feed livestock on local farms.</p>
              </div>
              <div class="img-block">
                <img src="https://github.com/woogwayeon/heinz/blob/main/images/tomato4.jpg?raw=true" alt="" />
                <h4>Conservation education</h4>
                <p>We’ve created agricultural development projects that teach tomato conservation and conservation farming to farms worldwide, including Brazil, Egypt, and Spain.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
  
export default Who;
  