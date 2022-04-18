import React from "react"
import styled from "styled-components"
import TagCross from "../../../../assets/svgs/tag-cross-icon-01.svg"

type ActiveProp = {
  active: boolean
}

export const Section = styled.section`
  margin-top: 4vw;
  margin-bottom: 4vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
    margin-top: 5vw;
  }
`
export const Wrapper = styled.div`
  background: #e8e8e8;
  padding: 3vw 3vw;
  border-radius: 0.6vw;
  @media only screen and (max-width: 575px) {
    padding: 0;
    background: none;
    border-radius: 0;
  }
`

export const Header = styled.div`
  display: flex;
  margin-bottom: 3.2vw;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    margin-bottom: 5vw;
  }
`

export const MobileWrapper = styled.div`
  @media only screen and (max-width: 575px) {
    background: #e8e8e8;
    padding: 9vw 6vw 4vw;
    border-radius: 2.5vw;
    margin-bottom: 4vw;
  }
`

export const Title = styled.h2`
  color: var(--granich-black);
  font-size: 5.5vw;
  letter-spacing: -0.2vw;
  font-weight: 700;
  line-height: 0.9;
  min-width: 40%;
  @media only screen and (max-width: 575px) {
    font-size: 11.9vw;
    letter-spacing: -0.7vw;
    line-height: 1;
    margin-right: 0;
    margin-bottom: 4vw;
  }
`

export const Text = styled.div`
  margin-top: 1.5vw;
  display: flex;
  align-items: flex-start;

  p {
    color: var(--granich-black);
    font-size: 1.4vw;
    letter-spacing: 0;
    font-weight: 500;
    line-height: 1.35;
    margin-bottom: 1vw;
    margin-right: 2.5vw;
    max-width: 20vw;
    padding-left: 1vw;
    position: relative;
    :last-child {
      margin-right: 0;
      :before {
        content: "2";
      }
    }
    :before {
      content: "1";
      position: absolute;
      top: -0.8vw;
      left: -1.3vw;
      font-family: EB Garamond;
      font-style: italic;
      font-size: 2.6vw;
    }
  }
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    p {
      font-size: 3.9vw;
      letter-spacing: -0.08vw;
      margin-bottom: 3vw;
      max-width: 100%;
      padding-left: 8vw;
      :before {
        top: -1.5vw;
        left: 1vw;
        font-size: 6vw;
      }
    }
  }
`

export const Filters = styled.div`
  display: flex;
  border-bottom: 1px solid #d4d4d4;
  margin-bottom: 1vw;
  margin-left: 0.3vw;
  @media only screen and (max-width: 575px) {
    border-bottom: 0.3vw solid var(--granich-light-grey);
    padding-bottom: 0vw;
    margin-bottom: 4vw;
  }
`
export const Filter = styled.div<ActiveProp>`
  font-size: 1.15vw;
  margin-right: 1.5vw;
  margin-bottom: -0.1vw;
  padding-bottom: 1vw;
  color: var(--granich-grey);
  font-weight: 400;

  :hover {
    cursor: pointer;
    color: var(--granich-black);
    border-bottom: 2px solid rgba(228, 5, 33, 0.2);
  }
  ${props =>
    props.active &&
    `
    font-weight: 500;
    color: var(--granich-black);
    border-color: var(--granich-red);
    border-bottom: 2px solid var(--granich-red);
    :hover {
        border-bottom: 2px solid var(--granich-red);
    }
    @media only screen and (max-width: 575px) {
        border-bottom: 0.4vw solid var(--granich-red);
    }

    `}
  @media only screen and (max-width: 575px) {
    font-size: 3.8vw;
    margin-right: 5.2vw;
    padding-bottom: 2.9vw;
    margin-bottom: -0.4vw;
    :first-child {
      margin-left: -0.2vw;
      padding-left: 0;
    }
  }
`

export const FilterCross = styled(props => <TagCross {...props} />)`
  display: none;
  ${props =>
    props.active &&
    `
        display: inline-block;
        height: 1vw;
        width: 0.9vw;
        margin-left: 0.2vw;
    `}
  @media only screen and (max-width: 575px) {
    ${props =>
      props.active &&
      `
            height: 3vw;
            width: 3vw;
            margin-left: 1vw;
        `}
  }
`

export const Tags = styled.div`
  display: flex;
  margin-bottom: 0.8vw;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 0.1vw;
`
export const TagsTitle = styled.div`
  font-size: 1vw;
  margin-right: 1vw;
  margin-top: 0.25vw;
  margin-left: 0.2vw;
  color: var(--granich-grey);
  // padding-left: 0.6vw;
  @media only screen and (max-width: 575px) {
    font-size: 3.5vw;
    margin-right: 4vw;
  }
`

export const Tag = styled.div<ActiveProp>`
  border: 1px solid var(--granich-light-grey);
  padding: 0.5vw;
  border-radius: 100vw;
  transition: all 0.2s ease;
  font-size: 1.1vw;
  padding: 0.15vw 0.7vw 0.15vw;
  margin-right: 0.5vw;
  margin-bottom: 0.5vw;
  color: var(--granich-light-grey);
  display: flex;
  align-items: center;
  user-select: none;
  :last-child {
    margin-right: 0;
  }
  :hover {
    cursor: pointer;
    color: var(--granich-black);
    border-color: var(--granich-black);
  }
  ${props =>
    props.active &&
    `
        color: var(--granich-red);
        border-color: var(--granich-red);
        :hover {
            color: var(--granich-red);
            border-color: var(--granich-red);
        }
    `}
  @media only screen and (max-width: 575px) {
    font-size: 3.8vw;
    border: 0.3vw solid var(--granich-light-grey);
    padding: 0.5vw 2.3vw;
    margin-right: 2vw;
    margin-bottom: 2vw;
    color: var(--granich-light-grey);
    ${props =>
      props.active &&
      `
            color: var(--granich-red);
            border-color: var(--granich-red);
            :hover {
                color: var(--granich-red);
                border-color: var(--granich-red);
            }
        `}
  }
`

export const ContentList = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  grid-column-gap: 1.65vw;
  grid-row-gap: 1.65vw;
  // grid-template-rows: minmax(25vw, 25vw)

  padding: 0 0.2vw;
  @media only screen and (max-width: 575px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 4vw;
    grid-column-gap: 4vw;
  }
`

export const ButtonMore = styled.div`
  width: 100%;
  text-align: center;
  background: #dedede;
  padding: 1.2vw 0 1.2vw;
  border-radius: 0.5vw;
  margin-top: 1.65vw;
  transition: all 0.2s ease;
  :hover {
    cursor: pointer;
    div {
      border-color: rgba(0, 0, 0, 0);
    }
  }
  @media only screen and (max-width: 575px) {
    padding: 3vw 0 3.5vw;
    border-radius: 1.5vw;
    margin-top: 4vw;
  }
`
export const ButtonMoreText = styled.div`
  display: inline-block;
  font-size: 1.1vw;
  font-weight: 400;
  color: #8e8e8e;
  padding-bottom: 0.15vw;
  border-bottom: 1px dotted var(--granich-light-grey);
  transition: all 0.2s ease;
  @media only screen and (max-width: 575px) {
    padding-bottom: 0.3vw;
    font-size: 3.5vw;
    border-bottom: 0.5vw dotted var(--granich-light-grey);
  }
`
