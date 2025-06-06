import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const Checkout = () => { //
    const [buyer, setBuyer] = useState({})//
    const [validateMail, setValidateMail] = useState('')
    const [orderId, setOrderId] = useState('')
    const { cart, cartTotal, clear } = useContext(CartContext)
    const buyerData = (e) => {
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )
    }

    const finalizarCompra = (e) => {
        e.preventDefault()
        if (!buyer.name || !buyer.adress || !buyer.email) {
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor complete todos los campos del formulario.',
            })
        } else if (buyer.email !== validateMail) {
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'Oops...',
                text: 'Los mails no coinciden, por favor verifique.',
            })
        } else {
            let orden = {
                comprador: buyer,
                compras: cart,
                total: cartTotal(),
                date: serverTimestamp()
            }
            const ventas = collection(db, "orders")
            addDoc(ventas, orden)
                .then((res) => {
                    setOrderId(res.id)
                    clear()
                })
                .catch((error) => {
                    console.error("Error al crear la orden: ", error)
                })
        }
    }

    return (
        <div>
            {
                orderId
                    ? <div>
                        <h2>Pedido realizado con exito!😊</h2>
                        <p>Su ID de seguimiento es: {orderId}</p>
                        <Link className='btn btn-dark' to='/'>Volver al inicio</Link>
                    </div>
                    : <div>
                        <h1>Completa tus datos</h1>
                        <form onSubmit={finalizarCompra} className='formulario'>
                            <input className='form-control' type="text" name='name' placeholder='Ingrese su nombre completo' onChange={buyerData} ></input>
                            <input className='form-control' type="text" name='adress' placeholder='Ingrese su dirección' onChange={buyerData}></input>
                            <input className='form-control' type="email" name='email' placeholder='Ingrese su Correo' onChange={buyerData}></input>
                            <input className='form-control' type="email" name='email-2' placeholder='Repita su Correo' onChange={(e) => setValidateMail(e.target.value)}></input>
                            <button className='btn btn-success' type='submit'>Finalizar Compra</button>
                        </form>
                    </div>
            }
        </div>
    )
}

export default Checkout
