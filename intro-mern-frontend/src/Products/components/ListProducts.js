import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import { getProducts } from '../services/index'

const ListProducts = () => {
    const [isLoading, setIsLoading] = useState(true)

    const [products, setProducts] = useState([])

    // Despues de renderizar se ejecuta
    useEffect(() => {
        async function loadProducts(){
            const response = await getProducts()
            if (response.status === 200) {
                setProducts(response.data.products)
            }
        }

        loadProducts()
    }, []) //-> [] para ejecutar solo la primera vez.


    return (
        isLoading ? <Loading /> : 'Mostrar fetch'

    )
}

export default ListProducts