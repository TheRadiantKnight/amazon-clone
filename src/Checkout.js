import React from 'react'
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckOutProduct'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {

    const [{basket}] = useStateValue();

    return (
        <div className="checkOut">
          <div className="checkOut__left">
            <img className="checkOut__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
            alt="" 
            />
            {basket?.length === 0 ? (
                <div> 
                    <h2>Your Shopping Basket is empty</h2>
                    <p>
                        You have no items in your basket. To purchase one or more items please click on 
                        "Add to basket" below the listed item. 
                    </p>
                </div>
            ) : (
                <div>
                    <h2 className="checkOut__title">Your Shopping Basket</h2>
                    {/* List out all of the Checkout Products  */}
                    {basket?.map(item => (           
                      <CheckoutProduct                       
                       id={item.id}
                       title={item.title}
                       image={item.image}
                       price={item.price}
                       rating={item.rating}

                      />
                 
                     ))} 
                </div>
            )}
            </div>
              {basket.length > 0 && (
                  <div className="checkOut__right">
                   <Subtotal />
                  </div> 
              )}          
        </div>
    );
}

export default Checkout;
