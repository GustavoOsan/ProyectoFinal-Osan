import { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


const ItemDetail = ({ detail }) => {
  const [purchase, setPurchase] = useState(false)
  const { cart, addToCart } = useContext(CartContext)

  const onAdd = (cantidad) => {
    addToCart(detail, cantidad)
    setPurchase(true)
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'Center', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
      <h1>Detalle del Producto: {detail.title}</h1>
      <img src={detail.img} alt={detail.title} />
      <p>Descripcion: {detail.description}</p>
      <p>Precio: $ {detail.price},00</p>
      <p>Stock: {detail.stock} unidades</p>

      {
        purchase
          ? <div style={{ display: 'flex', width: '30%', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link className='btn btn-dark' to='/'>Seguir Comprando</Link>
            <Link className='btn btn-dark' to='/cart'>Terminar Compra</Link>
          </div>
          : <ItemCount stock={detail.stock} onAdd={onAdd} />
      }
    </div>
  )
}

export default ItemDetail
