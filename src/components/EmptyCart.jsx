import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <div className="empty-cart">
            <h2>El carrito esta vacio</h2>
            <p>Ve al Shop para mirar nuestros productos</p>
            <Link to="/" className="btn btn-primary">Shop</Link>
        </div>
    )
}

export default EmptyCart;