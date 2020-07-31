import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';

const ForWhomSection = styled.section`

`
const ForWhomSectionTitle = styled.div`
    font-size: 50px;
    font-weight: 600;
`

const ForWhomWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const ForWhomBlockWrapper = styled.div`
    width: 33,3%;
    background: white;
    padding: 20px 35px;
    margin-right: 20px;
    :last-child {
        margin-right: 0;
    }
`


const GraphDesignForWhom = () => {
    return (
        <ForWhomSection>
            <Container>
                <ForWhomSectionTitle>
                    Для кого курс?
                </ForWhomSectionTitle>
                <ForWhomWrapper>
                    
                </ForWhomWrapper>
            </Container>
            
        </ForWhomSection>
    )
}

export default GraphDesignForWhom
