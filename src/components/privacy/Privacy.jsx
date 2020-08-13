import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {Link} from 'gatsby';

const PrivacySection = styled.section`
    padding-top: 8.4vw;
`


const PrivacyWrapper = styled.div`
    background: white;
    border-radius: 0.5vw;
    padding: 4.2vw 4.8vw 6vw ;
`
const PrivacyLeftBlock = styled.div`
    width: 29%;
`
const PrivacyRightBlock = styled.div`
    width: 71%;
`

const PrivacyInfoBlock = styled.div`
    width: 13vw;
    padding-top: 1.2vw;
`
const PrivacyInfoBlockText = styled.div`
    font-size: 0.8vw;
    color: var(--granich-grey);
    line-height: 1.3;

`

const PrivacyInfoBlockPDFButton = styled.a`
    font-size: 1.1vw;
    padding: 0.4vw 1vw;
    font-weight: 500;
    color: var(--granich-red);
    border-radius: 100vw;
    border: 0.1vw solid var(--granich-red);
    display: inline-block;
    margin-bottom: 0.9vw;
    margin-left: -0.2vw;
`

const PrivacyTitle = styled.div`
    font-size: 5.6vw;
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    letter-spacing: -0.16vw;
    line-height: 1;
    margin-bottom: 6.3vw;
`
const PrivacyText = styled.div`
    font-size: 1.14vw;
    line-height: 1.5;
    margin-left: 0.4vw;

    // padding-right: 2vw;
    a {
        border-bottom: 0.05vw solid var(--granich-light-grey);
        :hover {
            border-bottom: none;
        }
    }
    p {
        margin-bottom: 0.5vw;
        color: var(--granich-grey);
        position: relative;
    }
    b {
        font-weight: 600;
        color: var(--granich-black);
    }
    i {
        position: absolute;
        top: 0;
        left: -19.5vw;
        width: 18vw;
        color: var(--granich-red);
        font-style: normal;
        font-weight: 500;
    }
`
const PrivacyMainBlocks = styled.div`
    display: flex;
    margin-bottom: 6.4vw;
`

const PrivacyFooterWrapper = styled.div`
    background: #F2F2F2;
    border-radius: 0.4vw;
    font-family: EB Garamond;
    font-style: italic;
    font-size: 2.37vw;
    font-weight: 500;
    text-align: center;
    padding: 1.3vw;
    letter-spacing: -0.02vw;
    line-height: 1;
    padding-bottom: -0.4vw;
`
const PrivacyFooterLink = styled(props => <Link {...props}/>)`
    font-style: italic;
    font-family: EB Garamond;
    font-size: 2.37vw;
    font-weight: 500;
    display: inline-block;
    // border-bottom: 0.1vw solid var(--granich-grey);
    // padding-bottom: -0.4vw;
    line-height: 1;
    position: relative;
    :before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -0.5vw;
        width: 100%;
        height: 0.1vw;
        background: #C0C0C0;
    }
    :hover {
        :before {
            display: none;
        }
    }
`


const Privacy = ({data}) => {
    return (
        <PrivacySection>
            <Container>
                <PrivacyWrapper>
                    <PrivacyMainBlocks>
                        <PrivacyLeftBlock>
                            <PrivacyInfoBlock>
                                <PrivacyInfoBlockPDFButton>
                                    PDF
                                </PrivacyInfoBlockPDFButton>
                                <PrivacyInfoBlockText>
                                    Настоящие Правила являются официальным документом
                                    Гранич Вадима  Владимировича
                                    ИНН 470320212730<br/>
                                    ОГРНИП 319784700098871
                                    Выдан 22.03.2019 г.
                                </PrivacyInfoBlockText>
                            </PrivacyInfoBlock>
                        </PrivacyLeftBlock>
                        <PrivacyRightBlock>
                            <PrivacyTitle>
                                Политика конфиденциальности
                            </PrivacyTitle>
                            <PrivacyText>
                                {documentToReactComponents(data)}
                            </PrivacyText>

                        </PrivacyRightBlock>
                    </PrivacyMainBlocks>
                    <PrivacyFooterWrapper>
                        Приятного обучения и до встречи на <PrivacyFooterLink to="/#courses">Курсах!</PrivacyFooterLink>
                    </PrivacyFooterWrapper>

                </PrivacyWrapper>
            </Container>
        </PrivacySection>
    )
}

export default Privacy
