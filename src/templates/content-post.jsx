import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import SEO from '../components/seo'
import {graphql} from 'gatsby'
import styled from 'styled-components';
import {Container} from '../components/style';

const ContentSection = styled.section`
    padding-top: 10vw;
`


export const pageQuery = graphql`
    query ContentfulContentBySlug($slug: String!) {
        contentfulContent: contentfulGranichMainContentCard( contentSlug: { eq: $slug }) {
            contentSlug
            contentTitle
            contentDescription {
                contentDescription
            }

        }
    }
`

const ContentPage = ({data}) => {
    return (
        <Layout>
            <Header type="dark"/>
            <ContentSection>
                <Container>
                    {/* <ContentWrapper>
                        {console.log('SLUG', data.contentfulContent)}
                        <div>{data.contentfulContent.contentTitle}</div>
                        {data.contentfulContent.contentDescription ? (
                            <div>{data.contentfulContent.contentDescription.contentDescription}</div>
                        ) : (null)}
                        
                    </ContentWrapper> */}
                </Container>
            </ContentSection>
            <SEO title="Онлайн-школа Granich" />
        </Layout>
    )
}

export default ContentPage
