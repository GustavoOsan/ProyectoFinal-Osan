import { use, useEffect, useState } from 'react'
import { getProducts } from '../mock/asyncMock'
import ItemList from './ItemList'

const ItemListContainer = ({ greeting }) => {


    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then((res) => setProducts(res))
            .catch((error) => { console.error(error) })
    }, [])
    console.log(products)

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;