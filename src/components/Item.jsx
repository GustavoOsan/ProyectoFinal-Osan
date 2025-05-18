import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({prod}) => {
    const{title, price, img}=prod
  return (
    <div className='card' style={{width: '18rem', marginTop: '10px'}}>
        <img src={img} className="card-img-top" alt={title} />

        <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>$ {price},00</p>
            <Link className='btn btn-dark' to='/item' >Ver Más</Link>
        </div>
    </div>
  )
}

export default Item
