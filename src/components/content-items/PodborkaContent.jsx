import React from 'react'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {ContentWrapperLink,
        ContentContainer,
        ContentTagList,
        ContentTag,
        ContentImage,
        ContentTitle,
        ContentButton,
        ContentButtonContainer,
        ContentButtonWrapper,
        ContentDescr,
        ContentButtonText,
        ContentIconsWrapper,
        PodborkaOut



    } from './styles';


const PodborkaContent = ({content, podborkaLinkIcon}) => {
    return (
        <ContentWrapperLink className="content" podborka href={`/${content.contentSlug}`}  target="_blank" type={content.contentType} >
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
            <ContentButton podborka>
                <ContentButtonContainer>
                    <ContentButtonWrapper>
                        <ContentButtonText>Изучить</ContentButtonText>
                        <ContentIconsWrapper>
                            <PodborkaOut fluid={podborkaLinkIcon}/>
                        </ContentIconsWrapper>
                    </ContentButtonWrapper>
                </ContentButtonContainer>
            </ContentButton>
        </ContentWrapperLink>
    )
}

export default PodborkaContent
