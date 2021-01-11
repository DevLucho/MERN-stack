import React, { useState, useRef } from 'react'
import { Form as BulmaForm, Button } from 'react-bulma-components'

const { Field, Control, Label, Input } = BulmaForm

const Form = ({handleSubmit}) => {
    const [formValues, setFormValues ] = useState({
        name: '',
        priceUnitary: '',
        size: '',
        description: ''
    })

    const inputFileRef = useRef()
    
    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(name, value);

        setFormValues({...formValues, [name]: value})
    }        

    const _handleSubmit = (e) => {
        e.preventDefault() // prevenir comportamiento nativo del navegador
        handleSubmit({...formValues, image: inputFileRef.current.files[0]})
        console.log(formValues)
        console.log(inputFileRef.current.files);
    }

    return (
        <form onSubmit={_handleSubmit}>
            <Field>
                <Label>Nombre</Label>
                <Control>
                    <Input 
                    placeholder="Text input" 
                    name="name" 
                    value={formValues.name}
                    onChange={handleChange}/>
                </Control>
            </Field>
            <Field>
                <Label>Precio unitario</Label>
                <Control>
                    <Input 
                    placeholder="Text input" 
                    type="number"
                    name="priceUnitary" 
                    value={formValues.priceUnitary}
                    onChange={handleChange}/>
                </Control>
            </Field>
            <Field>
                <Label>Size</Label>
                <Control>
                    <Input 
                    placeholder="Text input" 
                    type="number"
                    name="size" 
                    value={formValues.size}
                    onChange={handleChange}/>
                </Control>
            </Field>
            <Field>
                <Label>Descripcion</Label>
                <Control>
                    <Input 
                    placeholder="Text input" 
                    name="description" 
                    value={formValues.description}
                    onChange={handleChange}/>
                </Control>
            </Field>

            <Field>
                <Label>Imagen</Label>
                <Control>
                    <input type="file" ref={inputFileRef} />
                </Control>
            </Field>

            <Button type="submit" color="primary">
                Guardar
            </Button>

        </form>
    )
}

export default Form