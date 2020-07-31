import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';

const ParticipationSection = styled.section`
    margin-bottom: 50px;
`


const ParticipationWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`


const GraphDesignParticipation = () => {
    return (
        <ParticipationSection>
            <Container>
                <ParticipationWrapper>
                    Participation
                </ParticipationWrapper>
            </Container>
        </ParticipationSection>
    )
}

export default GraphDesignParticipation
