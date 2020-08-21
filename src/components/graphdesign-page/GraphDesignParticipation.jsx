import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import ParticipationForm from './participation/ParticipationForm';



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
                    <ParticipationForm/>
                </ParticipationWrapper>
            </Container>
        </ParticipationSection>
    )
}

export default GraphDesignParticipation
