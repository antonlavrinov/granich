import React from "react"
import styled from "styled-components"

const CourseOfferButton = styled(props => <Link {...props} />)`
  display: inline-flex;
  align-items: center;
  color: white;
  background: var(--granich-red-gradient-horizontal);
  margin-left: 0.7vw;
  padding: 1vw 1.6vw 1.2vw 1.3vw;
  letter-spacing: 0.06vw;
  border-radius: 0.3vw;
  font-size: 1.61vw;
  font-weight: 400;
  transition: all 0.2s ease;
  user-select: none;
  box-shadow: 0.25vw 0.25vw 0.4vw rgba(0, 0, 0, 0.25);
  letter-spacing: 0.05vw;
  position: relative;
  z-index: 1;
  margin-bottom: 1vw;
  svg {
    width: 1.4vw;
    height: 1.4vw;
    margin-right: 0.5vw;
  }
  :hover {
    transform: scale(1.05);
    cursor: pointer;
    color: white;
    font-size: 1.61vw;
    font-weight: 400;
    letter-spacing: 0.06vw;
  }
  ${props =>
    props.type === "Мастер-класс" &&
    `
    padding: 1vw 3vw 1.2vw 4.2vw;
    
    svg {
        margin-left: 0.4vw;
        
    }
    @media only screen and (max-width: 575px) {
        padding: 3vw 11vw 4vw 14vw;
        :hover {
            font-size: 5.5vw;
          }
        svg {
            margin-left: 1vw;
            margin-right: 0;
        }

    }
  `}
  @media only screen and (max-width: 575px) {
    font-size: 5.5vw;
    margin: 0 5vw;
    padding: 3vw 5vw 4vw 5vw;
    border-radius: 1.5vw;
    margin-bottom: 2vw;
    box-shadow: 0.7vw 0.7vw 1.5vw rgba(0, 0, 0, 0.3);
    :hover {
      font-size: 5.5vw;
    }
    svg {
      width: 5vw;
      height: 5vw;
      margin-left: 0;
      margin-right: 1vw;
    }
  }
`

const CourseOfferButton = () => {
  return <CourseOfferButton></CourseOfferButton>
}

export default CourseOfferButton
