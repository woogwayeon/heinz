import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react';
import './../css/default.css';

function Login() {
    return (
      <div className="login">
        <div className="inner">
          <div className='login-heading'>
            <div className="login-main-inner">
              <img src="https://github.com/woogwayeon/heinz/blob/main/images/visual1.png?raw=true" alt="" />
            </div>
          </div>



          <div className='login-form'>    
            <p>Welcome</p>  
            <input type="text" placeholder='E-mail'/>
            <input type="password" placeholder='password'/>
            <button type='submit'>Login</button>
            <div className='enjoy'>
              <p>No account? &nbsp;&nbsp;</p>
              <a href="#" className='enjoy'> Sign up</a>
            </div>
          </div>


        </div>
      </div>
    );
  }
  
export default Login;
  