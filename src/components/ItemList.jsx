import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {
    return (
        //aqui se dan los estilos a las cards.
        <div className='d-flex justify-content-around align-item-center flex-wrap'> 
            {products.map((prod) => <Item key={prod.id} prod={prod}/>)}
        </div>
    )
}

export default ItemList
