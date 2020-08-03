import React from 'react'
import styled from 'styled-components';
import BackgroundImage from 'gatsby-image';
import { Link } from "gatsby"

const PostWrapper = styled(props => <Link {...props}/>)`

    background: red;
    border-radius: 0.7vw;
    :hover {
        cursor: pointer;
    }
`

const PostContainer = styled.div`
    padding: 2vw;
`

const PostButton = styled.div`
    background: var(--granich-red);
    border-radius: 0 0 0.7vw 0.7vw;
    margin-top: auto;
`

const PostTagList = styled.div`
    margin-bottom: 0.9vw;
    width: 100%;
`


const PostTag = styled.div`
    border: 0.1vw solid var(--granich-red);
    color: var(--granich-red);
    border-radius: 100vw;
    font-weight: 600;
    line-height: 1;
    font-size: 0.83vw;
    padding: 0.15vw 0.4vw 0.17vw;
    display: inline-block;
    letter-spacing: -0.03vw;
    margin-right: 0.3vw;
    :last-child {
        margin-right: 0;
    }
`

const PostTitle = styled.div`
    font-size: 1.75vw;
    margin-left: 0.3vw;
    line-height: 0.9;
    font-weight: 600;
    letter-spacing: 0;
    // margin-bottom: 0.9vw;
    max-width: 15.5vw;
`

const PostImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    margin-bottom: 0.4vw;
    min-height: 14.5vw;
`

const PostDescr = styled.div`
    font-size: 1vw;
    margin-left: 0.3vw;
    color: grey;
    letter-spacing: -0.01vw;
    font-weight: 500;
    margin-top: 0.2vw;
    height: 100%;
`

const PostButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const PostButtonText = styled.div`
    color: white;
    font-size: 1.45vw;
    font-weight: 600;
    line-height: 0.95;
    margin-left: 0.3vw;
    margin-top: -0.5vw;

`

const PreparationPost = ({post}) => {
    return (
        <PostWrapper to={post.node.postSlug}>
            <PostContainer>
                <PostTagList>
                    <PostTag/>
                </PostTagList>
                {/* <PostImage></PostImage> */}
                <PostTitle>xccx</PostTitle>
                <PostDescr>dsffds</PostDescr>
            </PostContainer>
            <PostButton>
                <PostContainer>
                    <PostButtonWrapper>
                        <PostButtonText>ddf</PostButtonText>

                    </PostButtonWrapper>
                </PostContainer>
            </PostButton>
        </PostWrapper>
    )
}

export default PreparationPost
