import React from 'react'
<<<<<<< HEAD

=======
import './styles/menu-item.css'
>>>>>>> 72f2d3541ed081460768a6e1a905c5339c865d5d
function MenuItem({image, name, price, description, addToCart }) {
    return (
        <div className='menu-item'>
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price} DA</p>
            <button onClick={addToCart} >add to cart</button>
        </div>
    )
}

export default MenuItem