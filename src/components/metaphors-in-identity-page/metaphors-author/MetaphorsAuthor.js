import styled from 'styled-components'
import Img from "gatsby-image"
import ArrowRightIcon from "../../../assets/svgs/arrow-right.svg";


export const Section = styled.section`
  margin-bottom: 4vw;
  margin-top: 4vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
    margin-top: 5vw;
  }
`
export const Wrapper = styled.div`
  background: white;
  padding: 4vw 4vw;
  border-radius: 0.6vw;
  @media only screen and (max-width: 575px) {
    padding: 6vw 6vw 6vw 6vw;
    border-radius: 2.5vw;
  }
`
export const AuthorInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 3vw;
`

export const AuthorImg = styled(Img)`
    width: 14vw;
    height: 14vw;
    border-radius: 50%;
    border: 2px solid var(--granich-black);
    margin-right: 2vw;
`

export const AuthorInfo = styled.div`
    span {
        display: inline-block;
        border-radius: 10vw;
        border: 1px solid var(--granich-red);
        color: var(--granich-red);
        padding: 0.4vw 1vw;
        font-size: 1.55vw;
        margin-bottom: 1vw;
    }
`

export const AuthorName = styled.div`
    font-size: 3vw;
    font-weight: 700;
    margin-bottom: 1vw;
`

export const AuthorDescr = styled.div`
  font-size: 1.55vw;
  line-height: 1.45;
  width: 25vw;
  color: var(--granich-grey);
`

export const AuthorMore = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

`

export const ArrowRight = styled(ArrowRightIcon)`
    fill: rgba(0,0,0,0.2);
    width: 5vw;
    align-self: center;
    margin: 0 2vw;
    position: relative;
    top: -1vw;
    left: -0.5vw;
`

export const AuthorWarning = styled.div`
    font-size: 1.55vw;
    width: 45%;
    line-height: 1.4;
    font-weight: 500;
`

export const AuthorBlogWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    background: #f2f2f2;
    border-radius: 1vw;
    padding: 1.8vw;
    max-width: 47%;
`

export const AuthorBlogImg = styled(Img)`
    min-width: 5vw;
    min-height: 5vw;
    border-radius: 50%;
    margin-right: 1vw;
`

export const AuthorBlogInfo = styled.div`
    font-size: 1.35vw;
`

export const AuthorBlogTitle = styled.div`
    font-weight: 600;
    margin-bottom: 0.5vw;
`

export const AuthorBlogDescr = styled.div`
    color: var(--granich-grey);
    margin-bottom: 1vw;
    line-height: 1.35;
`

export const TelegramButton = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 1.35vw;
  background: var(--granich-telegram-gradient);
  border-radius: 0.3vw;
  padding: 0.8vw 1.3vw;
  color: white;
  transition: transform 0.2s ease;
  box-shadow: 0.15vw 0.15vw 0.4vw rgba(0, 0, 0, 0.25);
  white-space: nowrap;
  svg {
    fill: white;
    width: 1vw;
    height: 1vw;
    :last-child {
      width: 1.5vw;
      height: 1.5vw;
      margin-left: 0.6vw;
    }
  }

  :hover {
    font-size: 1.35vw;
    transform: scale(1.05);
    cursor: pointer;
    color: white;
  }

  @media only screen and (max-width: 575px) {
    font-size: 3.9vw;
    border-radius: 1.3vw;
    padding: 3.6vw 3vw;
    box-shadow: 0.5vw 0.5vw 1vw rgba(0, 0, 0, 0.25);
    :hover {
      font-size: 3.9vw;
    }
    /* margin-bottom: vw; */
    min-width: 100%;
    width: 100%;
    margin-right: 0;
    justify-content: center;
    svg {
    fill: white;
    min-width: 2.5vw;
    min-height: 2.5vw;
    :last-child {
      min-width: 4vw;
      min-height: 4vw;
      margin-left: 0.6vw;
    }
  }
  }
`
