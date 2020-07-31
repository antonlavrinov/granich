import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';

const ReviewsSection = styled.section`
    margin-bottom: 50px;
`


const ReviewsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`


const GraphDesignReviews = () => {
    return (
        <ReviewsSection>
            <Container>
                <ReviewsWrapper>
                    Reviews
                </ReviewsWrapper>
            </Container>
        </ReviewsSection>
    )
}

export default GraphDesignReviews
