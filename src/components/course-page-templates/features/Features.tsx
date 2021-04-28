import React from "react"
import styled from "styled-components"

export const Section = styled.section`
  margin-bottom: 4vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
  }
`

export const SectionTitle = styled.h2`
  font-size: 4vw;
  font-weight: 700;
  letter-spacing: -0.1vw;
  margin-bottom: 2.4vw;
  @media only screen and (max-width: 575px) {
    font-size: 11vw;
    margin-bottom: 4vw;
    letter-spacing: -0.7vw;
    line-height: 1;
  }
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 1.5vw;
  grid-row-gap: 1.5vw;
  @media only screen and (max-width: 575px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-column-gap: 4vw;
    grid-row-gap: 4vw;
  }
`
