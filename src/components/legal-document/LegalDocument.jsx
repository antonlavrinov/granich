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
    @media only screen and (max-width: 575px) {

            width: 3vw;
            margin-left: 0.5vw;
    }

`

const LegalDocumentSection = styled.section`
`


const LegalDocumentWrapper = styled.div`
    background: white;
    border-radius: 0.6vw;
    @media only screen and (max-width: 575px) {
        border-radius: 2.5vw;
    }
`
const LegalDocumentLeftBlock = styled.div`
    width: 29%;
    @media only screen and (max-width: 575px) {
        display: none;
    }
`
const LegalDocumentRightBlock = styled.div`
    width: 71%;
    position: relative;
    @media only screen and (max-width: 575px) {
        width: 100%;
    }
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
const LegalDocumentInfoBlockTextMobile = styled.div`
    display: none;
    line-height: 1.3;
    p {
        font-size: 0.8vw;
        color: var(--granich-grey);
    }
    @media only screen and (max-width: 575px) {
        display: block;
        p {
            font-size: 2.5vw;
        }
        margin-bottom: 3vw;
    }

`

const LegalDocumentInfoBlockPDFButton = styled.a`
    font-size: 1.15vw;
    padding: 0.4vw 1.4vw;
    font-weight: 500;
    color: var(--granich-red);
    border-radius: 100vw;
    border: 1px solid var(--granich-red);
    display: inline-block;
    margin-bottom: 0.9vw;
    margin-left: -0.2vw;
    // transition: all 0.2s ease;
    :hover {
        font-size: 1.15vw;
        font-weight: 500;
        background: var(--granich-red);
        color: white;
        cursor: pointer;
        svg {
            fill: white;
        }
    }

`


const LegalDocumentInfoBlockPDFButtonMobile = styled.a`
    display: none;    


    @media only screen and (max-width: 575px) {
        display: inline-block;
        font-size: 4vw;
        padding: 1vw 3.5vw;
        font-weight: 500;
        color: var(--granich-red);
        border-radius: 100vw;
        border: 1.5px solid var(--granich-red);
    
        margin-bottom: 0.9vw;
        margin-left: -0.2vw;
        position: absolute;
        top: 0;
        right: 0;

        :hover {
            font-size: 4vw;
            font-weight: 500;
            color: var(--granich-red);
            cursor: pointer;
        }
    }

`

const LegalDocumentTitle = styled.h1`
    font-size: 5.6vw;
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    letter-spacing: -0.16vw;
    line-height: 1;
    margin-bottom: 6.3vw;
    @media only screen and (max-width: 575px) {
        font-size: 8.5vw;
        line-height: 0.9;
        margin-bottom: 4.5vw;
    }
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
        border-bottom: 1px solid var(--granich-light-grey);
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
            margin: 0 ;
        }

    }



    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
        margin-left: 0;

        hr {
            margin: 2vw 0;
        }

        ul {
            li {
                padding-left: 3.5vw;
                
                i {
                    left: 0;
                }
            }
        }
        p {
            margin-bottom: 1.5vw;
            letter-spacing: 0;
        }

        i {
            position: relative;
            left: 0;
            width: 100%;
            padding: 2vw 3vw;
            border-radius: 1.5vw;
            margin: 1vw 0;
            display: block;
            color: var(--granich-black);
            color: var(--granich-red);
        }
        blockquote {
            p {
                margin: 0 ;
            }

        }
    }
`
const LegalDocumentMainContainer = styled.div`
    display: flex;
    // margin-bottom: 6.4vw;
    padding: 4.2vw 4.8vw 5vw;
    border-bottom: 0.3vw dotted #F2F2F2;
    @media only screen and (max-width: 575px) {
        padding: 6vw 6vw 6vw;
        border-bottom: 0.8vw dotted #F2F2F2;
    }
`
const LegalDocumentFooterContainer = styled.div`
    padding: 3vw 4.8vw 5vw;
    @media only screen and (max-width: 575px) {
        padding: 6vw 6vw 8vw;
    }
`

const LegalDocumentFooterWrapper = styled.div`
    background: #F2F2F2;
    border-radius: 0.5vw;
    font-family: EB Garamond;
    font-style: italic;
    font-size: 2.37vw;
    font-weight: 500;
    text-align: center;
    padding: 1.4vw;
    letter-spacing: -0.02vw;
    line-height: 1;
    @media only screen and (max-width: 575px) {
        font-size: 6.6vw;
        padding: 4vw 6vw 6vw 7.5vw;
        line-height: 1.1;
        border-radius: 1.5vw;
        text-align: left;
    }
`
const LegalDocumentFooterLink = styled(props => <Link {...props}/>)`
    font-style: italic;
    font-family: EB Garamond;
    font-size: 2.37vw;
    font-weight: 500;
    display: inline-block;
    line-height: 1;
    position: relative;
    :before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -0.5vw;
        width: 100%;
        height: 1px;
        background: #C0C0C0;
    }
    :hover {
        :before {
            display: none;
        }
    }
    @media only screen and (max-width: 575px) {
        font-size: 6.6vw;
        :before {
            bottom: -2vw;

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
    @media only screen and (max-width: 575px) {
        font-size: 2.5vw;
        margin-bottom: 5vw;
    }

`

const ArrowLinkBack = styled(props => <ArrowBack {...props}/>)`
  position: absolute;
  top: -0.1vw;
  right: -1.4vw;
  width: 1vw;
  height: 1vw;
  @media only screen and (max-width: 575px) {
    top: 0;
    right: -4.7vw;
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
                            <LegalDocumentInfoBlockPDFButtonMobile download target="_blank" href={dataPdf}>
                                PDF<Download/>
                            </LegalDocumentInfoBlockPDFButtonMobile>
                            <LegalDocumentDate>
                                {date}
                            </LegalDocumentDate>
                            <LegalDocumentTitle>
                                {type}
                            </LegalDocumentTitle>
                            <LegalDocumentInfoBlockTextMobile>
                                {documentToReactComponents(additionalInfo)}
                            </LegalDocumentInfoBlockTextMobile>
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
