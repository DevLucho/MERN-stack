import React from 'react'
import { Container, Section, Button } from 'react-bulma-components'

const AddButton = ({onClick}) => {
    return (
        <Section>
            <Container>
                <div className="has-text-centered">
                    <Button onClick={onClick} color="primary">Add</Button>
                </div>
            </Container>
        </Section>
    )
}

export default AddButton