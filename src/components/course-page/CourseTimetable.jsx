import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
// import TimetableVideo from '../../assets/images/graph-design/Timetable/ezgif.com-gif-to-mp4.mp4';
import TimetableGif from '../../assets/images/graph-design/commitment/commitment.gif';
import LazyLoad from 'react-lazyload';

const TimetableSection = styled.section`
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }
`
const TimetableWrapper = styled.div`
    display: flex;
    background: white;
    padding: 3.3vw 3.3vw;
    border-radius: 0.6vw;
    video {
        min-width: 36.3vw;
        width: 36.3vw;
        margin-right: 3vw;
        height: 19vw;
        border-radius: 0.5vw;
    }
    @media only screen and (max-width: 575px) {
        flex-direction: column;
        padding: 6vw 6vw 7vw;
        border-radius: 2.5vw;
        video {
            min-width: 100%;
            width: 100%;
            margin-right: 3vw;
            height: 40.8vw;
            border-radius: 3vw;
            margin-bottom: 5vw;
        }
    }
`

const TimetableImage = styled.img`
    min-width: 36.3vw;
    width: 36.3vw;
    margin-right: 3vw;
    border-radius: 0.5vw;
    @media only screen and (max-width: 575px) {
        min-width: 100%;
        width: 100%;
        margin-right: 3vw;
        // height: 40.8vw;
        border-radius: 2vw;
        margin-bottom: 5vw;

    }
`
const TimetableImageWrapper = styled.div`
    min-width: 36.3vw;
    width: 36.3vw;
    margin-right: 3vw;
    border-radius: 0.5vw;
    background: #f2f2f2;
    min-height: 20.5vw;
    height: 20.5vw;
    @media only screen and (max-width: 575px) {
        min-width: 100%;
        width: 100%;
        border-radius: 2vw;
        margin-bottom: 5vw;
        min-height: 44vw;
        height: 44vw;

    }
`

const TimetableTitle = styled.h2`
    color: var(--granich-black);
    font-size: 4.55vw;
    letter-spacing: -0.2vw;
    font-weight: 700;
    line-height: 0.87;
    margin-top: -0.6vw;
    margin-bottom: 4.5vw;
    line-height: 1.1;
    span {
        font-family: EB Garamond;
        font-style: italic;
        font-weight: 500;
        font-size: 5.4vw;
        line-height: 0.75;
        position: relative;
        margin-bottom: 2.9vw;
        margin-left: 0.5vw;
        white-space: nowrap;
        letter-spacing: -0.115vw;
    }


    @media only screen and (max-width: 575px) {
        span {
            white-space: normal;
            font-size: 10.4vw;
            margin-left: 0;
            letter-spacing: -0.4vw;
            margin-bottom: 6.8vw;
            line-height: 0.9;
        }
        
    }

`







const CourseTimetable = () => {



    return (
        <TimetableSection>
            <Container>
                <TimetableWrapper>
                    <TimetableTitle>Курс можно <br/>совмещать с работой <span>Но расслабиться не получится!</span></TimetableTitle>
                </TimetableWrapper>
            </Container>
        </TimetableSection>
    )
}

export default CourseTimetable
