import React, { useState, useEffect } from 'react'
import { Modal, Container } from 'react-bulma-components'
import { saveProduct, getProducts } from '../services'
import { AddButton, Header, ListProducts, Form, Loading  } from './'


const ProductLayout = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const [products, setProducts] = useState([])

    async function loadProducts(){
        const response = await getProducts()
        if (response.status === 200) {
            setProducts(response.data.products)
        }
        setIsLoading(false)
    }
    
    // Despues de renderizar se ejecuta
    useEffect(() => {
        loadProducts()
    }, []) //-> [] para ejecutar solo la primera vez.

    const handleSubmit = async (data) => {
        await saveProduct(data) 
        loadProducts() // cargar productos
        setIsModalOpen(false) // cerrar modal
    }

    return (
        <Container>
            <Header title="Products app"></Header>
            <AddButton onClick={() => setIsModalOpen(true)} />
            {
                isLoading && <Loading/>
            }
            {
                !isLoading && !products.length && (
                    <h2 className="title has-text-centered">No hay productos.</h2>
                )
            }
            {
                !isLoading && products.length && (
                    <ListProducts products={products} />
                )
            }
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Modal.Card>
                    <Modal.Card.Head showClose={true}>
                        <Modal.Card.Title>
                            From
                        </Modal.Card.Title>
                    </Modal.Card.Head>
                    <Modal.Card.Body>
                        <Form handleSubmit={handleSubmit}/>
                    </Modal.Card.Body>
                </Modal.Card>
            </Modal>
        </Container>
    )
}

export default ProductLayout