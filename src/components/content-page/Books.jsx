import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';

const BooksSection = styled.section`
`

const BooksWrapper = styled.div`

`

const Books = () => {
    return (
        <BooksSection>
            <Container>
                <BooksWrapper>
                    Books
                </BooksWrapper>
            </Container>
            
        </BooksSection>
    )
}

export default Books