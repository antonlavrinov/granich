import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';

const VideoSection = styled.section`
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(20px, auto);
`

const VideoItem = ({text}) => {
    return (
        <div>
            video
            {text}
        </div>
    )
}

const Video = () => {
    return (
        <VideoSection>
            <Container>
                <VideoWrapper>
                    <VideoHeader>
                        <VideoSectionTitle>Ценные видеолекции</VideoSectionTitle>
                        <VideoSectionText>Осознанный Графдизайн — интенсивный. Чтобы успеть на курсе как можно больше, вы можете уже сейчас подготовиться, посмотрев эти видео.</VideoSectionText>
                    </VideoHeader>
                    <VideoList>
                        <VideoItem text={`
                            dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf
                            dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf
                            dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf
                            dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf
                            dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf
                            dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf
                            dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf dfdf
                        
                        `}/>
                        <VideoItem/>
                        <VideoItem/>
                        <VideoItem/>
                    </VideoList>
                </VideoWrapper>
            </Container>
            
        </VideoSection>
    )
}

export default Video