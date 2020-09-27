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
        ContentButtonContainer,
        ContentButtonWrapper,
        ContentButtonText,
        ContentIconsWrapper,
        Pinterest,
        PinterestOut
    } from './styles';
import LazyLoad from 'react-lazyload';


const PinterestContent = ({content, pinterestIcon, pinterestLinkIcon, contentExternalLink}) => {
    return (
        <ContentWrapperExternalLink className="content" pinterest rel="noopener noreferrer" href={contentExternalLink} target="_blank">
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
                    <ContentDescr>{documentToReactComponents(content.contentDescription.json)}</ContentDescr>
                </ContentContainer>
                <ContentButton pinterest>
                    <ContentButtonContainer>
                        <ContentButtonWrapper>
                            <ContentButtonText>Изучить</ContentButtonText>
                            <ContentIconsWrapper>
                                <Pinterest fluid={pinterestIcon}/>
                                <PinterestOut fluid={pinterestLinkIcon}/>
                            </ContentIconsWrapper>
                        </ContentButtonWrapper>
                    </ContentButtonContainer>
                </ContentButton>
            {/* </LazyLoad> */}

            
        </ContentWrapperExternalLink>
    )
}

export default PinterestContent
