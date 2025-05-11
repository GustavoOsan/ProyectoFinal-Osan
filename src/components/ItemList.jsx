import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {
    return (
        <div className='d-flex justify-content-around align-item-center flex-wrap'> //aqui se agregan el formato que le queramos dar a las cards, ejemplo Grid o flex
            {products.map((prod) => <Item key={prod.id} prod={prod}/>)}
        </div>
    )
}

export default ItemList
