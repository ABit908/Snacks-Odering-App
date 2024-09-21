import React from 'react'
import { useContext } from 'react'
// import { useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import './FoodItem.css'
const FoodItem = ({id,name,price,description,image}) => {
//  const [itemCount,setItemCount]=useState(0);
 const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={url+ "/images/" +image} alt="" className="food-item-img" />
        {
            !cartItems[id]
            ? <img className='add' onClick={()=> addToCart(id)} src={assets.add_icon_white}/>
            : <div className="food-item-counter">
                <img onClick={()=> removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=> addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
      
      <p className="food-item-description">{description}</p>
      <p className="food-item-price">Rs {price}</p>
      </div>
    </div>
  )
}

export default FoodItem
