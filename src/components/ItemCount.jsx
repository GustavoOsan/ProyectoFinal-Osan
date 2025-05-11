import React, { useState, useEffect } from 'react'

const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(1)
    console.log('ItemCount')

    useEffect(() => { },[])





    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <div>
                <button onClick={restar}>-</button>
                <span>{count}</span>
                <button onClick={sumar}>+</button>
            </div>
            <button>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount
