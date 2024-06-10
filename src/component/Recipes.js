import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react';
import './../css/default.css';

function Recipes(props) {
    return (
      <div className="recipes">
        <div className='recipes-main-heading'>
            <div className="inner">
              <img src="https://github.com/woogwayeon/heinz/blob/main/images/visual3.png?raw=true" alt="" />
              <p>Recipes</p>
            </div>
        </div>

        <div className="item-card">

          {
            props.items2.map((r)=>{
              return <Card2
                recipesImg={r.image}
                recipesPara={r.title}
                recipesHead={r.content}
              />
            })
          }
        </div>

      </div>
    );
  }
  

  function Card2(props){
    return(
      <div className="card">
        <div className='recipes-image'>
         <img src={props.recipesImg}/>
        </div>
        <p className="recipes-heading">{props.recipesPara}</p>
        <p className="recipes-para">{props.recipesHead}</p>
      </div>
    )
  }

export default Recipes;
  