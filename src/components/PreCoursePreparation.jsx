import React from 'react'
import { Container } from './style';
import styled from 'styled-components';
import PreparationPost from './PreparationPost';

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
    margin-bottom: 3.4vw;
`

const PreparationTitle = styled.div`
    color: black;
    font-size: 4.3vw;
    letter-spacing: -0.2vw;
    font-weight: 700;
    line-height: 1.05;
    margin-right: 4vw;

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
    padding: 15px 0 0;
    border-bottom: 0.1vw solid var(--granich-light-grey);
    margin-bottom: 1vw;
`
const PreparationFilter = styled.div`
    font-size: 1.15vw;
    margin-right: 2.6vw;
    margin-bottom: -0.1vw;
    padding-bottom: 1vw;
    border-bottom: 0.1vw solid var(--granich-red);
    :hover {
        cursor: pointer;
    }
    :first-child {
        padding-left: 0.25vw;
    }

`

const PreparationTags = styled.div`
    display: flex;
`
const PreparationTag = styled.div`
    border: 1px solid grey;
    padding: 5px;
`

const PreparationPosts = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 2vw;
    grid-row-gap: 2vw;
    padding: 0 0.2vw;
`

const PreparationButtonMore = styled.div`

`


const PreCoursePreparation = ({data}) => {
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
                    <PreparationPosts>

                        {data.edges.map((post, idx) => {
                            return (
                                <PreparationPost key={idx} post={post}/>
                            )
                        })}


                    </PreparationPosts>
                </PreparationWrapper>
            </Container>

        </PreparationSection>
    )
}

export default PreCoursePreparation
