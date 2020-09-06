import React from 'react'
import styled from 'styled-components';
import BackgroundImage from 'gatsby-image';
import PinterestIcon from '../assets/svgs/pinterest-icon.svg';
import BehanceIcon from '../assets/svgs/behance-icon.svg';
import PinterestLinkOut from '../assets/svgs/arrow-white-newpage.svg';
import BehanceLinkOut from '../assets/svgs/behance-link-out.svg';
import MediumIcon from '../assets/svgs/medium-icon.svg';
import YoutubeIcon from '../assets/svgs/youtube-icon.svg';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

const Behance = styled(props => <BehanceIcon {...props}/>)`
    width: 2.3vw;
    @media only screen and (max-width: 575px) {
        width: 6.5vw;
    }
`

const BehanceMixed = styled(props => <BehanceIcon {...props}/>)`
    width: 2.7vw;
    @media only screen and (max-width: 575px) {
        width: 7vw;
    }
`

const Youtube = styled(props => <YoutubeIcon {...props}/>)`
    height: 2.6vw;
    margin-right: -0.5vw;
    @media only screen and (max-width: 575px) {
        height: 7vw;
        margin-right: -1.3vw;
    }
`

const YoutubeMixed = styled(props => <YoutubeIcon {...props}/>)`
    height: 2.9vw;
    margin-left: -0.1vw;
    @media only screen and (max-width: 575px) {
        height: 7.4vw;
        margin-left: -1vw;
    }
`
const Medium = styled(props => <MediumIcon {...props}/>)`
    width: 2.7vw;
    margin-right: 0.4vw;
    @media only screen and (max-width: 575px) {
        width: 7vw;
    }
`
const Pinterest = styled(props => <PinterestIcon {...props}/>)`
    width: 2.1vw;
    @media only screen and (max-width: 575px) {
        width: 6.5vw;
    }

`
const PinterestOut = styled(props => <PinterestLinkOut {...props}/>)`
    width: 2.2vw;
    @media only screen and (max-width: 575px) {
        width: 6.5vw;
    }

`
const BehanceOut = styled(props => <BehanceLinkOut {...props}/>)`
    width: 2.2vw;
    @media only screen and (max-width: 575px) {
        width: 6.5vw;
    }
`

const ContentWrapperLink = styled.a`
    background: #2b2b2b;
    border-radius: 0.5vw;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    // height: 20.3vw;
    height: 100%;
    min-height: 20.3vw;
    :hover {
        transform: scale(1.03);
        cursor: pointer;
    }
    @media only screen and (max-width: 575px) {
        // height: 56vw;
        // height: auto;
        border-radius: 1.3vw;
        min-height: 56vw;
    }


`

const ContentWrapperExternalLink = styled.a`
    background: red;
    border-radius: 0.5vw;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    // height: 20.3vw;
    height: 100%;
    min-height: 20.3vw;
    :hover {
        cursor: pointer;
        transform: scale(1.03);
    }
    ${props => props.type === 'Pinterest' && `
        background: #830404;
    ` }
    ${props => props.type === 'Behance' && `
        background: #0E3983;
    ` }   
    @media only screen and (max-width: 575px) {
        // height: 56vw;
        min-height: 56vw;

        border-radius: 1.3vw;
    } 
`

const ContentContainer = styled.div`
    padding: 0.5vw 1.05vw 0.7vw;
    @media only screen and (max-width: 575px) {
        padding: 1.9vw 2.8vw 2.2vw;
    }
`



const ContentTagList = styled.div`
    display: flex;
    margin-bottom: 0.7vw;
    margin-left: -0.2vw;
    margin-right: -0.2vw;
    margin-top: 0.3vw;
    flex-wrap: wrap;
    line-height: 1;
    @media only screen and (max-width: 575px) {
        // margin-bottom: 2vw;
        margin-top: 0.5vw;
        margin-bottom: 1vw;
    }
`


const ContentTag = styled.div`
    border: 1px solid white;
    color: white;
    border-radius: 100vw;
    font-weight: 400;
    font-size: 0.9vw;
    padding: 0.3vw 0.4vw 0.3vw;
    display: inline-block;
    letter-spacing: -0.03vw;
    margin-right: 0.3vw;
    :last-child {
        margin-right: 0;
    }
    @media only screen and (max-width: 575px) {


        border-width: 1px;
        font-size: 2.5vw;
        padding: 0.4vw 1vw 0.4vw;
        font-weight: 500;
        margin-right: 1vw;
        letter-spacing: -0.05vw;
        margin-bottom: 1vw;
    }
`

const ContentTitle = styled.div`
    font-size: 1.25vw;
    line-height: 1;
    font-weight: 500;
    letter-spacing: -0.05vw;
    color: white;
    max-width: 14vw;
    margin-left: -0.2vw;
    @media only screen and (max-width: 575px) {

        font-size: 3.8vw;
        max-width: 100%;
    }
`

const ContentImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    margin-bottom: 1vw;
    max-height: 7.8vw;
    min-height: 7.8vw;
    height: 7.8vw;
    @media only screen and (max-width: 575px) {
        max-height: 21vw;
        margin-bottom: 2.8vw;
        min-height: 21vw;
        height: 21vw;
    }
`

const ContentDescr = styled.div`
    margin-top: 0.3vw;
    max-width: 14vw;
    margin-left: -0.2vw;
    p {    
        font-size: 0.9vw;
        color: white;
        font-weight: 400;
        letter-spacing: -0.01vw;
        line-height: 1.15;
    }
    @media only screen and (max-width: 575px) {
        max-width: 100%;
        margin-top: 1vw;
        p { 
            font-size: 2.8vw;
        } 

    }
`

const ContentButtonContainer = styled.div`
    padding: 1vw 1.1vw 1vw;
    ${props => props.type === 'Youtube' && `
        display: flex;
        padding: 0.9vw 1.1vw 0.9vw;
    `}
    ${props => props.type === 'Youtube + Medium + Behance' && `
        display: flex;
        padding: 0.3vw 1.1vw 1vw;
    `}
    @media only screen and (max-width: 575px) {
        padding: 2.4vw 3vw 2.4vw;
        ${props => props.type === 'Youtube' && `
        display: flex;
        padding: 2.4vw 3vw 2.4vw;
        `}
        ${props => props.type === 'Youtube + Medium + Behance' && `
            display: flex;
            padding: 1.5vw 3vw 2.4vw;
        `}
    }
`

const ContentButton = styled.div`
    background: none;
    border-radius: 0 0 0.5vw 0.5vw;
    margin-top: auto;
    ${props => props.type === 'Youtube' && `
    background: #222222;
    ` }
    ${props => props.type === 'Pinterest' && `
        background: #4C0101;
    ` }
    ${props => props.type === 'Behance' && `
        background: #011E4B;
    ` }

    @media only screen and (max-width: 575px) {
        border-radius: 0 0 1.3vw 1.3vw;
    }
`

const ContentButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    ${props => props.type === 'Youtube + Medium + Behance' && `
        align-items: start;
    `
    }
`


const ContentButtonText = styled.div`
    color: white;
    font-size: 1.3vw;
    font-weight: 500;
    line-height: 0.95;

    margin-left: -0.1vw;
    @media only screen and (max-width: 575px) {
        font-size: 4vw;
    }

`

const ContentIconsWrapper = styled.div`
    display: flex;
    margin-right: -0.4vw;
    align-items: center;
    margin-top: 0.1vw;
    svg {
        :first-child {
            margin-right: -0.4vw;
        }
    }
    @media only screen and (max-width: 575px) {
        margin-right: -1vw;
        svg {
            :first-child {
                margin-right: -1.4vw;
            }
        }
    }
`



// YOUTUBE
const ContentButtonYoutubeTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 0.8vw;
`

const ContentButtonYoutubeText = styled.div`

    margin-top: -1vw;
    color: white;
    font-size: 1.3vw;
    font-weight: 500;
    line-height: 0.95;

    margin-left: -0.1vw;
    @media only screen and (max-width: 575px) {
        font-size: 4vw;
    }
`

const ContentButtonYoutubeTiming = styled.div`
    color: white;
    font-size: 0.67vw;
    margin-top: 0.2vw;
    @media only screen and (max-width: 575px) {
        font-size: 2vw;
        margin-top: 0.6vw;
    }

`




// MIXED

const ContentButtonWatchBlockWrapper = styled.div`
    // margin-bottom: -0.6vw;
`

const ContentButtonWatchBlock = styled.div`
    display: flex;
    align-items: flex-end;
    margin-left: -0.15vw;
`
const ContentButtonBlockTitle = styled.div`
    color: grey;
    font-size: 0.8vw;
    margin-bottom: 0.3vw;
    @media only screen and (max-width: 575px) {
        font-size: 2.5vw;
        margin-bottom: 1vw;
    }
`

const ContentButtonReadBlockWrapper = styled.div`
    margin-bottom: -0.6vw;
`

const ContentButtonReadBlock = styled.div`
    margin-right: -0.3vw;
    @media only screen and (max-width: 575px) {
        margin-right: -1vw;
    }
`
const ContentButtonMixedTiming = styled.div`
    color: white;
    font-size: 0.67vw;
    padding-bottom: 0.3vw;
    @media only screen and (max-width: 575px) {
        font-size: 2vw;
        padding-bottom: 0.8vw;
    }

`




const PreparationContent = ({content}) => {

    const youtube = 'Youtube';
    const behance = 'Behance';
    const pinterest = 'Pinterest';
    const mixed = 'Youtube + Medium + Behance';
    const contentExternalLink = content.contentType === pinterest ? (
        content.contentLinkPinterest) : content.contentType === behance ? (content.contentLinkBehance) : '/';


    return (
        <div className="content">
            {content.contentType === youtube || content.contentType === mixed ? (
                <ContentWrapperLink href={`/${content.contentSlug}`}  target="_blank" type={content.contentType} >
                    <ContentContainer>
                        <ContentTagList>
                            {content.contentTags.map((contentTag, idx) => {
                                return (
                                    <ContentTag key={idx}>{contentTag}</ContentTag>
                                )
                                
                            })}
                        </ContentTagList>
                        <ContentImage fluid={content.contentImage.fluid}></ContentImage>
                        <ContentTitle>{content.contentTitle}</ContentTitle>
                    </ContentContainer>
                    
                    <ContentButton type={content.contentType}>
                        <ContentButtonContainer type={content.contentType}>
                            
                            <ContentButtonWrapper type={content.contentType}>
                                {content.contentType === youtube ? (
                                    <>
                                        <ContentButtonYoutubeTextWrapper>
                                            <ContentButtonYoutubeText>Посмотреть</ContentButtonYoutubeText>
                                            {content.contentYoutubeTiming && <ContentButtonYoutubeTiming>{content.contentYoutubeTiming}</ContentButtonYoutubeTiming>}  
                                        </ContentButtonYoutubeTextWrapper>
                                        <Youtube/>
                                        
                                    </>


                                    
                                ) : (
                                    <>
                                        <ContentButtonWatchBlockWrapper>
                                            <ContentButtonBlockTitle>Посмотреть</ContentButtonBlockTitle>
                                            <ContentButtonWatchBlock>
                                                <YoutubeMixed/>
                                                {content.contentYoutubeTiming && <ContentButtonMixedTiming>{content.contentYoutubeTiming}</ContentButtonMixedTiming>}  
                                            </ContentButtonWatchBlock>
                                        </ContentButtonWatchBlockWrapper>
                                        <ContentButtonReadBlockWrapper>
                                            <ContentButtonBlockTitle>Почитать</ContentButtonBlockTitle>
                                            <ContentButtonReadBlock>
                                                <Medium/>
                                                <BehanceMixed/>
                                            </ContentButtonReadBlock>
                                        </ContentButtonReadBlockWrapper>
                                    </>

                                )}
                                
                            </ContentButtonWrapper>
                        </ContentButtonContainer>
                    </ContentButton>
                </ContentWrapperLink>
            ) : (
                <ContentWrapperExternalLink type={content.contentType} href={contentExternalLink} target="_blank">
                    <ContentContainer>
                        <ContentTagList>
                            {content.contentTags.map((contentTag, idx) => {
                                return (
                                    <ContentTag key={idx}>{contentTag}</ContentTag>
                                )
                            })}
                        </ContentTagList>
                        <ContentImage fluid={content.contentImage.fluid}></ContentImage>
                        <ContentTitle>{content.contentTitle}</ContentTitle>
                        <ContentDescr>{documentToReactComponents(content.contentDescription.json)}</ContentDescr>
                    </ContentContainer>
                    <ContentButton type={content.contentType}>
                        <ContentButtonContainer>
                            <ContentButtonWrapper>
                                <ContentButtonText>Изучить</ContentButtonText>
                                    {content.contentType === pinterest ? (
                                        <ContentIconsWrapper>
                                            <Pinterest/>
                                            <PinterestOut/>
                                        </ContentIconsWrapper>
                                    ) : (
                                        <ContentIconsWrapper>
                                            <Behance/>
                                            <BehanceOut/>
                                        </ContentIconsWrapper>
                                    )}

                            </ContentButtonWrapper>
                        </ContentButtonContainer>
                    </ContentButton>
                </ContentWrapperExternalLink>
            )}
        </div>

    )
}

export default PreparationContent
