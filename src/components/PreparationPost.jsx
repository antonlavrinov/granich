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

const PostWrapperLink = styled(props => <Link {...props}/>)`

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

const PostWrapperExternalLink = styled.a`
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

const PostContainer = styled.div`
    padding: 0.9vw 1vw;
    padding-top: 0.5vw;
`

const PostButton = styled.div`
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

const PostTagList = styled.div`
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


const PostTag = styled.div`
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

const PostTitle = styled.div`
    font-size: 1.07vw;
    line-height: 1;
    font-weight: 500;
    letter-spacing: 0;
    color: white;
    max-width: 12.9vw;
    margin-left: -0.1vw;
`

const PostImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    margin-bottom: 1vw;
    max-height: 7.4vw;
`

const PostDescr = styled.div`
    font-size: 0.73vw;
    color: white;
    font-weight: 400;
    margin-top: 0.25vw;
    max-width: 12.9vw;
    line-height: 1.15;
    margin-left: -0.1vw;
`

const PostButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding: 0.2vw 0;
`

const PostButtonTextWrapper = styled.div`

`

const PostButtonYoutubeSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    svg {
        margin-right: -0.4vw;
    }
`
const PostButtonYoutubeSectionTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 0.8vw;
`

const PostButtonYoutubeText = styled.div`

    margin-top: -0.8vw;
    font-size: 1.2vw;
    font-weight: 500;
    color: white;
`

const PostButtonText = styled.div`
    color: white;
    font-size: 1.2vw;
    font-weight: 500;
    line-height: 0.95;

    margin-left: -0.1vw;

`
const PostButtonTiming = styled.div`
    color: white;
    font-size: 0.6vw;
    margin-top: 0.2vw;

`

const PostIconsWrapper = styled.div`
    display: flex;
    margin-right: -0.4vw;
    align-items: center;
    svg {
        :first-child {
            margin-right: -0.4vw;
        }
    }
`

const PostButtonWatchBlockWrapper = styled.div`
    // margin-bottom: -0.6vw;
`

const PostButtonWatchBlock = styled.div`
    display: flex;
    align-items: flex-end;
`
const PostButtonBlockTitle = styled.div`
    color: grey;
    font-size: 0.9vw;
`

const PostButtonReadBlockWrapper = styled.div`
    margin-bottom: -0.6vw;
`

const PostButtonReadBlock = styled.div`

`


// const getExternalPostLink = (postType) => {
//     switch(postType) {
//         case 'Youtube' :
//             return 
//     }
// }

const PreparationPost = ({post}) => {
    console.log('posttype', post.postType)
    const youtube = 'Youtube';
    const behance = 'Behance';
    const pinterest = 'Pinterest';
    const mixed = 'Youtube + Medium + Behance';
    console.log(post.postLinkPinterest ? post.postLinkPinterest.postLinkPinterest : null)
    const postExternalLink = post.postType === pinterest ? (
        post.postLinkPinterest ? post.postLinkPinterest.postLinkPinterest : '/' 
    ) : post.postType === behance ? (post.postLinkBehance ? post.postLinkBehance.postLinkBehance : '/') : '/';


    return (
        <>
            {post.postType === youtube || post.postType === mixed ? (
                <PostWrapperLink to={post.postSlug} type={post.postType} >
                    <PostContainer>
                        <PostTagList>
                            {post.postTags.map((postTag, idx) => {
                                return (
                                    <PostTag key={idx}>{postTag}</PostTag>
                                )
                            })}
                        </PostTagList>
                        <PostImage fluid={post.postImage.fluid}></PostImage>
                        <PostTitle>{post.postTitle}</PostTitle>
                    </PostContainer>
                    
                    <PostButton type={post.postType}>
                        <PostContainer>
                            
                            <PostButtonWrapper type={post.postType}>
                                {post.postType === youtube ? (
                                    <PostButtonYoutubeSection>
                                        <PostButtonYoutubeSectionTextWrapper>
                                            <PostButtonYoutubeText>Посмотреть</PostButtonYoutubeText>
                                            <PostButtonTiming>33:05</PostButtonTiming>
                                        </PostButtonYoutubeSectionTextWrapper>
                                        <Youtube/>
                                    </PostButtonYoutubeSection>

                                    
                                ) : (
                                    <>
                                        <PostButtonWatchBlockWrapper>
                                            <PostButtonBlockTitle>Посмотреть</PostButtonBlockTitle>
                                            <PostButtonWatchBlock>
                                                <Youtube/>
                                                <PostButtonTiming>8:43</PostButtonTiming>
                                            </PostButtonWatchBlock>
                                        </PostButtonWatchBlockWrapper>
                                        <PostButtonReadBlockWrapper>
                                            <PostButtonBlockTitle>Почитать</PostButtonBlockTitle>
                                            <PostButtonReadBlock>
                                                <Medium/>
                                                <Behance/>
                                            </PostButtonReadBlock>
                                        </PostButtonReadBlockWrapper>
                                    </>

                                )}
                                
                            </PostButtonWrapper>
                        </PostContainer>
                    </PostButton>
                </PostWrapperLink>
            ) : (
                <PostWrapperExternalLink type={post.postType} href={postExternalLink} target="_blank">
                    <PostContainer>
                        <PostTagList>
                            {post.postTags.map((postTag, idx) => {
                                return (
                                    <PostTag key={idx}>{postTag}</PostTag>
                                )
                            })}
                        </PostTagList>
                        <PostImage fluid={post.postImage.fluid}></PostImage>
                        <PostTitle>{post.postTitle}</PostTitle>
                        {post.postDescription ? (
                            <PostDescr>{post.postDescription.postDescription}</PostDescr>
                        ) : (
                            <div></div>
                        )}
                        
                    </PostContainer>
                    <PostButton type={post.postType}>
                        <PostContainer>
                            <PostButtonWrapper>
                                <PostButtonText>Изучить</PostButtonText>
                                    {post.postType === pinterest ? (
                                        <PostIconsWrapper>
                                            <Pinterest/>
                                            <PinterestOut/>
                                        </PostIconsWrapper>
                                    ) : (
                                        <PostIconsWrapper>
                                            <Behance/>
                                            <BehanceOut/>
                                        </PostIconsWrapper>
                                    )}

                            </PostButtonWrapper>
                        </PostContainer>
                    </PostButton>
                </PostWrapperExternalLink>
            )}
        </>

    )
}

export default PreparationPost
