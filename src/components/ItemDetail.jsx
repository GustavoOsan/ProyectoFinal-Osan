import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ detail }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'Center', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
      <h1>Detalle del Producto: {detail.title}</h1>
      <img src={detail.img} alt={detail.title}/>
      <p>Descripcion: {detail.description}</p>
      <p>Precio: $ {detail.price},00</p>
      <p>Stock: {detail.stock} unidades</p>
      <ItemCount stock={detail.stock}/>
    </div>
  )
}

export default ItemDetail
