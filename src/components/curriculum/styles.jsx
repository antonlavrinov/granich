import styled from 'styled-components';
// import PlusSign from '../../assets/svgs/plus-sign.svg';
// import MinusSign from '../../assets/svgs/minus-sign.svg';
import { animated } from 'react-spring';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import React from 'react'

//SECTION

export const CurriculumSection = styled.section`
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }
`
export const CurriculumWrapper = styled.div`
    background: white;
    padding: 5vw 1.8vw;
    border-radius: 0.6vw;
    @media only screen and (max-width: 575px) {
        padding: 5vw 3.5vw;
        border-radius: 2.5vw;
    }
`
export const CurriculumHeader = styled.div`
    display: flex;
    margin-bottom: 5.5vw;
    padding: 0 1.5vw;
    @media only screen and (max-width: 575px) {
        padding: 2vw 3vw 0;
        margin-bottom: 0;
        flex-direction: column;
    }
    
`
export const CurriculumTitleAndContent = styled.div`
    margin-right: 0vw;
    min-width: 35.5vw;
    @media only screen and (max-width: 575px) {
        min-width: 100%;
    }
` 
export const CurriculumHeaderTitle = styled.h2`
    color: var(--granich-black);
    font-size: 4.55vw;
    letter-spacing: -0.1vw;
    font-weight: 700;
    line-height: 0.87;
    margin-top: -0.6vw;
    margin-bottom: 6.4vw;

    @media only screen and (max-width: 575px) {
        font-size: 11vw;
        letter-spacing: -0.7vw;
        line-height: 1;
        margin-right: 0;
        margin-bottom: 8.5vw;
        padding: 0 1.5vw;

    }
    
`
export const CurriculumContent = styled.div`
    display: flex;
    align-items: center;
    p {
        font-size: 1.15vw;
        width: 9vw;
        line-height: 1.45vw;
        font-weight: 500;
        display: flex;
        align-items: center;

    }
    i {
        font-family: EB Garamond;
        font-style: italic;
        font-size: 5.4vw;
        font-weight: 500;
        position: relative;
        background: #e2e2e2;
        border-radius: 100vw;
        min-height: 4.5vw;
        min-width: 4.5vw;
        line-height: 0.8;
        margin-right: 1.65vw;
        letter-spacing: -0.4vw;
        margin-left: -0.1vw;

    }
    @media only screen and (max-width: 575px) {
        margin-right: 0;
        margin-left: 0;
        margin-bottom: 8vw;
        padding: 0 3vw;
        i {
            height: 14.5vw;
            width: 14.5vw;
            min-height: 14.5vw;
            min-width: 14.5vw;
            font-size: 16.5vw;
            padding-left: 0;
            letter-spacing: -1vw;
            margin-right: 5vw;
        }
        p {
            font-size: 3.7vw;
            line-height: 1.45;
        }
    }

`



export const CurriculumBonusBlock = styled.div`
    p {
        background: #f2f2f2;
        border-radius: 0.5vw;
        padding: 1.4vw 1.6vw;
        font-size: 1.15vw;
        line-height: 1.3;
        color: var(--granich-light-grey);
        margin-bottom: 1.3vw;
        :last-child {
            margin-bottom: 0;
        }
        b {
            color: var(--granich-black);
            font-size: inherit;
            font-weight: 500;
            display: block;
        }

    }
    a {
        border-bottom: 1px solid var(--granich-light-grey);
        :hover {
            border-color: var(--granich-grey);
        }
    }
    @media only screen and (max-width: 575px) {
        p {
            border-radius: 1.5vw;
            padding: 4vw 4vw;
            font-size: 3.7vw;
            :first-child {
                margin-bottom: 4vw;
            }
        }
    }
`









// ACCORDION MOBILE

export const CurriculumAccordionMobile = styled(props => <Accordion {...props}/>)`
    display: none;  
    @media only screen and (max-width: 575px) {
        display: block;
        margin-top: 5vw;
    }
`
export const CurriculumAccordionItem = styled(props => <AccordionItem {...props}/>)`

`

export const CurriculumAccordionHeading = styled(props => <AccordionItemHeading {...props}/>)`
    position: relative;
`
export const CurriculumAccordionButton = styled(props => <AccordionItemButton {...props}/>)`
    padding: 3vw 2vw;
    user-select: none;
    position: relative;
    :hover {
        cursor: pointer;
    }
    :focus {
        outline: none;
    }
`
export const CurriculumLessonAndLineWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const CurriculumItemLineMobile = styled.div`
    width: 95%;
    height: 1px;
    background: var(--granich-light-grey);
    margin-left: auto;
`








//SPRING ACCORDION

// export const Plus = styled(props => <PlusSign {...props}/>)`
//     width: 2.3vw;
//     height: 2.3vw;
//     margin-left: auto;
// `
// export const Minus = styled(props => <MinusSign {...props}/>)`
//     width: 2.3vw;
//     height: 2.3vw;
//     margin-left: auto;
// `

export const CurriculumItemFrame = styled.div`
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
    color: white;
    fill: white;
    border-top: 1.5px solid #E4E4E4;
    margin-left: 1.5vw;
    margin-right: 1.5vw;
    :last-child {
        border-top: none;
        :after {
            display: none;
        }
    }
    :after {
        content: '';
        height: 2px;
        border-top: 1px solid var(--granich-grey);
        position: absolute;
        width: 100%;
        top: -1px;
        left: 0;    
    }
    :nth-child(1) {
        :after {
            width: 8.3%;  
        }
    }
    :nth-child(2) {
        :after {
            width: 16.6%;  
        }
    }
    :nth-child(3) {
        :after {
            width: 24.9%;  
        }
    }
    :nth-child(4) {
        :after {
            width: 33.2%;  
        }
    }
    :nth-child(5) {
        :after {
            width: 41.5%;  
        }
    }
    :nth-child(6) {
        :after {
            width: 49.8%;  
        }
    }
    :nth-child(7) {
        :after {
            width: 58.1%;  
        }
    }
    :nth-child(8) {
        :after {
            width: 66.4%;  
        }
    }
    :nth-child(9) {
        :after {
            width: 74.7%;  
        }
    }
    :nth-child(10) {
        :after {
            width: 83%;  
        }
    }
    :nth-child(11) {
        :after {
            width: 91.3%;  
        }
    }
    :nth-child(12) {
        :after {
            width: 100%;  
        }
    }
    @media only screen and (max-width: 575px) {
        :after {
            display: none;
        }
    }


    ${props => !props.type && `
        background: #F2F2F2;
        border-radius: 0.5vw;
        border: none;
        margin: 0;

    `}
`

export const CurriculumItemTitle = styled('h3')`
  vertical-align: middle;
  font-family: EB Garamond;
  font-style: italic;
  font-weight: 500;
  font-size: 2.3vw;
  user-select: none;
  margin-top: -0.3vw;
  margin-right: 1vw;
  @media only screen and (max-width: 575px) {
    font-size: 6.2vw;
    margin-top: -0.8vw;
    width: 50vw;
  }

`

export const CurriculumItemImportantDescr = styled.span`
    font-size: 1.15vw;
    color: var(--granich-grey);
    user-select: none;
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
        background: #f2f2f2;
        border-radius: 2.5vw;
        display: block;
        padding: 3vw 4vw;
        margin-bottom: 2vw;
        line-height: 1.35;
    }
`

export const CurriculumImportantText = styled.div`
    padding: 1vw;
    font-size: 1.15vw;
    line-height: 2;
    width: 75%;
    b {
        font-weight: 500;
        display: block;
        color: var(--granich-black);
        line-height: 1.5;
    }
    p {
        color: var(--granich-grey);
        display: block;
        white-space: normal;
        margin-bottom: 0.4vw;
    }
    a {
        border-bottom: 1px solid var(--granich-light-grey);
        color: var(--granich-black);
        :hover {
            border-color: var(--granich-black);
        }
    }
    @media only screen and (max-width: 575px) {
        margin-bottom: -5vw;
        width: 100%;
   
        p {
            color: var(--granich-grey);
            display: block;
            white-space: normal;
            margin-bottom: 0;
        }
        b {
            line-height: 1.45;
        }
    }
`

export const CurriculumItemContent = styled(animated.div)`
    will-change: transform, opacity, height;
    overflow: hidden;
`
 
export const CurriculumLesson = styled.div`
    font-size: 1.15vw;
    border: 1.5px solid var(--granich-red);
    color: var(--granich-red);
    border-radius: 100vw;
    padding: 0.4vw 0;
    font-weight: 500;
    display: inline-block;
    min-width: 5.5vw;
    text-align: center;
    user-select: none;
    ${props => !props.type && `
        background: var(--granich-red);
        color: white;
    `}
    @media only screen and (max-width: 575px) {

        padding: 1vw 0;
        min-width: 15vw;
        font-size: 3.3vw;

    }
`



export const CurriculumLessonColumn = styled.div`
    width: 6.8vw;
    @media only screen and (max-width: 575px) {
        width: 20vw;
    }
`

export const CurriculumContainer = styled.div`
    display: flex;
    padding: 1.7vw 0vw;
    align-items: center;
    :hover {
        cursor: pointer;
    }
    img {
        width: 2.3vw;
        height: 2.3vw;
        user-select: none;
        margin-left: auto;
    }
    ${props => !props.type && `
        padding: 1.7vw 1.5vw;
    `}
`

export const CurriculumContentWrapper = styled.div`

    display: flex;
    align-items: flex-start;
    padding-left: 5.8vw;
    padding-top: 0vw;
    padding-bottom: 1.2vw;
    ${props => !props.type && `
        padding-left: 7.3vw;
    `}
`

export const CurriculumContentColumn = styled.div`
    width: 14.5vw;
    min-width: 14.5vw;
    padding: 1vw;
    margin-right: 1vw;
    font-size: 1.15vw;
    line-height: 1.35;
    b {
        font-weight: 500;
        display: block;
        color: var(--granich-black);
    }

    p {
        color: var(--granich-grey);
        display: block;
        min-width: 14.5vw;
        white-space: normal;
        margin-bottom: 0.7vw;
    }
    @media only screen and (max-width: 575px) {
        width: 100%;
        min-width: 100%;
        padding: 0;
        margin-right: 0;   
        p {
            min-width: 100%;
            margin-bottom: 3vw;
        }
    }
`
















export const CurriculumAccordeon = styled.div`
    display: block;  
    @media only screen and (max-width: 575px) {
        display: none;
    }
`

export const EmptyText = styled.div`
    opacity: 0;
    font-size: 0;
`



export const CurriculumTitleAndButton = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1vw;
`


export const CurriculumAccordionItemPanel = styled(props => <AccordionItemPanel {...props}/>)`
    padding: 2vw;
`