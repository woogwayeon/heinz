import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react';
import './../css/default.css';

function Products(props) {
    return (
      <div className="products">

      <div className='products-heading'>
          <div className="inner">
            <img src="https://github.com/woogwayeon/heinz/blob/main/images/visual1.png?raw=true" alt="" />
            <p>Products</p>
          </div>
      </div>

      <div className="item-card">

      {
        props.items.map((w)=>{
          return <Card
            itemImg={w.image}
            itemHeading={w.title}
            itemPara={w.content}
          />
        })
      }
      </div>
      </div>

    );
  }


function Card(props){
  return(
    <div className="card">
      <div className='product-image'>
       <img src={props.itemImg}/>
      </div>
      <p className="product-heading">{props.itemHeading}</p>
      <p className="product-para">{props.itemPara}</p>
    </div>
  )
}



// function Card(props){
//   return(
//     <div className='card'>
//       <img src="" alt="">
//       <p className='itemHeader'>{props.title}</p>
//       <p className='para'></p>
//     </div> 
//   )
// }  
  
export default Products;
  