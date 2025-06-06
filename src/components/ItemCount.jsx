import React, { useState} from 'react'

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    
    const comprar = ()=>{
        onAdd(count)
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                <button className='btn btn-danger'onClick={restar}>-</button>
                <span style={{padding: '1rem'}} className='btn'>{count}</span>
                <button className='btn btn-success' onClick={sumar}>+</button>
            </div>
            <button className='btn btn-primary'onClick={comprar}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount