import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';

const PortfolioSection = styled.section`
    margin-bottom: 50px;
`


const PortfolioWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const GraphDesignPortfolio = () => {
    return (
        <PortfolioSection>
            <Container>
                <PortfolioWrapper>
                    Portfolio
                </PortfolioWrapper>
            </Container>
        </PortfolioSection>
    )
}

export default GraphDesignPortfolio
