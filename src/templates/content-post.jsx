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

const ContentWrapper = styled.div`
`


export const pageQuery = graphql`
    query ContentfulContentBySlug($slug: String!) {
        contentfulContent: contentfulGranichMainContentCard( contentSlug: { eq: $slug }) {
            contentSlug
            contentTitle
            contentYoutubeVideoLink
            contentPDF {
                file { 
                  url 
                }
              }
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
                    <ContentWrapper>
                        {console.log('SLUG', data.contentfulContent.contentPDF)}
                        <div>{data.contentfulContent.contentTitle}</div>
                        {/* {data.contentfulContent.contentDescription ? (
                            <div>{data.contentfulContent.contentDescription.contentDescription}</div>
                        ) : (null)} */}
                        {data.contentfulContent.contentPDF ? (
                            <a download target="_blank" href={data.contentfulContent.contentPDF.file.url}>Скачать PDF</a>
                        ) : null}

                        {data.contentfulContent.contentYoutubeVideoLink ? (
                            <div>
                                dffdfd
                                <iframe width="560" height="315" src={data.contentfulContent.contentYoutubeVideoLink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            
                        ) : null}
                        
                    </ContentWrapper>
                </Container>
            </ContentSection>
            <SEO title="Онлайн-школа Granich" />
        </Layout>
    )
}

export default ContentPage
