import styled from "styled-components"
import { CoursesWrapper } from "../../index/courses/Courses"

export const Section = styled.section`
  margin-bottom: 5vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 7vw;
  }
`

export const Wrapper = styled.div`
  /* border-radius: 5vw;
  background: white;
  padding: 2vw; */
  @media only screen and (max-width: 575px) {
  }
`

export const SectionHeader = styled.div`
  margin-bottom: 2vw;
`

export const SectionTitle = styled.h2`
  font-size: 3.6vw;
  font-weight: 700;
  letter-spacing: -0.05rem;
  color: var(--granich-black);
  margin-bottom: 3vw;
  @media only screen and (max-width: 575px) {
    font-size: 10.2vw;
    letter-spacing: -0.07rem;
    line-height: 1;
    margin-bottom: 4vw;
  }
`

export const SectionDescr = styled.div`
  font-size: 1.75vw;
  font-weight: 500;
  /* width: 60%;
  min-width: 60%; */
  color: var(--granich-black);
  line-height: 1.3;
  margin-bottom: 2.5vw;
  /* margin-right: 3vw; */
  @media only screen and (max-width: 575px) {
    font-size: 3.7vw;
    width: 100%;
    margin-bottom: 5vw;
  }
`

export const SectionDescrAndCard = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row-reverse;
  ${CoursesWrapper} {
    grid-template-columns: 1fr;
    margin-right: 3vw;
  }
  @media only screen and (max-width: 575px) {
    flex-direction: column;
  }
`
