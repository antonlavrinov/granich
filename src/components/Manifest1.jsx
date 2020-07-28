import React from 'react'
import styled from 'styled-components';
import author from '../assets/images/author.jpg';
import { Container } from './style';
import parse from 'html-react-parser';

const ManifestSection = styled.section`
    padding: 9.8vw 1vw;
`
const ManifestWrapper = styled.div`
    display: flex;
`
const ManifestAuthor = styled.div`
    margin-top: -2.3vw;
    margin-right: 7.5vw;
`

const ManifestInfo = styled.div`

`

const ManifestAuthorImage = styled.div`
    width: 13.8vw;
    height: 13.8vw;
    border-radius: 10vw;
    margin-left: -2vw;
    margin-bottom: 2vw;
`

const ManifestAuthorName = styled.div`
    font-size: 1.16vw;
    font-weight: 500;
    line-height: 1.55vw;
`

const ManifestAuthorText = styled.div`
    font-size: 1.16vw;
    line-height: 1.55vw;
    color: var(--granich-grey);
`

const ManifestInfoTitle = styled.h2`
    font-family: EB Garamond;
    font-weight: 500;
    font-size: 6.2vw;
    width: 45vw;
    line-height: 4.8vw;
    position: relative;
    margin-bottom: 3.5vw;
    letter-spacing: 0.05vw;
    :after {
        content: '»';
        margin-left: 1.8vw;
        margin-top: 0.57vw;
        position: absolute;
        font-size: 7vw;

    }
    :before {
        content: '«';
        position: absolute;
        font-size: 7vw;
        top: -0.8vw;
        left: -5.1vw;
    }

`

const ManifestInfoText = styled.p`
    font-size: 1.55vw;
    line-height: 2vw;
    width: 45vw;
    margin-bottom: 2.5vw;

`

const ManifestInfoRules = styled.div`
    display: flex;
`

const ManifestInfoRule = styled.div`
    position: relative;
    font-size: 1.15vw;
    color: var(--granich-grey);
    width: 15vw;
    line-height: 1.6vw;
    margin-right: 2vw;

`

const ManifestRuleTitle = styled.span`
    display: block;
    font-weight: 500;
    font-size: 1.2vw;

`

const ManifestRuleNumber = styled.div`
    position: absolute;
    top: 0.1vw;
    left: -2.5vw;
    font-size: 3.5vw;
    font-family: EB Garamond;
    font-weight: 400;
`

const Container1 = styled.div`
    // width: 78%;
    width: 78vw;
    max-width: 78vw;
    margin: 0 auto;

    // @media(max-width: 991px) {
    //     width: 90%;
    // }
`


const Manifest = () => {
    return (
        <ManifestSection>
            <Container1>
                <ManifestWrapper>
                    <ManifestAuthor>
                        <ManifestAuthorImage style={{background: `url(${author})`,
                        backgroundSize: 'cover'}}/>
                        <ManifestAuthorName>Вадим Гранич</ManifestAuthorName>
                        <ManifestAuthorText>Создатель школы, <br/>автор курсов</ManifestAuthorText>
                    </ManifestAuthor>
                    <ManifestInfo>
                        <ManifestInfoTitle>
                            Делай из любви, а не страха
                        </ManifestInfoTitle>
                        <ManifestInfoText>
                            Сюда приходят, чтобы с любовью развивать в себе твердые навыки, а не из страха срочно понахвататься каких-то знаний. Поэтому, создавая курсы, я придерживаясь трех принципов:
                        </ManifestInfoText>
                        <ManifestInfoRules>
                            <ManifestRule title={`Выточенно —`}
                                          text={`Вся информация <br/>
                                            на курсах очищена <br/>
                                            от лишнего, <br/>
                                            грамотно подана <br/>
                                            и структурирована`}
                                          number={1}
                            />
                            <ManifestRule title={`Интенсивно —`}
                                          text={`Курсы занимают много времени, акцент на практику (смотрите фильм Одержимость)`}
                                          number={2}
                            />
                            <ManifestRule title={`С дедлайнами —`}
                                          text={`Не получится просто взять курс и забыть о нем. Дедлайны будут постоянно вас толкать вперед`}
                                          number={3}
                            />
                        </ManifestInfoRules>
                    </ManifestInfo>
                </ManifestWrapper>
            </Container1>
        </ManifestSection>
    )
}

export default Manifest


const ManifestRule = ({title, text, number}) => {
    return (
        <ManifestInfoRule>
            <ManifestRuleTitle>{title}</ManifestRuleTitle>
                {parse(text)}
                <ManifestRuleNumber>{number}</ManifestRuleNumber>
        </ManifestInfoRule>
    )
}