import styled from "styled-components"

export const Section = styled.section``

export const Wrapper = styled.div`
  background: white;
  border-radius: 0.6vw;
  padding: 4.2vw 3.3vw;
  position: relative;
  min-height: 36.5vw;
  margin-bottom: 2vw;

  // height: 36.5vw;
  @media only screen and (max-width: 575px) {
    border-radius: 2.5vw;
    padding: 7vw 6vw 38vw;
    height: auto;
    min-height: auto;
    margin-bottom: 5vw;
  }
`

export const Title = styled.div`
  font-size: 5vw;
  letter-spacing: -0.2vw;
  font-weight: 700;
  line-height: 0.87;
  color: var(--granich-black);
  margin-bottom: 3.1vw;
  @media only screen and (max-width: 575px) {
    font-size: 8.4vw;
    letter-spacing: -0.5vw;
    line-height: 1.1;
    margin-bottom: 3vw;
  }
`

export const Text = styled.div`
  color: var(--granich-black);
  font-size: 2vw;
  margin-top: 0.2vw;
  line-height: 1.55;
  letter-spacing: 0.01vw;
  font-weight: 500;
  margin-bottom: 3vw;
  margin-left: -0.2vw;
  @media only screen and (max-width: 575px) {
    font-size: 5.2vw;
    letter-spacing: -0.01vw;
    line-height: 1.5;
    margin-bottom: 5vw;
  }
`

export const Socials = styled.div`
  display: flex;
  align-items: center;
  align-items: flex-start;
  flex-direction: column;
`

export const Social = styled.div<{ youtube?: boolean }>`
  display: flex;
  align-items: center;
  margin-right: 4vw;
  margin-bottom: 2vw;
  :last-child {
    margin-bottom: 0;
  }
  svg {
    margin-right: 1vw;
    width: 3.5vw;
    height: 3.5vw;
    ${props =>
      props.youtube &&
      `
          width: 4vw;
          height: 4vw;
          transform: translateY(5%);
    `}
  }
  a {
    font-size: 1.8vw;
    border-bottom: 1px solid var(--granich-light-grey);
    :hover {
      border-bottom: 1px solid var(--granich-black);
    }
  }

  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
    a {
      font-size: 4.5vw;
    }
    svg {
      margin-right: 2.5vw;
      width: 10vw;
      height: 10vw;
      ${props =>
        props.youtube &&
        `
          width: 12vw;
          height: 12vw;

    `}
    }
  }
`

export const Devider = styled.div`
  height: 4vw;
  @media only screen and (max-width: 575px) {
    height: 5vw;
  }
`

export const Team = styled.div`
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
