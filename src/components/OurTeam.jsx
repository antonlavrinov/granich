import React from 'react'
import { Container } from './style';
import styled from 'styled-components';

const OurTeamSection = styled.section`
    margin-bottom: 50px;
`


const OurTeamWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`


const OurTeam = () => {
    return (
        <OurTeamSection>
            <Container>
                <OurTeamWrapper>
                    OurTeam
                </OurTeamWrapper>
            </Container>
        </OurTeamSection>
    )
}

export default OurTeam
