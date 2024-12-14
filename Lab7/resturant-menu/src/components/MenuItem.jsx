import React from 'react'

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