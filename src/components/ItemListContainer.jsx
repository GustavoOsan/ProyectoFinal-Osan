import { use, useEffect, useState } from 'react'
import { getProducts } from '../mock/asyncMock'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { SiPanasonic } from 'react-icons/si'

const ItemListContainer = ({ greeting }) => {


    const [products, setProducts] = useState([])
    const {categoryId} = useParams()


    useEffect(() => {
        getProducts()
            .then((res) => {
                if (categoryId) {
                    setProducts(res.filter((prod) => prod.category === categoryId))
                } else {
                    setProducts(res)
                }
            })
            .catch((error) => { console.error(error) })
    }, [categoryId])
    console.log(products)

    return (
        <div>
            <h1 className="text-success" >{greeting}{categoryId&& <span>{categoryId}</span>}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;