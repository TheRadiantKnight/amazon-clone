import React from 'react'
import './CheckOutProduct.css'
import {useStateValue} from './StateProvider'

function CheckOutProduct({ id, title, image, price, rating }) {
    const [{basket}, dispatch] = useStateValue();
    
    const removeFromBasket = () => {
        // remove item from basket..
        dispatch ({
            type: 'REMOVE_FROM_BASKET',
            id: id,                         
        });

    };



    return (
        <div className="checkOutProduct">
            <img className="checkOutProduct__image" src={image} alt="" />
            <div className="checkOutProduct__info">
                <p className="checkOutProduct__title">{title}</p>

                <p className="checkOutProduct__price">
                 <small>$</small>
                 <strong>{price}</strong>
                </p>

                <div className="checkOutProduct__rating"> 
                  {Array(rating)
                  .fill()
                  .map((_) => (
                         <p>&#9733;</p>
                  ))}           
               </div>

               <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    );
}

export default CheckOutProduct;
 