import styled from "styled-components"
import "react-responsive-modal/styles.css"

export const PopupCross = styled.div`
  position: absolute;
  top: -4.5vw;
  right: -0.8vw;
  svg {
    fill: rgba(0, 0, 0, 0.5);
    width: 4vw;
    height: 4vw;
  }
  :hover {
    cursor: pointer;
    svg {
      fill: var(--granich-red);
    }
  }
  @media only screen and (max-width: 575px) {
    top: -12vw;
    right: -2.3vw;
    svg {
      width: 12vw;
      height: 12vw;
    }
  }
`

export const Section = styled.section`
  position: relative;
  margin-top: -12.5vw;
  margin-bottom: 1vw;
  padding-top: 3vw;
  z-index: 3;
  @media only screen and (max-width: 575px) {
    margin-top: -15.5vw;
    margin-bottom: 5vw;
  }
`

export const CoursesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 1.7vw;
  grid-row-gap: 1.7vw;
  @media only screen and (max-width: 575px) {
    grid-template-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 4vw;
    grid-column-gap: 4vw;
  }
`
