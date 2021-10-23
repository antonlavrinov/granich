import styled from "styled-components"
import { animated } from "react-spring"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import React from "react"

//SECTION

export const CurriculumSection = styled.section`
  margin-bottom: 4vw;
  margin-top: 4vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
    margin-top: 5vw;
  }
`
export const CurriculumWrapper = styled.div`
  background: white;
  padding: 5vw 1.8vw 3.5vw;
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
  ${props =>
    props.compressedHeader &&
    `
        justify-content: space-between;
        flex-direction: column;
        margin-bottom: 2vw;
        @media only screen and (max-width: 575px) {
            padding: 2vw 2vw 0;

        }

    `}
`
export const CurriculumTitleAndContent = styled.div`
  margin-right: 0vw;
  min-width: 35.5vw;
  @media only screen and (max-width: 575px) {
    min-width: 100%;
  }
  ${props =>
    props.compressedHeader &&
    `
        min-width: auto;
        margin-bottom: 1vw;

    `}
      ${props =>
    props.lessonsCount &&
    `
        display: flex;
        @media only screen and (max-width: 575px) {
          flex-direction: column;
        }

    `}
`
export const CurriculumHeaderTitle = styled.h2`
  color: var(--granich-black);
  font-size: 4.55vw;
  letter-spacing: -0.1vw;
  font-weight: 700;
  line-height: 1;
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
  ${props =>
    props.compressedHeader &&
    `
        margin-bottom: 2vw;
        max-width: 78%;
        @media only screen and (max-width: 575px) {
            padding: 0;
            margin-bottom: 0vw;
        }

    `}
`

export const CurriculumInfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
  }
`

export const CurriculumContent = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 1.15vw;
    width: 9vw;
    line-height: 1.45;
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
    text-align: center;
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
  ${props =>
    props.compressedHeader &&
    `
        margin-right: 2vw;
        p {
            width: auto;
        }
        i {
            margin-right: 1vw;
        }
        @media only screen and (max-width: 575px) {
            i {
                margin-right: 5vw;
            }
        }
    `}
      ${props =>
    props.lessonsCount &&
    ` 
    margin-left: 5vw;
    margin-top: -1.5vw;
    i {

    }
    p {
      width: 23.1vw;
    }
    @media only screen and (max-width: 575px) {
          margin-top: 10vw;
          margin-bottom: 3vw;
            p {
              width: 100%;
            }
        }
      
    `}
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
  ${props =>
    props.compressedHeader &&
    `
        display: flex;
        align-items: center;
        p {
            background: none;
            border-radius: 0;
            padding: 0;
            font-size: 1.15vw;
            line-height: 1.3;
            color: var(--granich-light-grey);
            margin-bottom: 0;
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
        ul {
            border-radius: 0.5vw;
            background: #f2f2f2;
            margin-bottom: 1.3vw;
            margin-right: 1.3vw;
            padding: 1vw 1.4vw;
            max-width: 25vw; 
            width: 25vw;
            display: flex;
            align-items: center;
            :last-child {
                margin-right: 0;
            }
            img {
                width: 5vw;
                margin-right: 0.7vw;
            }
            b {
                color: var(--granich-black);
                font-size: inherit;
                font-weight: 500;
                display: block;
            }
            

        }

        @media only screen and (max-width: 575px) {
            flex-direction: column;
            ul {
                padding: 4vw 4vw;
                max-width: 100%;
                width: 100%;
                align-items: center;
                border-radius: 1.5vw;
                img {
                    width: 16vw;
                    margin-right: 2vw;
                }
                :first-child {
                    margin-bottom: 4vw;
                }
            }
            p {
                font-size: 3.7vw;
            }
        }
    `}
`

// ACCORDION MOBILE

export const CurriculumAccordionMobile = styled(props => (
  <Accordion {...props} />
))`
  display: none;
  @media only screen and (max-width: 575px) {
    display: block;
    margin-top: 5vw;
  }
`
export const CurriculumAccordionItem = styled(props => (
  <AccordionItem {...props} />
))``

export const CurriculumAccordionHeading = styled(props => (
  <AccordionItemHeading {...props} />
))`
  position: relative;
`
export const CurriculumAccordionButton = styled(props => (
  <AccordionItemButton {...props} />
))`
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
        border-bottom: 1.5px solid #E4E4E4;
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

    @media only screen and (max-width: 575px) {
        :after {
            display: none;
        }
    }


    ${props =>
      props.numberOfLessons === 12 &&
      `
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

    `}

    ${props =>
      !props.type &&
      `
        background: #F2F2F2;
        border-radius: 0.5vw;
        border: none;
        margin: 0;
        :after {
            border: none;
        }

    `}
    ${props =>
      props.numberOfLessons === 7 &&
      `
        :nth-child(1) {
            :after {
                width: 14.2%;  
            }
        }
        :nth-child(2) {
            :after {
                width: 28.5%;  
            }
        }
        :nth-child(3) {
            :after {
                width: 42.8%;  
            }
        }
        :nth-child(4) {
            :after {
                width: 57.1%;  
            }
        }
        :nth-child(5) {
            :after {
                width: 71.3%;  
            }
        }
        :nth-child(6) {
            :after {
                width: 85.5%;  
            }
        }
        :nth-child(7) {
            :after {
                width: 100%;  
            }
        }



    `}
    ${props =>
      props.numberOfLessons === 8 &&
      `
        :nth-child(1) {
            :after {
                width: 12.5%;  
            }
        }
        :nth-child(2) {
            :after {
                width: 25%;  
            }
        }
        :nth-child(3) {
            :after {
                width: 37.5%;  
            }
        }
        :nth-child(4) {
            :after {
                width: 50%;  
            }
        }
        :nth-child(5) {
            :after {
                width: 62.5%;  
            }
        }
        :nth-child(6) {
            :after {
                width: 75%;  
            }
        }
        :nth-child(7) {
            :after {
                width: 87.5%;  
            }
        }
        :nth-child(8) {
            :after {
                width: 100%;  
            }
        }



    `}
    ${props =>
      props.numberOfLessons === 9 &&
      `
        :nth-child(1) {
            :after {
                width: 11.1%;  
            }
        }
        :nth-child(2) {
            :after {
                width: 22.2%;  
            }
        }
        :nth-child(3) {
            :after {
                width: 33.3%;  
            }
        }
        :nth-child(4) {
            :after {
                width: 44.4%;  
            }
        }
        :nth-child(5) {
            :after {
                width: 55.5%;  
            }
        }
        :nth-child(6) {
            :after {
                width: 66.6%;  
            }
        }
        :nth-child(7) {
            :after {
                width: 77.7%;  
            }
        }
        :nth-child(8) {
            :after {
                width: 88.8%;  
            }
        }
        :nth-child(9) {
            :after {
                width: 100%;  
            }
        }



    `}
        ${props =>
          props.numberOfLessons === 3 &&
          `
        :nth-child(1) {
            :after {
                width: 33.3%;  
            }
        }
        :nth-child(2) {
            :after {
                width: 66.6%;  
            }
        }
        :nth-child(3) {
            :after {
                width: 100%;  
            }
        }
        



    `}
     ${props =>
       props.numberOfLessons === 4 &&
       `
        :nth-child(1) {
            :after {
                width: 25%;  
            }
        }
        :nth-child(2) {
            :after {
                width: 50%;  
            }
        }
        :nth-child(3) {
            :after {
                width: 75%;  
            }
        }
        :nth-child(4) {
            :after {
                width: 100%;  
            }
        }
        



    `}
`

export const CurriculumItemTitle = styled("h3")`
  user-select: none;
  margin-top: -0.3vw;
  margin-right: 1vw;
  display: flex;
  align-items: flex-start;
  img {
    display: inline-block;
    width: auto !important;
    min-width: auto;
    top: 0.4vw;
    left: 1vw;
    position: relative;
  }
  p {
    vertical-align: middle;
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    font-size: 2.3vw;
  }
  @media only screen and (max-width: 575px) {
    margin-top: -0.8vw;
    width: 50vw;
    p {
      font-size: 6.2vw;
    }
    img {
      // min-width: 9vw;
      // width: 9vw;
      // max-width: 9vw;
      height: 6vw;
      left: 2vw;
      top: 1vw;
    }
  }
`

export const CurriculumItemImportantDescr = styled.span`
  font-size: 1.15vw;
  color: var(--granich-grey);
  user-select: none;
  @media only screen and (max-width: 575px) {
    font-size: 3.7vw;
    // background: #f2f2f2;
    // border-radius: 2.5vw;
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
  padding: 0.4vw 0.7vw;
  font-weight: 500;
  display: inline-block;
  min-width: 5.6vw;
  text-align: center;
  user-select: none;
  margin-right: 1.3vw;
  white-space: nowrap;
  ${props =>
    !props.type &&
    `
        border-color: rgba(0,0,0,0.2);
        background: none;
        color: var(--granich-grey);
    `}
  ${props => props.customLessonColor && `
    color: white;
    background: ${props.customLessonColor};
    border-color: ${props.customLessonColor};

  `}
  @media only screen and (max-width: 575px) {
    padding: 1vw 1.5vw;
    min-width: 15vw;
    font-size: 3.3vw;
    margin-right: 3vw;
  }
`

export const CurriculumLessonColumn = styled.div`
  /* width: 6.8vw; */
  @media only screen and (max-width: 575px) {
    /* width: 20vw; */
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
  ${props =>
    !props.type &&
    `
        padding: 1.7vw 1.5vw;
    `}
`

export const CurriculumContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding-left: 5.8vw;
  padding-top: 0vw;
  padding-bottom: 1.2vw;
  ${props =>
    !props.type &&
    `
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
  i {
    color: var(--granich-red);
    font-style: normal;
    b {
      color: var(--granich-red);
    }
  }

  ul {
    li {
      b {
        font-weight: 500;
        i {
          font-weight: 500;
        }
      }
      p {
        position: relative;
        color: var(--granich-black);
        padding-left: 1.2vw;
        :before {
          content: "";
          width: 0.4vw;
          height: 0.4vw;
          border-radius: 50%;
          background: var(--granich-red);
          position: absolute;
          top: 0.6vw;
          left: 0;

        }
    }
  }
  }
  ol {
    li {
      b {
        font-weight: 500;
        i {
          font-weight: 500;
        }
      }
      p {
        position: relative;
        color: var(--granich-black);
        padding-left: 1.2vw;
        :before {
          content: "+";
          /* width: 0.4vw;
          height: 0.4vw; */
          /* border-radius: 50%; */
          /* background: var(--granich-red); */
          color: var(--granich-red);
          font-weight: 500;
          position: absolute;
          /* top: 0.6vw; */
          left: 0;

        }
    }
    }
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
    ul {
    li {
      p {
        padding-left: 4vw;
        :before {
          width: 1.1vw;
          height: 1.1vw;
          top: 2vw;
          left: 0;

        }
    }
  }
  }
  ol {
    li {
      p {
        padding-left: 4vw;
    }
    }
  }
  }
`

export const CurriculumContentText = styled.div`
  padding: 1vw;
  font-size: 1.25vw;
  line-height: 1.45;
  width: 100%;
  b {
    /* font-weight: 500; */
    /* color: green; */
    /* text-decoration: underline; */
    /* text-decoration-style: double; */
  }


  i {
    font-style: italic;
    /* color: var(--granich-red); */
    /* font-weight: 500; */
    // text-decoration: underline;
    // text-decoration-style: double;
  }
  p {
    color: var(--granich-black);
    white-space: normal;
    margin-bottom: 2vw;
    padding-right: 6vw;
  }
  a {
    border-bottom: 1px solid var(--granich-light-grey);
    color: var(--granich-black);
    :hover {
      border-color: var(--granich-black);
    }
  }
  iframe {
    width: 55vw;
    height: 31vw;
  }
  ul {
    display: flex;
    margin-bottom: 2vw;
    li {
      margin-right: 2vw;
    }
    ul {
      display: block;
      margin-bottom: 0;
      li {
        margin-right: 0;
      }
    }
    p {
      display: block;
      padding: 0;
    }
  }

  ${props => props.courseTitle === "Графические метафоры как путь в айдентику" && `
    display: flex;
    ul {
      display: block;

      i {
        font-style: normal;
        padding: 0.4vw 1vw;
        font-size: 1.15vw;
        border-radius: 10vw;
        border: 1px solid var(--granich-black);
        margin-bottom: 0.5vw;
        display: inline-block;
        line-height: 1.3;
      }

      p {
        margin-bottom: 1vw !important;
        color: var(--granich-grey);
      }
    }

  `}
  @media only screen and (max-width: 575px) {
    margin-bottom: -5vw;
    width: 100%;
    padding-bottom: 5vw;

    p {
      color: var(--granich-grey);
      display: block;
      white-space: normal;
      margin-bottom: 0;
      padding-right: 0;
    }

    b {
      line-height: 1.45;
    }
    iframe {
      width: 100%;
      height: 43vw;
      margin: 4vw 0;
    }
    ul {
      display: block;
      margin-bottom: 5vw;
      li {
        margin-right: 0;
      }
      ul {
        display: block;
        margin-bottom: 0;
        li {
          margin-bottom: 2vw;
        }
      }
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

export const CurriculumAccordionItemPanel = styled(props => (
  <AccordionItemPanel {...props} />
))`
  padding: 2vw;
`

//content cards

export const ContentCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 18vw 18vw 18vw;
  grid-gap: 2vw;
  @media only screen and (max-width: 575px) {
    grid-template-columns: 45vw;
  }
`
