import React from 'react'
import styled from 'styled-components';
import { Container } from '../style';
import PotokIcon from '../../assets/svgs/graph-design/graph-design-potok-icon.svg';
import DateIcon from '../../assets/svgs/graph-design/graph-design-date-icon.svg';


const Potok = styled(props => <PotokIcon {...props} />)`
    width: 1.3vw;
    height: 1.3vw;
    margin-right: 0.3vw;
    fill: white;
    @media only screen and (max-width: 575px) {
        width: 4.3vw;
        height: 4vw;
        margin-right: 1vw;
        margin-top: -0.3vw;
    }
`

const Date = styled(props => <DateIcon {...props} />)`
    width: 1.3vw;
    height: 1.3vw;
    fill: var(--granich-red);
    margin-right: 0.3vw;
    @media only screen and (max-width: 575px) {
        width: 4.3vw;
        height: 4vw;
        margin-right: 1vw;
        margin-top: -0.8vw;
    }
`

const VideoPresentationOfferSection = styled.section`
    margin-bottom: 2vw;
`

const VideoPresentationOfferWrapper = styled.div`
    background: white;
    // background: #2A2A2A;
    border-radius: 0.6vw;
    padding: 4vw;

    @media only screen and (max-width: 575px) {
        padding: 6vw;
        border-radius: 2.5vw;
    }
`

const YoutubeBlock = styled.div`
    // width: 100%;
    height: 45vw;
    // padding: 3vw;
    position: relative;
    
    iframe {
        border: 2px solid rgba(0,0,0,0.2);
        position: relative;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        height: 100%;
    }
    @media only screen and (max-width: 575px) {
        padding: 0;
        height: auto;
        iframe {
            
            position: relative;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            height: 43vw;
        }
    }
    


`

const Title = styled.h1`

    font-size: 6.9vw;
    font-weight: 500;
    font-family: EB Garamond;
    letter-spacing: -0.1rem;
    line-height: 0.85;
    margin: 0;
    margin-bottom: 3vw;
    text-align: center;
    span {
        font-family: EB Garamond;
        font-style: italic;
        font-size: 6.5vw;
        letter-spacing: -0.1rem;
        display: block;
    }
    @media only screen and (max-width: 575px) {
        // text-align: left;
        font-size: 12vw;
        letter-spacing: -0.1rem;
        margin-bottom: 6vw;
        span {
            font-size: 12vw;
            letter-spacing: -0.05rem;
            // white-space: nowrap;
        }

    }
`

const TagList = styled.div`
    display: flex;
    margin-bottom: 2.1vw; 
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
    @media only screen and (max-width: 575px) {
        padding: 0 3.5vw;
        max-width: 100%;
    }
`

const Tag = styled.div`
    font-size: 1.2vw;
    display: flex;
    color: var(--granich-red);
    border: 1.5px solid var(--granich-red);
    padding: 0.3vw 0.8vw;
    border-radius: 100vw;
    margin-right: 0.5vw;
    margin-bottom: 1vw;
    font-weight: 500;
    align-items: center;
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
        padding: 1.8vw 2.5vw 1.6vw;
        margin-right: 3vw;
        white-space: nowrap;
        margin-bottom: 3vw;
        line-height: 1;
    }
`

const MainTag = styled.div`
    font-size: 1.2vw;
    display: flex;
    color: white;
    background: var(--granich-red);
    border: 1.5px solid var(--granich-red);
    padding: 0.3vw 0.8vw;
    border-radius: 100vw;
    margin-right: 0.5vw;
    font-weight: 500;
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
        padding: 1.6vw 2.5vw;
        margin-right: 3vw;
        white-space: nowrap;
        margin-bottom: 3vw;
    }
`

const VideoPresentationOfferHeader = styled.div`

`





const VideoPresentationOffer = ({data}) => {
    return (
        <VideoPresentationOfferSection>
            <Container>
                <VideoPresentationOfferWrapper>
                    <VideoPresentationOfferHeader>
                        <Title>
                            <span>Графические метафоры </span>как путь в айдентику
                        </Title>
                        <TagList>
                            {data.courseStream && <MainTag><Potok />{data.courseStream} поток</MainTag>}
                            {data.courseStartAndEnd && <Tag><Date />{data.courseStartAndEnd}</Tag>}
                            {data.courseTags.map((tag, idx) => {
                                return (
                                    <Tag key={idx}>{tag}</Tag>
                                )
                            })}
                        </TagList>
                    </VideoPresentationOfferHeader>
                    <YoutubeBlock>
                        <div className="loadingio-spinner-rolling-ta5f1nqy5p">
                            <div className="ldio-6b142d04hhl">
                                <div></div>
                            </div>
                        </div>
                        <iframe title="youtubeFrame" width="100%"  src={`https://www.youtube.com/embed/F4DCWCKmtyY?vq=hd1080`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </YoutubeBlock>
                </VideoPresentationOfferWrapper>
                
            </Container>   
        </VideoPresentationOfferSection>
    )
}

export default VideoPresentationOffer
