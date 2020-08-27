import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import YoutubeIcon from '../../assets/svgs/youtube-icon.svg';


const Youtube = styled(props => <YoutubeIcon {...props}/>)`
    width: 7.2vw;
    margin-left: -0.9vw;
    margin-top: -0.2vw;
    margin-right: 1.8vw;
    transition: transform 0.3s ease;
    :hover {
        transform: scale(1.1);
        cursor: pointer;

    }
`

const YoutubeSection = styled.section`
    margin-bottom: 1.7vw;

`


const YoutubeWrapper = styled.div`
    border-radius: 0.5vw;
    background: #2A2A2A;

`

const YoutubeBlock = styled.div`
    width: 100%;
    height: 45vw;
    padding: 3vw;
    position: relative;
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        padding: 3vw;
    }
    


`

const ContentInfo = styled.div`
    background: #1E1E1E;
    padding: 2.5vw 3vw;
    display: flex;
    align-items: flex-start;
    border-radius: 0 0 0.5vw 0.5vw;
`
const ContentInfoTitle = styled.div`
    font-size: 2vw;
    font-weight: 500;
    color: white;
    width: 35vw;
    margin-top: -0.25vw;
`
const ContentInfoTags = styled.div`
    margin-left: auto;
    display: flex;
    // height: auto;
    // height: 0%;
`
const ContentInfoTag = styled.div`
    border: 1px solid white;
    padding: 0.4vw 0.9vw;
    display: block;
    // line-height: 0;
    border-radius: 100vw;
    color: white;
    margin-right: 1vw;
    font-size: 1.18vw;
    :last-child {
        margin-right: 0;
    }
`


const YoutubeVideo = ({data}) => {
    return (
        <YoutubeSection>
            <Container>
                <YoutubeWrapper>
                    <YoutubeBlock>
                        <div className="loadingio-spinner-rolling-ta5f1nqy5p">
                            <div className="ldio-6b142d04hhl">
                                <div></div>
                            </div>
                        </div>
                        {data.contentfulContent.contentYoutubeVideoLink && <iframe title="youtubeFrame" width="100%" height="100%" src={data.contentfulContent.contentYoutubeVideoLink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
                    </YoutubeBlock>
                    <ContentInfo>
                        <Youtube/>
                        <ContentInfoTitle>{data.contentfulContent.contentTitle}</ContentInfoTitle>
                        <ContentInfoTags>
                            <ContentInfoTag>Композиция</ContentInfoTag>
                            <ContentInfoTag>Композиция</ContentInfoTag>
                        </ContentInfoTags>
                    </ContentInfo>
                </YoutubeWrapper>
            </Container>
        </YoutubeSection>
    )
}

export default YoutubeVideo
