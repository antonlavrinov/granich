import React from 'react'
import LazyLoad from 'react-lazyload';
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
        Youtube,
        YoutubeIconsWrapper,
        PinterestOut


    } from './styles';


const YoutubeContent = ({content, youtubePng, pinterestLinkIcon}) => {
    return (
        <ContentWrapperLink className="content" href={`/${content.contentSlug}`}  target="_blank" type={content.contentType} >
            {/* <LazyLoad once> */}
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
                            <YoutubeIconsWrapper>
                                <Youtube fluid={youtubePng}/>
                                <PinterestOut fluid={pinterestLinkIcon}/>
                            </YoutubeIconsWrapper>

                        </ContentButtonWrapper>
                    </ContentButtonContainer>
                </ContentButton>
            {/* </LazyLoad> */}
            
        </ContentWrapperLink>
    )
}

export default YoutubeContent
