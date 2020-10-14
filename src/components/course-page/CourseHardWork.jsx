import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import RunIcon from '../../assets/svgs/graph-design/graph-design-mountain.svg';

const HardWorkSection = styled.section`
    // margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        // margin-bottom: 5vw;
    }
`

const HardWorkWrapper = styled.section`
 padding: 2.3vw 3vw;
 border-radius: 0.6vw;
 background: var(--granich-red);
 display: flex;
 align-items: flex-start;
 @media only screen and (max-width: 575px) {
    padding: 6vw;
    border-radius: 2.5vw;
    flex-direction: column;
 }
`

const HardWorkQuote = styled.div`
    font-family: EB Garamond;
    font-style: italic;
    font-size: 2.8vw;
    color: white;
    line-height: 1.05;
    max-width: 70%;
    @media only screen and (max-width: 575px) {
        max-width: 100%;
        font-size: 7.5vw;
        margin-bottom: 5vw;
    }

`

const HardWorkTextWrapper = styled.div`
 
 background: #830404;
 padding: 1.5vw 2vw;
 border-radius: 0.5vw;
 display: flex;
 span {
    color: white;
    display: block;
    max-width: 75%;
    font-size: 1.35vw;
    line-height: 1.15;
 }
 svg {
     width: 4.8vw;
     margin-left: auto;
    //  fill: #4C0101;
     fill: var(--granich-red);
 }
 @media only screen and (max-width: 575px) {
    padding: 3vw 4vw;
    border-radius: 1.5vw;
    span {
        max-width: 75%;
        font-size: 3.7vw;
        line-height: 1.35;
    }
    svg {
        width: 11.5vw;
    }
 }
`


const CourseHardWork = () => {
    return (
        <HardWorkSection>
            <Container>
                <HardWorkWrapper>
                    <HardWorkQuote>
                        «Если вы идёте на этот курс, то обратного пути нет — вы будете пахать и развиваться»
                    </HardWorkQuote>
                    <HardWorkTextWrapper>
                        <span>
                            А учитывая мой осознанный подход, ваше развитие будет крайне быстрым
                        </span>
                        <RunIcon/>
                        
                    </HardWorkTextWrapper>

                    
                </HardWorkWrapper>
            </Container>
            
        </HardWorkSection>
    )
}

export default CourseHardWork

