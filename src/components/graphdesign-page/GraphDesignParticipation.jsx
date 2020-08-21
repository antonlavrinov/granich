import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import ParticipationForm from './participation/ParticipationForm';
import ParticipationPolicy from './participation/ParticipationPolicy';


const ParticipationSection = styled.section`
    margin-bottom: 50px;
`


const ParticipationWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`


const GraphDesignParticipation = () => {

    return (
        <ParticipationSection id="participation-section">
            <Container>
                <ParticipationWrapper>
                    <ParticipationForm/>
                    <ParticipationPolicy/>
                </ParticipationWrapper>
            </Container>
        </ParticipationSection>
    )
}

export default GraphDesignParticipation
