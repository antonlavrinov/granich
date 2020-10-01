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
        Behance,
        BehanceOut
    } from './styles';



const BehanceContent = ({content, behanceIcon, behanceLinkIcon, contentExternalLink}) => {
    return (
        <ContentWrapperExternalLink className="content" behance="true" rel="noopener noreferrer" href={contentExternalLink} target="_blank">
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
                <ContentButton behance>
                            <ContentButtonText>Изучить</ContentButtonText>
                            <ContentIconsWrapper>
                                <Behance fluid={behanceIcon}/>
                                <BehanceOut fluid={behanceLinkIcon}/>
                            </ContentIconsWrapper>
                </ContentButton>

            
        </ContentWrapperExternalLink>
    )
}

export default BehanceContent
