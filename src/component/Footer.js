import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react';
import './../css/default.css';

function Footer() {
    return (
      <div className="footer">
        <div class="inner">
          <ul>
            <li>Privacy Notice</li>
            <li>Terms of Use</li>
            <li>Do Not Sell or Share my Personal Information</li>
            <li>Limit the Use of My Sensitive Personal Information</li>
          </ul>
        <p>&copy;2024 Kraft-Heinz, Inc. All rights reserved.</p>
      </div>
      </div>
    );
  }
  
export default Footer;
  