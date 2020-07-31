import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';

const CurriculumSection = styled.section`
    margin-bottom: 50px;
`


const CurriculumWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`


const GraphDesignCurriculum = () => {
    return (
        <CurriculumSection>
            <Container>
                <CurriculumWrapper>
                    Curriculum
                </CurriculumWrapper>
            </Container>
        </CurriculumSection>
    )
}

export default GraphDesignCurriculum
