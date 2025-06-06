import { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


const ItemDetail = ({ detail }) => {
  const [purchase, setPurchase] = useState(false)
  const { cart, addToCart } = useContext(CartContext)

  const onAdd = (cantidad) => {
    addToCart(detail, cantidad)
    setPurchase(true)
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1500
    });
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '100%', padding: '2rem' }}>
      <h1>Detalle del Producto: {detail.title}</h1>
      <img style={{ height: '30rem' }} src={detail.img} alt={detail.title} />
      <p>Descripcion: {detail.description}</p>
      <p>Precio: $ {detail.price},00</p>
      <p>Stock: {detail.stock} unidades</p>

      {
        purchase
          ? <div style={{ display: 'flex', width: '80%', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link className='btn btn-dark' to='/'>Seguir Comprando</Link>
            <Link className='btn btn-dark' to='/cart'>Terminar Compra</Link>
          </div>
          : <ItemCount stock={detail.stock} onAdd={onAdd} />
      }
    </div>
  )
}

export default ItemDetail
