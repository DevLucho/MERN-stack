import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import { getProducts } from '../services/index'
import { Container, Section } from 'react-bulma-components'

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
            setIsLoading(false)
        }

        loadProducts()
    }, []) //-> [] para ejecutar solo la primera vez.

    if (isLoading) {
        return <Loading/>
    }

    if(!products.length){
        return  <h2 className="title has-text-centered">No hay productos.</h2>
    }

    return 'Mostrar'
}

export default ListProducts