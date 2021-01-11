import React, { useState, useEffect } from 'react'
import Loading from './Loading'

const ListProducts = () => {
    const [isLoading, setIsLoading] = useState(true)
    
    // Despues de renderizar se ejecuta
    useEffect(() => {
        const timeId = setInterval(() => {
            console.log('useEffect');
            setIsLoading(!isLoading)
        },10000)

        return () => clearInterval(timeId)
    })

    useEffect(()=>{
        console.log('onlu once time');
    }, [isLoading])

    return (
        isLoading ? <Loading /> : 'Mostrar fetch'

    )
}

export default ListProducts