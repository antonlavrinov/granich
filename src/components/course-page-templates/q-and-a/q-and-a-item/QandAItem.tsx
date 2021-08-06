import React from "react"
import styled from "styled-components"
import { animated } from "react-spring"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion"

export const Line = styled.div`
  width: 78%;
  height: 1px;
  border-bottom: 1.5px solid black;
  margin-left: auto;
  margin-right: 2v;
  ${props =>
    props.type &&
    `
        border-bottom: 1px solid var(--granich-light-grey);
    `}
`

export const ItemFrame = styled.div`
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  vertical-align: middle;
  fill: white;
  overflow: hidden;
`

export const Container = styled.div`
  display: flex;
  padding: 1.7vw 0vw;
  align-items: center;
  img {
    width: 2.3vw;
    height: 2.3vw;
    user-select: none;
    margin-left: auto;
  }
  :hover {
    cursor: pointer;
  }
`

export const Tag = styled.div`
  font-size: 1.15vw;
  border: 1.5px solid var(--granich-red);
  color: var(--granich-red);
  border-radius: 100vw;
  padding: 0.3vw 0;
  font-weight: 400;
  display: inline-block;
  min-width: 9vw;
  text-align: center;
  user-select: none;
  ${props =>
    !props.type &&
    `
        background: var(--granich-red-gradient);
        border: none;
        padding: 0.4vw 0;
        color: white;
        box-shadow: 0.1vw 0.1vw 0.3vw rgba(0,0,0,0.3);
    `}
  @media only screen and (max-width: 575px) {
    padding: 1vw 0;
    min-width: 25vw;
    font-size: 3.3vw;
    border: 1px solid var(--granich-red);
  }
`

export const TagColumn = styled.div`
  width: 9.8vw;
  @media only screen and (max-width: 575px) {
    width: 20vw;
  }
`

export const ItemContent = styled(animated.div)`
  will-change: transform, opacity, height;
  overflow: hidden;
`

export const TextWrapper = styled.div`
  display: flex;
`

export const CategoryColumn = styled.div`
  width: 27vw;
  min-width: 27vw;
  margin-right: 2vw;
  line-height: 1.45;
  :last-child {
    margin-right: 0;
  }
  p {
    font-size: 1.12vw;
    color: var(--granich-grey);
    margin-bottom: 0.5vw;
    display: block;
    white-space: normal;
  }
  b {
    display: block;
    font-weight: 500;
    margin-top: 1vw;
  }
  a {
    border-bottom: 1px solid var(--granich-light-grey);
    :hover {
      border-color: var(--granich-grey);
    }
  }
  ${(props) => props.isWrap && `
    width: 30vw;
    min-width: 30vw;
    margin-right: 3.5vw;
  `}
  @media only screen and (max-width: 575px) {
    width: 100%;
    min-width: 100%;
    padding: 0;
    margin-right: 0;
    p {
      min-width: 100%;
      margin-bottom: 3vw;
      font-size: 3.7vw;
      line-height: 1.45;
    }
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding-left: 11.3vw;
  padding-top: 0vw;
  padding-bottom: 1.2vw;
  ${(props) => props.isWrap && `
        padding-left: 2.3vw;
        margin-top: -2vw;

  `}
`

export const AccordionWrapper = styled.div`
  display: block;
  @media only screen and (max-width: 575px) {
    display: none;
  }
`

export const EmptyText = styled.div`
  opacity: 0;
  font-size: 0;
`

export const AccordionWrapperMobile = styled(props => <Accordion {...props} />)`
  display: none;
  @media only screen and (max-width: 575px) {
    display: block;
    margin-top: 5vw;
  }
`
export const AccordionItemWrapper = styled(props => (
  <AccordionItem {...props} />
))`
  margin: 3vw 0;
  padding: 2.5vw 0 0;
  cursor: pointer;
`

export const AccordionHeading = styled(props => (
  <AccordionItemHeading {...props} />
))`
  position: relative;
`
export const AccordionButton = styled(props => (
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
export const LessonAndLineWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ItemLineMobile = styled.div`
  width: 54.5%;
  height: 1px;
  background: var(--granich-light-grey);
  margin-left: auto;
  margin-right: 8vw;
`
