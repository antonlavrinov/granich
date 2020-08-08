import React from 'react'
import styled from 'styled-components';
import BackgroundImage from 'gatsby-image';
import { Link } from "gatsby"
import PinterestIcon from '../assets/svgs/pinterest-icon.svg';
import BehanceIcon from '../assets/svgs/behance-icon.svg';
import PinterestLinkOut from '../assets/svgs/pinterest-link-out.svg';
import BehanceLinkOut from '../assets/svgs/behance-link-out.svg';
import MediumIcon from '../assets/svgs/medium-icon.svg';
import YoutubeIcon from '../assets/svgs/youtube-icon.svg';


const Behance = styled(props => <BehanceIcon {...props}/>)`
    width: 2.2vw;
`
const Youtube = styled(props => <YoutubeIcon {...props}/>)`
    height: 2.4vw;
`
const Medium = styled(props => <MediumIcon {...props}/>)`
    width: 2.2vw;
`
const Pinterest = styled(props => <PinterestIcon {...props}/>)`
    width: 2.1vw;
`
const PinterestOut = styled(props => <PinterestLinkOut {...props}/>)`
    width: 2.1vw;
`
const BehanceOut = styled(props => <BehanceLinkOut {...props}/>)`
    width: 2.1vw;
`

const ContentWrapperLink = styled(props => <Link {...props}/>)`

    background: #2b2b2b;
    border-radius: 0.5vw;
    display: flex;
    flex-direction: column;
    transition: all 0.2s ease;
    min-height: 18vw;
    :hover {
        transform: scale(1.05);
        cursor: pointer;
    }


`

const ContentWrapperExternalLink = styled.a`
    background: red;
    border-radius: 0.5vw;
    display: flex;
    flex-direction: column;
    transition: all 0.2s ease;
    min-height: 18vw;
    :hover {
        cursor: pointer;
        transform: scale(1.05);
    }
    ${props => props.type === 'Pinterest' && `
        background: #830404;
    ` }
    ${props => props.type === 'Behance' && `
        background: #0E3983;
    ` }    
`

const ContentContainer = styled.div`
    padding: 0.9vw 1vw;
    padding-top: 0.5vw;
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
`

const ContentTagList = styled.div`
    display: flex;
    margin-bottom: 0.8vw;
    margin-left: -0.2vw;
    margin-right: -0.2vw;
    margin-top: 0.4vw;
    flex-wrap: wrap;
    // max-width: 13vw;
    // width: 100%;
    line-height: 1;
`


const ContentTag = styled.div`
    border: 0.05vw solid white;
    color: white;
    border-radius: 100vw;
    font-weight: 400;
    // line-height: 1;
    font-size: 0.73vw;
    padding: 0.1vw 0.4vw 0.16vw;
    display: inline-block;
    letter-spacing: -0.03vw;
    margin-right: 0.3vw;
    :last-child {
        margin-right: 0;
    }
`

const ContentTitle = styled.div`
    font-size: 1.07vw;
    line-height: 1;
    font-weight: 500;
    letter-spacing: 0;
    color: white;
    max-width: 12.9vw;
    margin-left: -0.1vw;
`

const ContentImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    margin-bottom: 1vw;
    max-height: 7.4vw;
`

const ContentDescr = styled.div`
    font-size: 0.73vw;
    color: white;
    font-weight: 400;
    margin-top: 0.25vw;
    max-width: 12.9vw;
    line-height: 1.15;
    margin-left: -0.1vw;
`

const ContentButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding: 0.2vw 0;
`

const ContentButtonTextWrapper = styled.div`

`

const ContentButtonYoutubeSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    svg {
        margin-right: -0.4vw;
    }
`
const ContentButtonYoutubeSectionTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 0.8vw;
`

const ContentButtonYoutubeText = styled.div`

    margin-top: -0.8vw;
    font-size: 1.2vw;
    font-weight: 500;
    color: white;
`

const ContentButtonText = styled.div`
    color: white;
    font-size: 1.2vw;
    font-weight: 500;
    line-height: 0.95;

    margin-left: -0.1vw;

`
const ContentButtonTiming = styled.div`
    color: white;
    font-size: 0.6vw;
    margin-top: 0.2vw;

`

const ContentIconsWrapper = styled.div`
    display: flex;
    margin-right: -0.4vw;
    align-items: center;
    svg {
        :first-child {
            margin-right: -0.4vw;
        }
    }
`

const ContentButtonWatchBlockWrapper = styled.div`
    // margin-bottom: -0.6vw;
`

const ContentButtonWatchBlock = styled.div`
    display: flex;
    align-items: flex-end;
`
const ContentButtonBlockTitle = styled.div`
    color: grey;
    font-size: 0.9vw;
`

const ContentButtonReadBlockWrapper = styled.div`
    margin-bottom: -0.6vw;
`

const ContentButtonReadBlock = styled.div`

`


// const getExternalContentLink = (ContentType) => {
//     switch(ContentType) {
//         case 'Youtube' :
//             return 
//     }
// }

const PreparationContent = ({content}) => {
    console.log('contenttype', content.contentType)
    const youtube = 'Youtube';
    const behance = 'Behance';
    const pinterest = 'Pinterest';
    const mixed = 'Youtube + Medium + Behance';
    console.log(content.contentLinkPinterest ? content.contentLinkPinterest.contentLinkPinterest : null)
    const contentExternalLink = content.contentType === pinterest ? (
        content.contentLinkPinterest ? content.contentLinkPinterest.contentLinkPinterest : '/' 
    ) : content.contentType === behance ? (content.contentLinkBehance ? content.contentLinkBehance.contentLinkBehance : '/') : '/';


    return (
        <>
            {content.contentType === youtube || content.contentType === mixed ? (
                <ContentWrapperLink to={content.contentSlug} type={content.contentType} >
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
                        <ContentContainer>
                            
                            <ContentButtonWrapper type={content.contentType}>
                                {content.contentType === youtube ? (
                                    <ContentButtonYoutubeSection>
                                        <ContentButtonYoutubeSectionTextWrapper>
                                            <ContentButtonYoutubeText>Посмотреть</ContentButtonYoutubeText>
                                            <ContentButtonTiming>33:05</ContentButtonTiming>
                                        </ContentButtonYoutubeSectionTextWrapper>
                                        <Youtube/>
                                    </ContentButtonYoutubeSection>

                                    
                                ) : (
                                    <>
                                        <ContentButtonWatchBlockWrapper>
                                            <ContentButtonBlockTitle>Посмотреть</ContentButtonBlockTitle>
                                            <ContentButtonWatchBlock>
                                                <Youtube/>
                                                <ContentButtonTiming>8:43</ContentButtonTiming>
                                            </ContentButtonWatchBlock>
                                        </ContentButtonWatchBlockWrapper>
                                        <ContentButtonReadBlockWrapper>
                                            <ContentButtonBlockTitle>Почитать</ContentButtonBlockTitle>
                                            <ContentButtonReadBlock>
                                                <Medium/>
                                                <Behance/>
                                            </ContentButtonReadBlock>
                                        </ContentButtonReadBlockWrapper>
                                    </>

                                )}
                                
                            </ContentButtonWrapper>
                        </ContentContainer>
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
                        {content.contentDescription ? (
                            <ContentDescr>{content.contentDescription.contentDescription}</ContentDescr>
                        ) : (
                            <div></div>
                        )}
                        
                    </ContentContainer>
                    <ContentButton type={content.contentType}>
                        <ContentContainer>
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
                        </ContentContainer>
                    </ContentButton>
                </ContentWrapperExternalLink>
            )}
        </>

    )
}

export default PreparationContent
