import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import BehanceIcon from '../../assets/svgs/behance-icon.svg';
import PDFIcon from '../../assets/svgs/pdf-icon.svg';
import MediumIcon from '../../assets/svgs/medium-icon.svg';
import ArrowDown from '../../assets/svgs/header-arrow-icon-down.svg';
import ArrowOut from '../../assets/svgs/header-arrow-icon-out.svg';

const ArrowLinkDown = styled(props => <ArrowDown {...props}/>)`
  position: absolute;
  top: 0;
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

const Medium = styled(props => <MediumIcon {...props}/>)`
    min-width: 5.8vw;
    min-height: 5.8vw;
    width: 5.8vw;
    height: 5.8vw;
    margin-right: 0.5vw;
    @media only screen and (max-width: 575px) {
        min-width: 18vw;
        min-height: 18vw;
        width: 18vw;
        height: 18vw;
        margin-right: 2vw;
    }
`

const Behance = styled(props => <BehanceIcon {...props}/>)`
    min-width: 5.8vw;
    min-height: 5.8vw;
    width: 5.8vw;
    height: 5.8vw;
    margin-right: 0.5vw;
    @media only screen and (max-width: 575px) {
        min-width: 18vw;
        min-height: 18vw;
        width: 18vw;
        height: 18vw;
        margin-right: 2vw;
    }
`

const PDF = styled(props => <PDFIcon {...props}/>)`
    min-width: 5.8vw;
    min-height: 5.8vw;
    width: 5.8vw;
    height: 5.8vw;
    margin-right: 0.5vw;
    @media only screen and (max-width: 575px) {
        min-width: 18vw;
        min-height: 18vw;
        width: 18vw;
        height: 18vw;
        margin-right: 2vw;
    }
`

const ArrowLinkOut = styled(props => <ArrowOut {...props}/>)`
  position: absolute;
  top: 0;
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


const ContentLinksSection = styled.section`
    margin-bottom: 2.5vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 4vw;
    }
`


const ContentLinksWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1.7vw;
    grid-row-gap: 1.5vw;
    ${props => !props.exists && `
        display: none;
    `}
    @media only screen and (max-width: 575px) {
        grid-template-columns: 1fr;
        grid-row-gap: 4vw;
    }

`



const LinkBlock = styled.a`
    border-radius: 0.4vw;
    background: #2A2A2A;
    padding: 1vw;
    display: flex;
    transition: transform 0.3s ease;
    :hover {
        transform: scale(1.05);
    }
    @media only screen and (max-width: 575px) {
        padding: 4vw 5.4vw;
        border-radius: 1.5vw;

    }

`

const LinkText = styled.div`
    color: var(--granich-grey);
    font-size: 1.15vw;
    margin-top: 0.4vw;
    line-height: 1.4;
    letter-spacing: 0;
    span {
        display: inline-block;
        color: white;
        font-weight: 600;
        position: relative;

    }
    @media only screen and (max-width: 575px) {
        font-size: 3.6vw;
        margin-top: 1.2vw;
        padding-right: 10vw;
    }
`




const ContentLink = ({link, type, text, title}) => {
    const arrow = type === 'PDF' ? (<ArrowLinkDown/>) : (<ArrowLinkOut/>);
    return (
        <LinkBlock target="_blank" href={link}>
            {type === 'Behance' ? (<Behance/>) : (type === 'Medium') ? (<Medium/>) : (type === 'PDF') ? (<PDF/>) : null}
            <LinkText>
                <span>{title}{arrow}</span><br/>{text}
            </LinkText>
        </LinkBlock>
    )
}


const ContentLinks = ({data}) => {
    return (
        <ContentLinksSection>
            <Container>
                <ContentLinksWrapper exists={data.contentfulContent.contentPDF || data.contentfulContent.contentLinkMedium || data.contentfulContent.contentLinkBehance}>
                    {data.contentfulContent.contentPDF && <ContentLink  type="PDF" text={'Скачайте и читайте урок оффлайн в любое время'} title={'Скачать PDF'} link={data.contentfulContent.contentPDF.file.url}/> }
                    {data.contentfulContent.contentLinkMedium && <ContentLink  type="Medium" text={'Читайте урок в формате статьи на Медиуме '} title={'Читать на Медиуме'} link={data.contentfulContent.contentLinkMedium.contentLinkMedium}/> }
                    {data.contentfulContent.contentLinkBehance && <ContentLink  type="Behance" text={'Смотрите и Добавьте материал себе на Биханс'} title={'Смотреть на Бихансе'} link={data.contentfulContent.contentLinkBehance.contentLinkBehance}/> }
                    
                </ContentLinksWrapper>


            </Container>
        </ContentLinksSection>
    )
}

export default ContentLinks
