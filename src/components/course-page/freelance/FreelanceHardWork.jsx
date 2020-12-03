import React from 'react'
import { Container } from '../../style';
import styled from 'styled-components';
import LoneFreelancer from '../../../assets/svgs/freelance/hard-work/freelance-hard-work.svg';

const HardWorkSection = styled.section`
    // margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        // margin-bottom: 5vw;
    }
`

const HardWorkWrapper = styled.section`
 padding: 2.3vw 2.5vw;
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
    font-size: 4.5vw;
    color: white;
    line-height: 1.05;
    min-width: 45%;
    max-width: 45%;
    letter-spacing: 0.01em;
    position: relative;
    left: 1vw;
    @media only screen and (max-width: 575px) {
        max-width: 100%;
        font-size: 11vw;
        margin-bottom: 7vw;
        // text-align: center;
        margin-left: 2vw;
    }

`

const HardWorkTextWrapper = styled.div`
 
 background: #830404;
 padding: 1.5vw 1.8vw;
 border-radius: 0.5vw;
 display: flex;
 min-width: 55%;
 max-width: 55%;
 margin-left: auto;
 align-items: center;
 span {
    color: white;
    display: block;
    min-width: 80%;
    max-width: 80%;

    font-size: 1.15vw;
    line-height: 1.45;
 }
 svg {
     width: 5vw;
     height: 6.5vw;
     margin-left: auto;
    //  fill: #4C0101;
    // margin-right: -0.5vw;
     fill: var(--granich-red);
 }
 @media only screen and (max-width: 575px) {
    padding: 3vw 4vw;
    border-radius: 1.5vw;
    min-width: 100%;
    max-width: 100%;
    flex-direction: column;
    span {
        max-width: 100%;
        min-width: 100%;
        font-size: 3.7vw;
        line-height: 1.35;
        margin-bottom: 2vw;
    }
    svg {
        width: 20vw;
        margin: 0 auto;
        margin-top: 1vw;
        transform: translateX(5%);
        height: 27vw;
    }
 }
`


const FreelanceHardWork = () => {
    return (
        <HardWorkSection>
            <Container>
                <HardWorkWrapper>
                    <HardWorkQuote>
                        «А ты точно фрилансер?»
                    </HardWorkQuote>
                    <HardWorkTextWrapper>
                        <span>
                            Для участия на Осознанном Фрилансе в приоритете специалисты, которые полностью перешли на фриланс. Если вы работаете в найме в какой-то компании или в дизайн-студии, то вам скорее всего на этот курс не нужно. 
                        </span>
                        <LoneFreelancer/>
                        
                    </HardWorkTextWrapper>

                    
                </HardWorkWrapper>
            </Container>
            
        </HardWorkSection>
    )
}

export default FreelanceHardWork

