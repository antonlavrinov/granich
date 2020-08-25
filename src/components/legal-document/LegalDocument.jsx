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

const LegalDocumentSection = styled.section`
    padding-top: 8.4vw;
`


const LegalDocumentWrapper = styled.div`
    background: white;
    border-radius: 0.5vw;
    // padding: 4.2vw 4.8vw 6vw ;
`
const LegalDocumentLeftBlock = styled.div`
    width: 29%;
`
const LegalDocumentRightBlock = styled.div`
    width: 71%;
`

const LegalDocumentInfoBlock = styled.div`
    // width: 13vw;
    padding-top: 1.2vw;
`
const LegalDocumentInfoBlockText = styled.div`

    line-height: 1.3;
    p {
        font-size: 0.8vw;
        color: var(--granich-grey);
    }

`

const LegalDocumentInfoBlockPDFButton = styled.a`
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

const LegalDocumentTitle = styled.div`
    font-size: 5.6vw;
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    letter-spacing: -0.16vw;
    line-height: 1;
    margin-bottom: 6.3vw;
`
const LegalDocumentText = styled.div`
    font-size: 1.14vw;
    line-height: 1.5;
    margin-left: 0.4vw;
    hr {
        opacity: 0;
        margin: 1vw 0;
    }
    a {
        border-bottom: 0.05vw solid var(--granich-light-grey);
        :hover {
            border-bottom: none;
        }
    }
    ul {
        li {
            padding-left: 1.5vw;
            i {
                left: -21.1vw;
            }
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
        left: -19.6vw;
        width: 18vw;
        color: var(--granich-red);
        font-style: normal;
        font-weight: 500;
    }
    blockquote {
        p {
            margin-bottom: 0;
        }
    }
`
const LegalDocumentMainContainer = styled.div`
    display: flex;
    // margin-bottom: 6.4vw;
    padding: 4.2vw 4.8vw 5vw;
    border-bottom: 0.3vw dotted #F2F2F2;
`
const LegalDocumentFooterContainer = styled.div`
    padding: 3vw 4.8vw 5vw;
`

const LegalDocumentFooterWrapper = styled.div`
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
const LegalDocumentFooterLink = styled(props => <Link {...props}/>)`
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

const LegalDocumentDate = styled.div`
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


const LegalDocument = ({date, type, mainText, dataPdf, additionalInfo}) => {
    return (
        <LegalDocumentSection>
            <Container>
                <LegalDocumentWrapper>
                    <LegalDocumentMainContainer>
                        <LegalDocumentLeftBlock>
                            <LegalDocumentInfoBlock>
                                <LegalDocumentInfoBlockPDFButton download target="_blank" href={dataPdf}>
                                    PDF<Download/>
                                </LegalDocumentInfoBlockPDFButton>
                                <LegalDocumentInfoBlockText>
                                    {documentToReactComponents(additionalInfo)}
                                </LegalDocumentInfoBlockText>
                            </LegalDocumentInfoBlock>
                        </LegalDocumentLeftBlock>
                        <LegalDocumentRightBlock>
                            <LegalDocumentDate>
                                {date}
                            </LegalDocumentDate>
                            <LegalDocumentTitle>
                                {type}
                            </LegalDocumentTitle>
                            <LegalDocumentText>
                                {documentToReactComponents(mainText)}
                            </LegalDocumentText>


                        </LegalDocumentRightBlock>
                    </LegalDocumentMainContainer>
                    <LegalDocumentFooterContainer>
                        <LegalDocumentFooterWrapper>
                            Приятного обучения и до встречи на <LegalDocumentFooterLink to="/#courses">Курсах!<ArrowLinkBack/></LegalDocumentFooterLink>
                        </LegalDocumentFooterWrapper>
                    </LegalDocumentFooterContainer>


                </LegalDocumentWrapper>
            </Container>
        </LegalDocumentSection>
    )
}

export default LegalDocument
