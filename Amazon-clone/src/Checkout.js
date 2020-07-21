import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import './Checkout.css';

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
          <div className="checkout__left">
            <img className="checkout__ad"  src="https://m.media-amazon.com/images/G/01/digital/video/sonata/US_SVOD_NonPrime_Banner/f69c4124-8751-4646-b8de-14e68f14ff8e._UR3000,550_SX1500_FMjpg_.jpg"  alt=" "/>
        {basket?.length === 0  ? (
        <div>
            <h2>Your Shopping Basket is empty</h2>
                <p>
                You have no items in your basket. To buy one or more items, click
                "Add to basket" next to item
                </p>
        </div>
            ) : (
        <div>    
        <h2 className="checkout__title">Your Shoping Basket</h2>

        {/* List out  checkout products */}
        {basket?.map((item) => (
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
                <div className="checkout__right">
                    <Subtotal/>
                </div>
            )}
        </div>
    );
}

export default Checkout;
