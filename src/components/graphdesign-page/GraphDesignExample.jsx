import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import ExampleArrow from '../../assets/svgs/example-arrow.svg';


const GraphDesignExampleSection = styled.section`
    margin-bottom: 50px;
`
const GraphDesignExampleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    justify-content: space-between;
    padding: 70px;
    
    svg {
        width: 300px;
        margin: 0 auto;
    }
`

const GraphDesignExampleHeader = styled.div`
    display: flex;
`
const GraphDesignExampleAuthor = styled.div`
    margin-right: 50px;
`

const GraphDesignExampleAuthorImage = styled.div`
    background: lightgrey;
    width: 100px;
    height: 100px;
    border-radius: 100px;
`
const GraphDesignExampleAuthorName = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
`

const GraphDesignExampleAuthorText = styled.div`
    font-size: 15px;
    line-height: 1.4;
    color: var(--granich-grey);
`

const GraphDesignExampleTitle = styled.div`
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    font-size: 70px;
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

const GraphDesignExampleInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;

`
const GraphDesignExampleImage = styled.div`
    width: 100%;
    height: 200px;
    background: lightgrey;
    margin-bottom: 20px;
`

const GraphDesignExampleInfoBlock = styled.div`
    width: 50%;
`
const GraphDesignExampleInfoText = styled.div`
    color: grey;
    font-size: 18px;
`

const GraphDesignExampleImageLine = styled.div`
    width: 1.5px;
    background: grey;
    margin: 0 40px;
`



const GraphDesignExample = () => {
    return (
        <GraphDesignExampleSection>
            <Container>
                <GraphDesignExampleWrapper>
                    <GraphDesignExampleHeader>
                        <GraphDesignExampleAuthor>
                            <GraphDesignExampleAuthorImage/>
                            <GraphDesignExampleAuthorName>
                                Вадим Гранич
                            </GraphDesignExampleAuthorName>
                            <GraphDesignExampleAuthorText>автор курса</GraphDesignExampleAuthorText>
                        </GraphDesignExampleAuthor>
                        <GraphDesignExampleTitle>
                            На курсе мы разложим знания по полочкам
                        </GraphDesignExampleTitle>
                    </GraphDesignExampleHeader>
                    <GraphDesignExampleInfoWrapper>
                        <GraphDesignExampleInfoBlock>
                                <GraphDesignExampleImage/>
                                <GraphDesignExampleInfoText>
                                    Вы кое-что слышали о шрифтах. Знакомы с цветом. Пользовались jpeg. Возможно, даже делали свои макеты. Но упорядочены ли ваши знания? Неважно, начинаете вы с нуля или у вас уже есть какой-то опыт — знания требуют структурности.
                                </GraphDesignExampleInfoText>
                                
                        </GraphDesignExampleInfoBlock>
                        <GraphDesignExampleImageLine/>
                        <GraphDesignExampleInfoBlock>
                                <GraphDesignExampleImage/>
                                <GraphDesignExampleInfoText>
                                    После курса вы сможете уверенно аргументировать свои решения. Будете понимать как работает графический дизайн. Ваши знания станут упорядочены, чтобы быстро достать с нужной полки необходимое.
                                </GraphDesignExampleInfoText>

                        </GraphDesignExampleInfoBlock>
                    </GraphDesignExampleInfoWrapper>
                    <ExampleArrow/>
                    
                </GraphDesignExampleWrapper>
            </Container>
        </GraphDesignExampleSection>
    )
}

export default GraphDesignExample
