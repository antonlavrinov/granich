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
        ContentButtonWatchBlockWrapper,
        ContentButtonBlockTitle,
        ContentButtonWatchBlock,
        YoutubeMixed,
        ContentButtonMixedTiming,
        ContentButtonReadBlockWrapper,
        ContentButtonReadBlock,
        BehanceMixed,



    } from './styles';


const YoutubeMixedPinterestContent = ({content, youtubePng, pinterestIcon}) => {
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
            <ContentButton>
                <ContentButtonContainer youtubeMixed>
                    <ContentButtonWrapper youtubeMixed>
                    <ContentButtonWatchBlockWrapper>
                        <ContentButtonBlockTitle>Посмотреть</ContentButtonBlockTitle>
                            <ContentButtonWatchBlock>
                                <YoutubeMixed fluid={youtubePng}/>
                                {content.contentYoutubeTiming && <ContentButtonMixedTiming>{content.contentYoutubeTiming}</ContentButtonMixedTiming>}  
                            </ContentButtonWatchBlock>
                        </ContentButtonWatchBlockWrapper>
                        <ContentButtonReadBlockWrapper mixedPinterest>
                            <ContentButtonBlockTitle>Изучить</ContentButtonBlockTitle>
                            <ContentButtonReadBlock>
                                <BehanceMixed fluid={pinterestIcon}/>
                            </ContentButtonReadBlock>
                        </ContentButtonReadBlockWrapper>
                    </ContentButtonWrapper>
                </ContentButtonContainer>
            </ContentButton>
        </ContentWrapperLink>
    )
}

export default YoutubeMixedPinterestContent
