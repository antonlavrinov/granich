import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import ParticipationForm from './participation/ParticipationForm';
import ParticipationPolicy from './participation/ParticipationPolicy';


const ParticipationSection = styled.section`
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }
`


const ParticipationWrapper = styled.div`
    display: grid;
    grid-template-columns: 51% 47%;
    grid-column-gap: 2%;
    @media only screen and (max-width: 575px) {
        grid-template-columns: 100%;
        grid-column-gap: 0;
        grid-row-gap: 5vw;
    }
    
`



const CourseParticipation = ({data}) => {

    return (
        <ParticipationSection>
            <Container>
                <ParticipationWrapper>
                    <ParticipationForm data={data}/>
                    <ParticipationPolicy data={data}/>
                </ParticipationWrapper>

            </Container>
        </ParticipationSection>
    )
}

export default CourseParticipation