import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';

const FeaturesSection = styled.section`
    margin-bottom: 50px;
`


const FeaturesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`


const GraphDesignFeatures = () => {
    return (
        <FeaturesSection>
            <Container>
                <FeaturesWrapper>
                    Features
                </FeaturesWrapper>
            </Container>
        </FeaturesSection>
    )
}

export default GraphDesignFeatures
