import React from 'react'
import './Product.css'
import StarDisplay from './StarDisplay'
import { useStateValue } from "./StateProvider.js";

function Product({id, title, image, price, rating}) {

    const [state, dispatch] = useStateValue();
    const addToBasket = () => {
        //diptch item -> data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                <StarDisplay rating={rating} />
            </div>
        </div>


            <img src={image} alt=""/>

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
  )
}

export default Product


// {/* {Array(rating).fill().map((_, i) =>(
//                     <p>⭐</p>
//                 ))} */
//this is other option for displaying stars according to rating prop