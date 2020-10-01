import React from 'react'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {ContentWrapperExternalLink,
        ContentContainer,
        ContentTagList,
        ContentTag,
        ContentImage,
        ContentTitle,
        ContentDescr,
        ContentButton,
        ContentButtonText,
        ContentIconsWrapper,
        ContentLinkIcon,
        ContentLinkOutIcon
    } from './styles';



const MediumContent = ({content, mediumIcon, mediumLinkIcon, contentExternalLink}) => {
    return (
        <ContentWrapperExternalLink className="content" medium="true" rel="noopener noreferrer" href={contentExternalLink} target="_blank">
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
                <ContentButton medium>
                            <ContentButtonText>Изучить</ContentButtonText>
                            <ContentIconsWrapper>
                                <ContentLinkIcon fluid={mediumIcon}/>
                                <ContentLinkOutIcon fluid={mediumLinkIcon}/>
                            </ContentIconsWrapper>
                </ContentButton>

            
        </ContentWrapperExternalLink>
    )
}

export default MediumContent
