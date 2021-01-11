import React from 'react'
import { Card, Columns, Heading } from 'react-bulma-components'

const ListProducts = ({ products }) => {
    return (
        <Columns>
            {
                products.map(product => {
                    return (
                        <Columns.Column size={4}>
                            <Card>
                                <Card.Image size="16by9" src={product.imgUrl} />
                                <Card.Content>
                                    <Heading>{product.name}</Heading>
                                    <Heading subtitle size={6}>{product.unitaryPrice}</Heading>
                                    <Heading subtitle size={6}>{product.size}</Heading>
                                    <p>{product.description}</p>
                                </Card.Content>
                            </Card>
                        </Columns.Column>
                    )
                })
            }
        </Columns>
    )

}

export default ListProducts