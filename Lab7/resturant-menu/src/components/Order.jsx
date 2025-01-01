import React from 'react'
import { useLocation } from 'react-router-dom'
<<<<<<< HEAD

=======
import './styles/order.css'
import Navbar from './Navbar';
>>>>>>> 72f2d3541ed081460768a6e1a905c5339c865d5d
function Order() {
    const {state} = useLocation();
    const orderItems = state;
  return (
<<<<<<< HEAD
    <div>
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
=======
    <div className=''>
        <Navbar/>
        <div className="order">
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
        
>>>>>>> 72f2d3541ed081460768a6e1a905c5339c865d5d
    </div>
  )
}

export default Order