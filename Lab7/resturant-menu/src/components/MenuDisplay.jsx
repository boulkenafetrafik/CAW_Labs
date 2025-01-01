import React, { useEffect, useState } from 'react'
import MenuItem from './MenuItem'
import { Link } from 'react-router-dom'
<<<<<<< HEAD

=======
import './styles/menu-display.css'
>>>>>>> 72f2d3541ed081460768a6e1a905c5339c865d5d
function MenuDisplay() {
    const [cartItems, setCartItems] = useState([])
    const addToCart = (item)=>{
        if(cartItems.find(cartItem => cartItem.name === item.name)){
            console.log('siuuu')
        }
        else{
            setCartItems([...cartItems, item])
         }
        }
        
    useEffect(()=>{
        console.log(cartItems)
    }, [cartItems])

const items = [
    { name: "Burger", image: "https://via.placeholder.com/150?text=Burger", price: 5.99, description: "Juicy grilled burger with lettuce, tomato, and cheese" },
    { name: "Pizza", image: "https://via.placeholder.com/150?text=Pizza", price: 8.99, description: "Cheesy pizza with pepperoni and olives" },
    { name: "Pasta", image: "https://via.placeholder.com/150?text=Pasta", price: 7.99, description: "Creamy Alfredo pasta with chicken and mushrooms" },
    { name: "Salad", image: "https://via.placeholder.com/150?text=Salad", price: 4.99, description: "Fresh garden salad with a variety of vegetables" },
    { name: "Sushi", image: "https://via.placeholder.com/150?text=Sushi", price: 12.99, description: "Assorted sushi platter with soy sauce and wasabi" },
    { name: "Steak", image: "https://via.placeholder.com/150?text=Steak", price: 15.99, description: "Grilled steak with garlic butter and herbs" },
    { name: "Tacos", image: "https://via.placeholder.com/150?text=Tacos", price: 6.99, description: "Spicy beef tacos with salsa and guacamole" },
    { name: "Ice Cream", image: "https://via.placeholder.com/150?text=Ice+Cream", price: 3.99, description: "Vanilla ice cream with chocolate syrup and sprinkles" },
    { name: "Coffee", image: "https://via.placeholder.com/150?text=Coffee", price: 2.99, description: "Hot brewed coffee with a hint of vanilla" }
];

return (
    <div className="menu-display">
        <h1>Menu</h1>
        <Link to="/cart" state={cartItems}>Cart ({cartItems.length})</Link>
        <div className='menu' style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {items.map((item, index) => (
                <MenuItem 
                    key={index}
                    name={item.name}
                    image={item.image}
                    price={+item.price } 
                    description={item.description}
                    addToCart = {()=>addToCart(item)}
                />
            ))}
        </div>
    </div>
)
}

export default MenuDisplay