import React, { useEffect, useState } from 'react'
import { getItem } from '../mock/asyncMock'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({})
  const [invalid, setInvalid] = useState(null)
  const [loading, setLoading] = useState(false)
  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)
    const productCollection = collection(db, "productos")
    const docRef = doc(productCollection, itemId)
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setDetail({ id: res.id, ...res.data() })
        } else {
          setInvalid(true)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])


  if (invalid) {
    return (
      <div>
        <h2 className="text-danger">El producto no existe!</h2>
        <Link to="/" className="btn btn-primary">Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div>
      {loading
        ? <LoaderComponent />
        : <ItemDetail detail={detail} />}
    </div>
  )
}

export default ItemDetailContainer
