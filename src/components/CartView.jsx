import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartView = () => {
    const {cart, removeItem, cartTotal, clear} =useContext(CartContext)
    return(
        <div style={{padding: '2rem', display: 'flex', flexDirection: 'column'}}>
            <h2>Carrito</h2>
            <div>
                {cart.map((compra)=>(
                    <div key={compra.id} style={{display: 'flex', justifyContent: 'space-between', width: '100%', padding: '2rem', alignItems: 'center'}}>
                        <img src={compra.img} alt={compra.title} style={{height:'10rem'}}/>
                        <span>{compra.title}</span>
                        <span>{compra.quantity}</span>
                        <span>${compra.price},00</span>
                        <span>Precio Total: ${compra.price * compra.quantity},00</span>
                        <button onClick={()=>removeItem(compra.id)} className="btn btn-danger" style={{height:'3rem'}}>Eliminar</button>
                    </div>
                ))}
            </div>
            <h3>Total a Pagar: ${cartTotal()},00 </h3>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '70%', padding: '2rem'}}>
                <button className="btn btn-danger" onClick={clear}>Borrar Carrito</button>
                <Link to='/checkout' className="btn btn-success">Finalizar Compra</Link>
            </div>
        </div>
    )
}

export default CartView