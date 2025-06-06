import { use, useEffect, useState } from 'react'
import { getProducts } from '../mock/asyncMock'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { SiPanasonic } from 'react-icons/si'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../service/firebase'
import LoaderComponent from './LoaderComponent'


const ItemListContainer = ({ greeting }) => {


    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)
        const productsCollection = categoryId ? query(collection(db, "productos"), where("category","==",categoryId)) : collection(db, "productos")
        getDocs(productsCollection)
        .then((res) => { 
            const list = res.docs.map((doc) => {
                return { 
                    id: doc.id, ...doc.data() 
                }
            })
            setProducts(list)
        })
        .catch(error => console.error(error))
        .finally(() => setLoading(false))
    }, [categoryId])

    return (
        <>
            { loading
                ? <LoaderComponent/>
                : <div>
                    <h1 className="text-success">{greeting}{categoryId && <span>{categoryId}</span>}</h1>
                    <ItemList products={products} />
                </div>
            }
        </>
    )
}

export default ItemListContainer