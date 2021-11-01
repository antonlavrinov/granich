import styled from 'styled-components'
import Img from "gatsby-image"

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

export const Title = styled.h2`
  font-family: EB Garamond;
  font-style: italic;
  font-weight: 500;
  font-size: 5.4vw;
  line-height: 0.75;
  position: relative;
  margin-bottom: 4vw;
  margin-left: 0vw;
  white-space: nowrap;
  letter-spacing: -0.01vw;
  @media only screen and (max-width: 575px) {
    white-space: nowrap;
    font-size: 9.5vw;
    margin-left: 0;
    letter-spacing: -0.1vw;
    margin-bottom: 10vw;
    line-height: 0.9;
  }
`
export const Items = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1vw;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    margin-bottom: 3vw;
  }
`
export const Item = styled.div`
  /* display: flex; */
  align-items: center;
  /* margin-right: 6.2vw; */
  font-size: 1.5vw;
  /* margin-bottom: 2vw; */
  margin-right: 2.6vw;
  :last-child {
    margin-right: 0;
  }
  @media only screen and (max-width: 575px) {
    margin-bottom: 10vw;
    display: flex;
    align-items: flex-start;
    :last-child {
      margin-bottom: 0;
    }
}
`

export const ItemImg = styled(Img)`
    width: 7vw;
    height: 7vw;
    min-width: 7vw;
    min-height: 7vw;
    /* background: rgba(0,0,0,0.1); */
    /* border-radius: 50%; */
    margin-bottom: 1vw;
    img {
        /* transform: scale(1.2); */
    }
    @media only screen and (max-width: 575px) {
        width: 17vw;
        height: 17vw;
        min-width: 17vw;
        min-height: 17vw;
        /* margin-right: 4vw; */
        margin-right: 4vw;
        position: relative;
        top: -3vw;
    }

`

export const ItemText = styled.div`
  font-size: 1.3vw;
  font-weight: 500;
  /* width: 9vw; */
  line-height: 1.35;
  position: relative;
  left: 0.2vw;
  /* width: 14vw; */
  /* white-space: nowrap; */
  b {
    display: block;
    font-size: 1.55vw;
    margin-bottom: 0.5vw;
  }
  p {
    color: var(--granich-grey);
  }
  @media only screen and (max-width: 575px) {
    font-size: 3.7vw;
    margin-top: -2vw;
    width: 90%;

    b {
      font-size: 3.7vw;
    }

  }
`
export const InfoWrapper = styled.div`
  /* display: flex; */
  /* align-items: flex-start; */
  @media only screen and (max-width: 575px) {
    flex-direction: column;
  }
`
export const InfoText = styled.div`
  font-size: 1.3vw;
  line-height: 1.5;
  /* max-width: 70%;
  width: 70%; */
  font-weight: 500;
  margin-right: 1vw;

  /* width: 80%; */
  @media only screen and (max-width: 575px) {
    font-size: 3.7vw;
    margin-bottom: 3vw;
    max-width: 100%;
    width: 100%;
  }
`
