import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';

const TrainingPathSection = styled.section`
    margin-bottom: 50px;
`


const TrainingPathWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`


const GraphDesignTrainingPath = () => {
    return (
        <TrainingPathSection>
            <Container>
                <TrainingPathWrapper>
                    TrainingPath
                </TrainingPathWrapper>
            </Container>
        </TrainingPathSection>
    )
}

export default GraphDesignTrainingPath
