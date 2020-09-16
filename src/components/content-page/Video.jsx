import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import BackgroundImage from 'gatsby-background-image';
import YoutubeIcon from '../../assets/svgs/youtube-icon.svg';


const Youtube = styled(props => <YoutubeIcon {...props}/>)`
    width: 5vw;
    height: 3.5vw;
    transition: transform 0.2s ease;


`

const VideoSection = styled.section`
    margin-top: 1.7vw;
    margin-bottom: 1.7vw;
`

const VideoWrapper = styled.div`
    padding: 5.4vw 3vw 2vw;
    border-bottom: 0.25vw dotted white;
    background: white;
    border-radius: 0.6vw;
    @media only screen and (max-width: 575px) {
        padding: 5.4vw 5vw 5.4vw;
        border-bottom: 0.8vw dotted white;
        border-radius: 2.5vw;
    }

`

const VideoHeader = styled.div`
    display: flex;
    padding-bottom: 5.7vw;
    // border-bottom: 1.5px solid var(--granich-black);
    width: 100%;
    @media only screen and (max-width: 575px) {
        flex-direction: column;
    }
`

const VideoSectionTitle = styled.h2`
    color: var(--granich-black);
    font-size: 4.55vw;
    letter-spacing: -0.2vw;
    font-weight: 700;
    line-height: 0.85;
    margin-right: 2vw;
    width: 33vw;
    min-width: 33vw;
    @media only screen and (max-width: 575px) {
        font-size: 11vw;
        letter-spacing: -0.7vw;
        line-height: 1;
        margin-right: 0;
        margin-bottom: 4vw;
        width: 100%;
    }

`

const VideoSectionText = styled.div`
    color: var(--granich-black);
    font-size: 1.5vw;
    margin-top: -1.2vw;
    line-height: 1.55;
    letter-spacing: 0.025vw;
    font-weight: 500;
    // width: 45vw;
    @media only screen and (max-width: 575px) {
        font-size: 3.9vw;
        letter-spacing: -0.08vw;
    }
    

`

const VideoList = styled.div`
    margin-bottom: 7vw;
    :last-child {
        margin-bottom: 0;
    }
`

const VideoListDescr = styled.div`
    color: var(--granich-black);
    font-size: 1.5vw;
    margin-top: -1.2vw;
    line-height: 1.55;
    font-weight: 500;
    width: 45vw;
    margin-bottom: 3vw;
    @media only screen and (max-width: 575px) {
        font-size: 3.9vw;
        letter-spacing: -0.08vw;
    }
`



const VideoItemWrapper = styled.div`
    padding: 1.8vw 1.8vw 2.3vw;
    border-radius: 0.6vw;
    background: #2A2A2A;
`

const VideoItemImage = styled(props => <BackgroundImage {...props}/>)`
    height: 17vw;
    margin-bottom: 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
        cursor: pointer;
        svg {
            transform: scale(1.05);
        }

    }
`

const VideoItemInfo = styled.div`
    color: white;
    display: flex;
`

const VideoItemInfoDetails = styled.div`
    color: inherit; 
    min-width: 6.3vw; 
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: flex-start;
`

const VideoItemInfoText = styled.div`
    color: inherit;  
    p {
        color: var(--granich-light-grey);  
        font-size: 1.15vw;
        line-height: 1.35;
    } 
    i {
        color: white;  
        font-size: 0.8vw;
        font-style: normal;
        display: block;
        margin-bottom: 0.3vw;
    }
    h3 {
        color: white;  
        font-size: 1.17vw;
        margin-bottom: 0.7vw;
        font-weight: 500;
    }
`

const VideoItemNumber = styled.div`
    color: var(--granich-red);
    font-family: EB Garamond;
    font-style: italic;
    font-size: 2.3vw;  
`

const VideoItemInfoTiming = styled.div`
    color: inherit; 
    font-size: 0.8vw;
    border-bottom: 2px solid var(--granich-red);
    position: relative;
    padding: 0 0.65vw 0.2vw;
    :before {
        content: '';
        width: 0.35vw;
        height: 0.35vw;
        background: var(--granich-red);
        position: absolute;
        top: 20%;
        left: 0;
        border-radius: 100vw;
    }
`

const VideoItemInfoLinks = styled.div`
    color: inherit; 
    p {
        color: inherit;  
    }
    a {
        color: inherit;  
    } 
`



const VideoItem = ({text, number, image, links, timing}) => {
    return (
        <VideoItemWrapper>
            <VideoItemImage fluid={image}><Youtube/></VideoItemImage>
            <VideoItemInfo>
                <VideoItemInfoDetails>
                    <VideoItemNumber>{`№${number}`}</VideoItemNumber>
                    {links && <VideoItemInfoLinks>{documentToReactComponents(links.json)}</VideoItemInfoLinks>}
                    <VideoItemInfoTiming>{timing}</VideoItemInfoTiming>
                </VideoItemInfoDetails>
                <VideoItemInfoText>
                 {documentToReactComponents(text)}
                </VideoItemInfoText>
            </VideoItemInfo>
        </VideoItemWrapper>
    )
}

const Video = ({data}) => {
    return (
        <VideoSection>
            <Container>
                <VideoWrapper>
                    <VideoHeader>
                        <VideoSectionTitle>Ценные видеолекции</VideoSectionTitle>
                        <VideoSectionText>Осознанный Графдизайн — интенсивный. Чтобы успеть на курсе как можно больше, вы можете уже сейчас подготовиться, посмотрев эти видео.</VideoSectionText>
                    </VideoHeader>
                        <VideoList>
                            <Masonry
                                breakpointCols={2}
                                className="my-masonry-grid"
                                columnClassName="my-masonry-grid_column">
                                    {data.map((videoItem, idx) => {
                                        return (
                                            <React.Fragment key={videoItem.node.id}>{videoItem.node.videoCategory === 'Самые важные' && <VideoItem timing={videoItem.node.videoTiming} 
                                                                                                             image={videoItem.node.videoImagePreview.fluid} 
                                                                                                           
                                                                                                             number={videoItem.node.videoOrderNumber} 
                                                                                                             links={videoItem.node.childContentfulGranichCollectionVideoVideoAdditionalLinksRichTextNode} 
                                                                                                             text={videoItem.node.videoText.json}/>}</React.Fragment> 
                                        )
                                    })}
                            </Masonry>
                        </VideoList>
                        <VideoList>
                            <VideoListDescr>
                                Далее, лекции, которые не имеют прямого отношения к курсу. Но если у вас есть время, то для большего охвата материала полезны ↓
                            </VideoListDescr>
                            <Masonry
                                breakpointCols={2}
                                className="my-masonry-grid"
                                columnClassName="my-masonry-grid_column">
                                    {data.map((videoItem, idx) => {
                                        return (
                                            <React.Fragment key={videoItem.node.id}>{videoItem.node.videoCategory === 'Лекции, не имеющие отношения к курсу, но полезны' && <VideoItem timing={videoItem.node.videoTiming} 
                                                                                                                                                 image={videoItem.node.videoImagePreview.fluid} 
                                                                                                                                                
                                                                                                                                                 number={videoItem.node.videoOrderNumber} 
                                                                                                                                                 links={videoItem.node.childContentfulGranichCollectionVideoVideoAdditionalLinksRichTextNode} 
                                                                                                                                                 text={videoItem.node.videoText.json}/>}</React.Fragment> 
                                        )
                                    })}
                            </Masonry>
                        </VideoList>
                        <VideoList>
                            <VideoListDescr>
                            Дальше, ценные лекции, если вы <br/>решили работать на себя ↓
                            </VideoListDescr>
                            <Masonry
                                breakpointCols={2}
                                className="my-masonry-grid"
                                columnClassName="my-masonry-grid_column">
                                    {data.map((videoItem, idx) => {
                                        return (
                                            <React.Fragment key={videoItem.node.id}>{videoItem.node.videoCategory === 'Ценные лекции, если решили работать на себя' && <VideoItem timing={videoItem.node.videoTiming} 
                                                                                                                                            image={videoItem.node.videoImagePreview.fluid} 
                                                                                                                                 
                                                                                                                                            number={videoItem.node.videoOrderNumber} 
                                                                                                                                            links={videoItem.node.childContentfulGranichCollectionVideoVideoAdditionalLinksRichTextNode} 
                                                                                                                                            text={videoItem.node.videoText.json}/>}</React.Fragment> 
                                        )
                                    })}
                            </Masonry>
                        </VideoList>

                </VideoWrapper>
            </Container>
            
        </VideoSection>
    )
}

export default Video