import React from 'react'
import styled from 'styled-components';
import author from '../assets/images/author.jpg';
import { Container } from './style';
import parse from 'html-react-parser';

const ManifestSection = styled.section`
    padding: 154px 0px;
`
const ManifestWrapper = styled.div`
    display: flex;
`
const ManifestAuthor = styled.div`
    margin-top: -27px;
    margin-right: 106px;
`

const ManifestInfo = styled.div`

`

const ManifestAuthorImage = styled.div`
    width: 184px;
    height: 184px;
    border-radius: 100px;
    margin-left: -23px;
    margin-bottom: 22px;
`

const ManifestAuthorName = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
`

const ManifestAuthorText = styled.div`
    font-size: 15px;
    line-height: 1.4;
    color: var(--granich-grey);
`

const ManifestInfoTitle = styled.h2`
    font-family: EB Garamond;
    font-weight: 500;
    font-size: 85px;
    width: 600px;
    line-height: 0.75;
    position: relative;
    margin-bottom: 50px;
    :after {
        content: '»';
        margin-left: 20px;
        margin-top: 5px;
        position: absolute;
        font-size: 95px;

    }
    :before {
        content: '«';
        position: absolute;
        font-size: 95px;
        top: -12px;
        left: -65px;
    }

`

const ManifestInfoText = styled.p`
    font-size: 21px;
    line-height: 1.25;
    width: 600px;
    margin-bottom: 36px;


`

const ManifestInfoRules = styled.div`
    display: flex;
`

const ManifestInfoRule = styled.div`
    position: relative;
    font-size: 15px;
    color: var(--granich-grey);
    width: 180px;
    line-height: 1.4;
    margin-right: 50px;

`

const ManifestRuleTitle = styled.span`
    display: block;
    font-weight: 500;
    font-size: 15px;

`

const ManifestRuleNumber = styled.div`
    position: absolute;
    top: 2px;
    left: -33px;
    font-size: 45px;
    font-family: EB Garamond;
    font-weight: 400;
    line-height: 0.5;
`


const Manifest = () => {
    return (
        <ManifestSection id="manifest">
            <Container>
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
            </Container>
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