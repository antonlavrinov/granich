import React from 'react'
import { Container } from '../../style';
import styled from 'styled-components';
import LoneFreelancer from '../../../assets/svgs/freelance/freelance-skills.svg';

const SkillsSection = styled.section`
    // margin-bottom: 4vw;
    // @media only screen and (max-width: 575px) {
    //     margin-bottom: 5vw;
    // }
`

const SkillsWrapper = styled.section`
 padding: 2.3vw 2.5vw;
 border-radius: 0.6vw;
 background: var(--granich-red);
 display: flex;
 align-items: center;
 @media only screen and (max-width: 575px) {
    padding: 6vw;
    border-radius: 2.5vw;
    flex-direction: column;
 }
`

const SkillsQuote = styled.div`
    font-family: EB Garamond;
    font-style: italic;
    font-size: 4vw;
    font-weight: 500;
    color: white;
    line-height: 1.05;
    min-width: 45%;
    max-width: 45%;
    letter-spacing: 0.01em;
    position: relative;
    left: 3vw;
    top: -0.5vw;

    :after {
        content: '»';
        position: absolute;
        font-size: 4vw;

    }
    :before {
        content: '«';
        position: absolute;
        font-size: 4vw;
        top: 0;
        left: -2.5vw;
    }


    @media only screen and (max-width: 575px) {
        max-width: 100%;
        font-size: 10vw;
        margin-bottom: 7vw;
        margin-left: 0vw;
        :after {
            content: '»';
            position: relative;
            font-size: 11vw;
    
        }
        :before {
            content: '«';
            position: relative;
            font-size: 11vw;
            left: 0;
        }
    }

`

const SkillsTextWrapper = styled.div`
 
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
     width: 8vw;
     height: 8.5vw;
     margin-left: auto;
     margin-right: -0.5vw;
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
        width: 26vw;
        margin: 0 auto;
        margin-top: 1vw;
        transform: translateX(5%);
        height: 27vw;
    }
 }
`


const FreelanceSkills = () => {
    return (
        <SkillsSection>
            <Container>
                <SkillsWrapper>
                    <SkillsQuote>
                        Твёрдые навыки обязательны
                    </SkillsQuote>
                    <SkillsTextWrapper>
                        <span>
                            Чтобы качественно пройти Осознанный Фриланс, вам необходимо обладать развитыми твёрдыми навыками. Это значит, что если вы позавчера впервые открыли Фотошоп, то вам этот курс-наставничество не подойдет. Потому что мы, в том числе, будем оформлять ваши учебные или реальные коммерческие проекты.
                        </span>
                        <LoneFreelancer />

                    </SkillsTextWrapper>


                </SkillsWrapper>
            </Container>

        </SkillsSection>
    )
}



export default FreelanceSkills

