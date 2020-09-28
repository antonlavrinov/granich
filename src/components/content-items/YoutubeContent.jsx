import React from 'react'
import {ContentWrapperLink,
        ContentContainer,
        ContentTagList,
        ContentTag,
        ContentImage,
        ContentTitle,
        ContentButton,
        ContentButtonYoutubeTextWrapper,
        ContentButtonYoutubeText,
        ContentButtonYoutubeTiming,
        Youtube,
        YoutubeIconsWrapper,
        PinterestOut


    } from './styles';


const YoutubeContent = ({content, youtubePng, pinterestLinkIcon}) => {
    return (
        <ContentWrapperLink className="content" href={`/${content.contentSlug}`}  target="_blank" type={content.contentType} >
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
                <ContentButton youtube>
                            <ContentButtonYoutubeTextWrapper>
                                <ContentButtonYoutubeText>Посмотреть</ContentButtonYoutubeText>
                                {content.contentYoutubeTiming && <ContentButtonYoutubeTiming>{content.contentYoutubeTiming}</ContentButtonYoutubeTiming>}  
                            </ContentButtonYoutubeTextWrapper>
                            <YoutubeIconsWrapper>
                                <Youtube fluid={youtubePng}/>
                                <PinterestOut fluid={pinterestLinkIcon}/>
                            </YoutubeIconsWrapper>
                </ContentButton>

            
        </ContentWrapperLink>
    )
}

export default YoutubeContent
