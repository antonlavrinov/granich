import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import YoutubeMixedContent from './content-items/YoutubeMixedContent';
import YoutubeMixedPinterestContent from './content-items/YoutubeMixedPinterestContent';
import YoutubeContent from './content-items/YoutubeContent';
import BehanceContent from './content-items/BehanceContent';
import MediumContent from './content-items/MediumContent';
import PinterestContent from './content-items/PinterestContent';
import PodborkaContent from './content-items/PodborkaContent';




const PreparationContent = ({content}) => {

    const youtube = 'Youtube';
    const behance = 'Behance';
    const pinterest = 'Pinterest';
    const medium = 'Medium';
    const mixed = 'Youtube + Medium + Behance';
    const mixedPinterest = 'Youtube + Pinterest';
    const podborka = 'Осознанная подборка';
    const contentExternalLink = content.contentType === pinterest ? (
        content.contentLinkPinterest) : content.contentType === behance ? (
            content.contentLinkBehance) : content.contentType === medium ? (content.contentLinkMedium) : '/';


    const data = useStaticQuery(graphql`
        query contentIcons {
            pinterestContentIcon: file(relativePath: { eq: "pinterest-icon.png" }) {
                childImageSharp {
                    fluid(maxWidth: 60, quality: 80) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            behanceContentIcon: file(relativePath: { eq: "behance-icon.png" }) {
                childImageSharp {
                    fluid(maxWidth: 60, quality: 80) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            pinterestLinkContentIcon: file(relativePath: { eq: "pinterest-link-icon.png" }) {
                childImageSharp {
                    fluid(maxWidth: 60, quality: 80) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            behanceLinkContentIcon: file(relativePath: { eq: "behance-link-icon.png" }) {
                childImageSharp {
                    fluid(maxWidth: 60, quality: 80) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            contentMediumPng: file(relativePath: { eq: "medium-icon.png" }) {
                childImageSharp {
                    fluid(maxWidth: 60, quality: 80) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            contentYoutubePng: file(relativePath: { eq: "youtube-icon.png" }) {
                childImageSharp {
                    fluid(maxWidth: 60, quality: 80) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            podborkaLinkContentIcon: file(relativePath: { eq: "podborka-link-out.png" }) {
                childImageSharp {
                    fluid(maxWidth: 60, quality: 80) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            mediumLinkContentIcon: file(relativePath: { eq: "arrow-black-newpage-01.png" }) {
                childImageSharp {
                    fluid(maxWidth: 60, quality: 80) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

        }
    `)

    const behanceIcon = data.behanceContentIcon.childImageSharp.fluid;
    const pinterestIcon = data.pinterestContentIcon.childImageSharp.fluid;
    const pinterestLinkIcon = data.pinterestLinkContentIcon.childImageSharp.fluid;
    const behanceLinkIcon = data.behanceLinkContentIcon.childImageSharp.fluid;
    const mediumIcon = data.contentMediumPng.childImageSharp.fluid;
    const mediumLinkIcon = data.mediumLinkContentIcon.childImageSharp.fluid;
    const youtubePng = data.contentYoutubePng.childImageSharp.fluid;
    const podborkaLinkIcon = data.podborkaLinkContentIcon.childImageSharp.fluid;


    return (
        <>
            {content.contentType === mixed && <YoutubeMixedContent content={content} behanceIcon={behanceIcon} youtubePng={youtubePng} mediumIcon={mediumIcon}/>}
            {content.contentType === youtube && <YoutubeContent pinterestLinkIcon={pinterestLinkIcon} content={content} youtubePng={youtubePng}/>}
            {content.contentType === behance && <BehanceContent contentExternalLink={contentExternalLink} behanceLinkIcon={behanceLinkIcon} content={content} behanceIcon={behanceIcon}/>}
            {content.contentType === pinterest && <PinterestContent  contentExternalLink={contentExternalLink} pinterestLinkIcon={pinterestLinkIcon} content={content} pinterestIcon={pinterestIcon}/>}
            {content.contentType === medium && <MediumContent  contentExternalLink={contentExternalLink} mediumLinkIcon={mediumLinkIcon} content={content} mediumIcon={mediumIcon}/>}
            {content.contentType === podborka && <PodborkaContent  podborkaLinkIcon={podborkaLinkIcon} content={content}/>}
            {content.contentType === mixedPinterest && <YoutubeMixedPinterestContent content={content}  youtubePng={youtubePng} pinterestIcon={pinterestIcon}/>}
        </>

    )
}

export default PreparationContent
