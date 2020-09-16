import React from 'react'
import {ContentWrapperLink,
        ContentContainer,
        ContentTagList,
        ContentTag,
        ContentImage,
        ContentTitle,
        ContentButton,
        ContentButtonContainer,
        ContentButtonWrapper,
        ContentButtonYoutubeTextWrapper,
        ContentButtonYoutubeText,
        ContentButtonYoutubeTiming,
        Youtube


    } from './styles';


const YoutubeContent = ({content, youtubePng}) => {
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
                <ContentButtonContainer youtube>
                    <ContentButtonWrapper type={content.contentType}>
                        <ContentButtonYoutubeTextWrapper>
                            <ContentButtonYoutubeText>Посмотреть</ContentButtonYoutubeText>
                            {content.contentYoutubeTiming && <ContentButtonYoutubeTiming>{content.contentYoutubeTiming}</ContentButtonYoutubeTiming>}  
                        </ContentButtonYoutubeTextWrapper>
                        <Youtube fluid={youtubePng}/>
                    </ContentButtonWrapper>
                </ContentButtonContainer>
            </ContentButton>
        </ContentWrapperLink>
    )
}

export default YoutubeContent
