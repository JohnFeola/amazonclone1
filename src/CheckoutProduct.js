import React from 'react'
import './CheckoutProduct.css';
import StarDisplay from './StarDisplay'; 
import { useStateValue } from "./StateProvider";

function CheckoutProduct({id, image, title, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket= () => {
        //removing item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
            
        })
    }
  return (
    <div className='checkoutProduct'>
        <img className="checkoutProduct__image" src={image} />


        <div className='checkoutProduct__info'>
            <p className='checkoutProduct_title'>{title}</p>

            <p className='checkoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>

            <div className='checkoutProduct__rating'>
                <StarDisplay rating={rating}/>
            </div>

            <button onClick={removeFromBasket}>Remove From Basket</button>
            
        

    </div>
    </div>
  )
}

export default CheckoutProduct;