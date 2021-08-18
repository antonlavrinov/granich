import styled from "styled-components"
import { CoursesWrapper } from "../../main-page/courses/Courses"



export const Wrapper = styled.div`
display: flex;
flex-direction: row-reverse;
align-items: flex-start;
padding: 2vw 0;
${CoursesWrapper} {
 grid-template-columns: 1fr;
 margin-right: 3vw;
}
a {
    border: none;
    outline: none;
    :after {
        display: none;
    }
}
  @media only screen and (max-width: 575px) {
      flex-direction: column;
  }
`


export const Descr = styled.div`
  font-size: 1.45vw;
  font-weight: 500;
  /* width: 60%;
  min-width: 60%; */
  color: var(--granich-black);
  line-height: 1.5;
  margin-bottom: 2.5vw;
  white-space: normal;
  span {
    font-weight: 500;
    /* color: var(--granich-red); */
    color: var(--granich-black);
    border-radius: 0.2vw;
    padding: 0 0.3vw;
    font-style: normal;
    white-space: nowrap;
    /* text-decoration: underline; */
    background: var(--granich-light-red);
    /* background: var(--granich-red); */
  }
  i {
    display: block;
    color: var(--granich-light-grey);
    margin-top: 1vw;
    font-weight: 400;
  }

  /* margin-right: 3vw; */
  @media only screen and (max-width: 575px) {
    font-size: 3.7vw;
    width: 100%;
    margin-bottom: 5vw;
    i {
      margin-top: 3vw;
    }
    span {
      padding: 0 1vw;
      border-radius: 0.5vw;
    }
  }
`

// export const SectionDescrAndCard = styled.div`
//   display: flex;
//   align-items: flex-start;
//   flex-direction: row-reverse;
//   ${CoursesWrapper} {
//     grid-template-columns: 1fr;
//     margin-right: 3vw;
//   }
//   @media only screen and (max-width: 575px) {
//     flex-direction: column;
//   }
// `
