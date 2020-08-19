import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {Link} from 'gatsby';
import DownloadIcon from '../../assets/svgs/download-icon.svg';
import ArrowBack from '../../assets/svgs/header-arrow-back.svg';

const Download = styled(props => <DownloadIcon {...props}/>)`
    width: 0.9vw;
    position: relative;
    top: 0.08vw;
    margin-left: 0.2vw;
    fill: var(--granich-red);
`

const PrivacySection = styled.section`
    padding-top: 8.4vw;
`


const PrivacyWrapper = styled.div`
    background: white;
    border-radius: 0.5vw;
    // padding: 4.2vw 4.8vw 6vw ;
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
    font-size: 1.15vw;
    padding: 0.4vw 1.4vw;
    font-weight: 500;
    color: var(--granich-red);
    border-radius: 100vw;
    border: 0.1vw solid var(--granich-red);
    display: inline-block;
    margin-bottom: 0.9vw;
    margin-left: -0.2vw;
    :hover {
        font-size: 1.15vw;
        font-weight: 500;
        color: var(--granich-red);
        cursor: pointer;
    }
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
        font-weight: 500;
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
const PrivacyMainContainer = styled.div`
    display: flex;
    // margin-bottom: 6.4vw;
    padding: 4.2vw 4.8vw 5vw;
    border-bottom: 0.3vw dotted #F2F2F2;
`
const PrivacyFooterContainer = styled.div`
    padding: 3vw 4.8vw 5vw;
`

const PrivacyFooterWrapper = styled.div`
    background: #F2F2F2;
    border-radius: 0.4vw;
    font-family: EB Garamond;
    font-style: italic;
    font-size: 2.37vw;
    font-weight: 500;
    text-align: center;
    padding: 1.4vw;
    letter-spacing: -0.02vw;
    line-height: 1;
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

const PrivacyDate = styled.div`
    font-size: 0.9vw;
    font-weight: 500;
    margin-left: 0.4vw;
    color: var(--granich-red);
    padding-top: 1.7vw;
    margin-bottom: 1.2vw;
    // margin-top: 3vw;

`

const ArrowLinkBack = styled(props => <ArrowBack {...props}/>)`
  position: absolute;
  top: -0.1vw;
  right: -1.4vw;
  width: 1vw;
  height: 1vw;
  @media only screen and (max-width: 575px) {
    top: -1.6vw;
    right: -3.7vw;
    width: 3.1vw;
    height: 3.1vw;
  }


`


const Privacy = ({data}) => {
    return (
        <PrivacySection>
            <Container>
                <PrivacyWrapper>
                    <PrivacyMainContainer>
                        <PrivacyLeftBlock>
                            <PrivacyInfoBlock>
                                <PrivacyInfoBlockPDFButton download target="_blank" href={data.privacyPDF.file.url}>
                                    PDF<Download/>
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
                            <PrivacyDate>
                                {data.privacyDate}
                            </PrivacyDate>
                            <PrivacyTitle>
                                Политика конфиденциальности
                            </PrivacyTitle>
                            <PrivacyText>
                                {documentToReactComponents(data.childContentfulGranichPrivacyPrivacyTextRichTextNode.json)}
                            </PrivacyText>


                        </PrivacyRightBlock>
                    </PrivacyMainContainer>
                    <PrivacyFooterContainer>
                        <PrivacyFooterWrapper>
                            Приятного обучения и до встречи на <PrivacyFooterLink to="/#courses">Курсах!<ArrowLinkBack/></PrivacyFooterLink>
                        </PrivacyFooterWrapper>
                    </PrivacyFooterContainer>


                </PrivacyWrapper>
            </Container>
        </PrivacySection>
    )
}

export default Privacy
