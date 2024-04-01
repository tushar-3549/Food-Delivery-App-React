import React, { useContext } from 'react'; 
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext); 
  // const subtotal = getTotalCartAmount();
  // const deliveryFee = 2;
  // const totalAmount = subtotal + deliveryFee;

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='Apt/Suite' />
          <input type="text" placeholder='City' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='ZIP Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
            </div>
            {/* <p>${subtotal}</p> */}
            <p>${getTotalCartAmount()}</p>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              {/* <p>${deliveryFee}</p> */}
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              {/* <b>${totalAmount}</b> */}
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder;
