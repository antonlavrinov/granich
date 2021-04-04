import styled from "styled-components"

export const Section = styled.section``

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1.6vw;
  grid-row-gap: 1.6vw;
  justify-content: space-between;
  margin-bottom: 2vw;
  @media only screen and (max-width: 575px) {
    grid-template-columns: 1fr;
    grid-row-gap: 4vw;
    margin-bottom: 5vw;
  }
`

export const CategoryTitle = styled.div`
  font-size: 2vw;
  letter-spacing: -0.1vw;
  font-weight: 700;
  margin-bottom: 1vw;
  @media only screen and (max-width: 575px) {
    font-size: 9vw;
    margin-bottom: 4vw;
  }
`
