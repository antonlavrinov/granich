import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';

const CourseExampleSection = styled.section`

`
const CourseExampleWrapper = styled.div`

    background: white;
    justify-content: space-between;
    padding: 70px;
`

const CourseExampleHeader = styled.div`
    display: flex;
`
const CourseExampleAuthor = styled.div`

`

const CourseExampleAuthorImage = styled.div`
    background: lightgrey;
    width: 100px;
    height: 100px;
    border-radius: 100px;
`
const CourseExampleAuthorName = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
`

const CourseExampleAuthorText = styled.div`
    font-size: 15px;
    line-height: 1.4;
    color: var(--granich-grey);
`

const CourseExampleTitle = styled.div`
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    font-size: 80px;
    // width: 600px;
    line-height: 1;
    position: relative;
    margin-bottom: 50px;
    margin-left: 15px;
    :after {
        content: '»';
        margin-left: 20px;
        margin-top: 5px;
        position: absolute;
        font-size: 70px;

    }
    :before {
        content: '«';
        position: absolute;
        font-size: 70px;
        top: -12px;
        left: -45px;
    }
`

const CourseExampleInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;

`
const CourseExampleImage = styled.div`
    width: 100%;
    height: 200px;
    background: lightgrey;
`

const CourseExampleInfoBlock = styled.div`
    width: 50%;
    color: grey;
    border-right: 1px solid black;
    &:last-child {
        border: 0;
    }
`



const CourseExample = () => {
    return (
        <CourseExampleSection>
            <Container>
                <CourseExampleWrapper>
                    <CourseExampleHeader>
                        <CourseExampleAuthor>
                            <CourseExampleAuthorImage/>
                            <CourseExampleAuthorName>
                                Вадим Гранич
                            </CourseExampleAuthorName>
                            <CourseExampleAuthorText>автор курса</CourseExampleAuthorText>
                        </CourseExampleAuthor>
                        <CourseExampleTitle>
                            На курсе мы разложим знания по полочкам
                        </CourseExampleTitle>
                    </CourseExampleHeader>
                    <CourseExampleInfoWrapper>
                        <CourseExampleInfoBlock>
                                <CourseExampleImage/>
                                Вы кое-что слышали о шрифтах. Знакомы с цветом. Пользовались jpeg. Возможно, даже делали свои макеты. Но упорядочены ли ваши знания? Неважно, начинаете вы с нуля или у вас уже есть какой-то опыт — знания требуют структурности.
                        </CourseExampleInfoBlock>
                        <CourseExampleInfoBlock>
                                <CourseExampleImage/>
                                После курса вы сможете уверенно аргументировать свои решения. Будете понимать как работает графический дизайн. Ваши знания станут упорядочены, чтобы быстро достать с нужной полки необходимое.
                        </CourseExampleInfoBlock>
                    </CourseExampleInfoWrapper>
                    
                </CourseExampleWrapper>
            </Container>
        </CourseExampleSection>
    )
}

export default CourseExample
