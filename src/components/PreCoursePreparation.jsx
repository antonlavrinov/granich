import React from 'react'
import { Container } from './style';
import styled from 'styled-components';
import PreparationItem from './PreparationItem';

const PreparationSection = styled.section`
    padding: 154px 0px;

`
const PreparationWrapper = styled.div`

    background: lightgrey;
    padding: 3.5vw 4.4vw;
    border-radius: 1vw;
`

const PreparationHeader = styled.div`
    display: flex;
    margin-bottom: 3.5vw;
`

const PreparationTitle = styled.div`
    color: black;
    font-size: 4.04vw;
    font-weight: 700;
    line-height: 1.1;
    margin-right: 3.7vw;

`

const PreparationText = styled.div`
    color: black;
    font-size: 1.5vw;
    margin-top: 0.8vw;
    line-height: 1.5;
    letter-spacing: 0.03vw;

`

const PreparationFilters = styled.div`
    display: flex;
    padding: 15px 0;
    border-bottom: 0.1vw solid var(--granich-light-grey);
`
const PreparationFilter = styled.div`
    font-size: 1.2vw;
    margin-right: 2.6vw;
    :hover {
        cursor: pointer;
    }
    :first-child {
        margin-left: 0.25vw;
    }

`

const PreparationTags = styled.div`
    display: flex;
`
const PreparationTag = styled.div`
    border: 1px solid grey;
    padding: 5px;
`

const PreparationItems = styled.div`
    display: flex;
`

const PreparationButtonMore = styled.div`

`


const PreCoursePreparation = () => {
    return (
        <PreparationSection id="preparation">
            <Container>
                <PreparationWrapper>
                    <PreparationHeader>
                        <PreparationTitle>
                            Подготовка <br/>к курсам
                        </PreparationTitle>
                        <PreparationText>
                        Сомневаетесь записаться ли на курс? <br/>Изучите бесплатные материалы школы <br/>и познакомьтесь с нашим подходом
                        </PreparationText>

                    </PreparationHeader>
                    <PreparationFilters>
                        <PreparationFilter>
                            Рекомендуемое
                        </PreparationFilter>

                        <PreparationFilter>
                            Новое
                        </PreparationFilter>
                        <PreparationFilter>
                            Популярное
                        </PreparationFilter>
                    </PreparationFilters>
                    <PreparationTags>
                        <PreparationTag>
                            Фриланс
                        </PreparationTag>
                        <PreparationTag>
                            Фриланс
                        </PreparationTag>
                        <PreparationTag>
                            Фриланс
                        </PreparationTag>
                    </PreparationTags>
                    <PreparationItems>
                        <PreparationItem/>
                        <PreparationItem/>
                        <PreparationItem/>

                    </PreparationItems>
                </PreparationWrapper>
            </Container>

        </PreparationSection>
    )
}

export default PreCoursePreparation
