import React from 'react'
import { useLocation } from 'react-router-dom'
import './styles/order.css'
function Order() {
    const {state} = useLocation();
    const orderItems = state;
  return (
    <div className='order'>
        <h1>Order Details</h1>
        <p>Your order has been placed successfully.</p>
        <div className="order-items">
            {orderItems.map((item)=>(
                <div key={item.id} style={{border: '1px solid #ccc', padding: '10px', marginBottom: '10px'}}>
                    <img src={item.image} alt={item.name} style={{width: '50px', height: '50px', marginRight: '10px'}} />
                    <span>{item.name} - {item.price} x {item.quantity} DA</span>
                </div>
            ))}
            <div className="total-price">
                <h2>Total Price: {orderItems.reduce((total, item)=>total + item.price * item.quantity, 0)} DA</h2>
            </div>
        </div>
    </div>
  )
}

export default Order