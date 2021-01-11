import React from 'react'
import Header from './Header'
import AddButton from './AddButton'
import ListProducts from './ListProducts'

const ProductLayout = () => {
    //<Button onClick={()=> setIsLoading(!isLoading)} >Update</Button>

    return (
        <div>
            <Header title="Products app"></Header>
            <AddButton />
            <ListProducts/>
        </div>
    )
}

export default ProductLayout