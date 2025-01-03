

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
<<<<<<< HEAD
=======
import './styles/cart.css';
import Navbar from './Navbar';
>>>>>>> 72f2d3541ed081460768a6e1a905c5339c865d5d

function Cart() {
    const [items, setItems] = useState([]);
    const {state} = useLocation();
    const cartItems = state;
    useEffect(()=>{
        console.log(cartItems)
        let id = 0
        if(cartItems){
            const newItems = cartItems.map(cartItem=>{
                const item = {id: id, image : cartItem.image, name : cartItem.name, price : cartItem.price, quantity : 1}
                id++;
                return item
            })
            setItems(newItems)
        }
    }, [])


    const decreaseQuantity = (id)=>{
        const item = items.find(item => item.id === id)
        if(item.quantity === 1){
            return
        }
        else{
           const updatedCartItems = items.map(item =>(
            item.id === id ? {...item, quantity: item.quantity - 1} : item
           ))
           setItems(updatedCartItems)
        }

    }
    const increaseQuantity = (id)=>{
        const updatedCartItems = items.map(item =>(
            item.id === id ? {...item, quantity: item.quantity + 1} : item
           ))
           setItems(updatedCartItems)
    }

    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
<<<<<<< HEAD
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>Cart</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {items.map(item => (
                    <li key={item.id} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                        <span style={{ flex: 1 }}>{item.name} - {item.price} x {item.quantity} DA</span>
                        <button 
                            onClick={() => decreaseQuantity(item.id)} 
                            style={{ marginRight: '5px', padding: '5px 10px', cursor: 'pointer' }}
                        >
                            -
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                            onClick={() => increaseQuantity(item.id)} 
                            style={{ padding: '5px 10px', cursor: 'pointer' }}
                        >
                            +
                        </button>
                    </li>
                ))}
            </ul>
            <h2 style={{ borderTop: '2px solid #ccc', paddingTop: '10px' }}>Total Price: {totalPrice} DA</h2>
            <div className="checkout">
                <Link to = "/order" state = {items}><button style={{ padding: '10px 20px', marginTop: '10px', cursor: 'pointer' }}>Place Order</button></Link>

            </div>
=======
        <div className='' >
            <Navbar/>
            <div className="cart">
                <h1 >Cart</h1>
                <ul >
                    {items.length == 0 ? <h2>your cart is empty</h2> :  items.map(item => (
                        <li key={item.id} >
                            <img src={item.image} alt={item.name}  />
                            <span style={{ flex: 1 }}>{item.name} - {item.price} DA</span>
                            <div className="btns" >
                                <button 
                                    onClick={() => decreaseQuantity(item.id)} 
                                >
                                    -
                                </button>
                                <span>{item.quantity}</span>
                                <button 
                                    onClick={() => increaseQuantity(item.id)} 
                                    style={{ padding: '5px 10px', cursor: 'pointer' }}
                                >
                                    +
                                </button>
                            </div>
                            
                        </li>
                    ))}
                </ul>
                <h2 >Total Price: {totalPrice} DA</h2>
                <div className="checkout" style={{opacity: items.length == 0 ? 0.5 : 1, pointerEvents: items.length == 0 ? 'none' : 'all'}}>
                    <Link to = "/order" state = {items}><button style={{ padding: '10px 20px', marginTop: '10px', cursor: 'pointer' }}>Place Order</button></Link>

                </div>
            </div>
           
>>>>>>> 72f2d3541ed081460768a6e1a905c5339c865d5d
        </div>
    );
}

export default Cart;