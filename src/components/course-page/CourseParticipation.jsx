import React, {useEffect, useRef} from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import ParticipationForm from './participation/ParticipationForm';
import ParticipationPolicy from './participation/ParticipationPolicy';


const ParticipationSection = styled.section`
    margin-bottom: 50px;
`


const ParticipationWrapper = styled.div`
    display: grid;
    // justify-content: space-between;
    grid-template-columns: 51% 47%;
    grid-column-gap: 2%;
    // grid-row-gap: 1.7vw;
`



const CourseParticipation = ({data}) => {

    return (
        <ParticipationSection id="participation-section">
            <Container>
                <ParticipationWrapper>
                    <ParticipationForm/>
                    <ParticipationPolicy data={data}/>
                </ParticipationWrapper>

            </Container>
        </ParticipationSection>
    )
}

export default CourseParticipation
