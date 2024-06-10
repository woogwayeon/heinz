import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react';

import Header from './component/Header';
import Main from './component/Main';
import Products from './component/Products';
import Who from './component/Who';
import Recipes from './component/Recipes';
import Login from './component/Login';
import Footer from './component/Footer';

import data from './data.js'
import data2 from './data2.js'

import './App.css';

function App() {

  let [items, setItem] = useState(data);
  let [items2, setItem2] = useState(data2);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={ <Main /> }/>
        <Route path='/products' element={ <Products items={items} /> }/>
        <Route path='/who' element={ <Who /> }/>
        <Route path='/recipe' element={ <Recipes items2={items2} /> }/>
        <Route path='/login' element={ <Login /> }/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App;
