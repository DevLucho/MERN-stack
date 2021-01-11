import React, { useState } from 'react'
import { Modal } from 'react-bulma-components'
import { AddButton, Header, ListProducts, Form  } from './'


const ProductLayout = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <Header title="Products app"></Header>
            <AddButton onClick={() => setIsModalOpen(true)} />
            <ListProducts />
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Modal.Card>
                    <Modal.Card.Head showClose={true}>
                        <Modal.Card.Title>
                            From
                        </Modal.Card.Title>
                    </Modal.Card.Head>
                    <Modal.Card.Body>
                        <Form/>
                    </Modal.Card.Body>
                </Modal.Card>
            </Modal>
        </>
    )
}

export default ProductLayout