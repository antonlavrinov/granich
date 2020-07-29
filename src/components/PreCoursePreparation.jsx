import React from 'react'
import { Container } from './style';
import styled from 'styled-components';
import PreparationItem from './PreparationItem';

const PreparationSection = styled.section`
    padding: 154px 0px;

`
const PreparationWrapper = styled.div`

    background: lightgrey;
    padding: 50px;
    border-radius: 10px;
`

const PreparationHeader = styled.div`
    display: flex;
`

const PreparationTitle = styled.div`
    color: black;
    font-size: 50px;
    font-weight: 700;

`

const PreparationText = styled.div`
    color: black;
    font-size: 15px;

`

const PreparationFilters = styled.div`
    display: flex;
    padding: 15px 0;
    border-bottom: 2px solid grey;
`
const PreparationFilter = styled.div`
    margin-right: 10px;
    :hover {
        cursor: pointer;
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
                            Подготовка к курсам
                        </PreparationTitle>
                        <PreparationText>
                        Сомневаетесь записаться ли на курс? Изучите бесплатные материалы школы и познакомьтесь с нашим подходом
                        </PreparationText>

                    </PreparationHeader>
                    <PreparationFilters>
                        <PreparationFilter>
                            Рекомендуемое
                        </PreparationFilter>
                        <PreparationFilter>
                            Популярное
                        </PreparationFilter>
                        <PreparationFilter>
                            Новое
                        </PreparationFilter>
                        <PreparationFilter>
                            Всё
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
