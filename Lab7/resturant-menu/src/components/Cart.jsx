

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/cart.css';
import Navbar from './Navbar';

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
           
        </div>
    );
}

export default Cart;