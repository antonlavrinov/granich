import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import SEO from '../components/seo'
import {graphql} from 'gatsby'
import styled from 'styled-components';
import {Container} from '../components/style';

const PostSection = styled.section`
    padding-top: 10vw;
`
const PostWrapper = styled.section`

`

export const pageQuery = graphql`
    query ContentfulPostBySlug($slug: String!) {
        contentfulPost: contentfulGranichMainPostCard( postSlug: { eq: $slug }) {
            postTitle
            postDescription {
                postDescription
            }

        }
    }
`

const PostPage = ({data}) => {
    return (
        <Layout>
            <Header style="dark"/>
            <PostSection>
                <Container>
                    <PostWrapper>
                        <div>{data.contentfulPost.postTitle}</div>
                        <div>{data.contentfulPost.postDescription.postDescription}</div>
                    </PostWrapper>
                </Container>
            </PostSection>
            <SEO title="Онлайн-школа Granich" />
        </Layout>
    )
}

export default PostPage
