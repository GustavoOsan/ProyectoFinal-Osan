import React from 'react'

const ItemDetail = ({ detail }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'Center', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
      <h1>Detalle del Producto: {detail.title}</h1>
      <img src={detail.img} alt={detail.title} />
      <p>Descripcion: {detail.description}</p>
      <p>Precio: $ {detail.price},00</p>
      <p>Stock: {detail.stock}</p>
    </div>
  )
}

export default ItemDetail
