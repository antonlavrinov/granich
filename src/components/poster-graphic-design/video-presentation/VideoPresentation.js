import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 4vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
  }
`
export const Wrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  background: white;
  padding: 5vw 3.3vw 3.3vw;
  border-radius: 0.6vw;
  @media only screen and (max-width: 575px) {
    flex-direction: column-reverse;
    padding: 6vw 6vw 7vw;
    border-radius: 2.5vw;
  }
`

export const Title = styled.h2`
  color: var(--granich-black);
  position: relative;
  font-size: 4vw;
  letter-spacing: -0.1vw;
  font-weight: 700;
  line-height: 1;
  /* margin-top: -0.6vw; */
  margin-bottom: 1.8vw;
  line-height: 1;
  /* white-space: nowrap; */
  /* font-family: "EB Garamond"; */
  
  span {
    font-family: "EB Garamond";
    font-size: 4.5vw;
    font-style: italic;
    font-weight: 500;
    white-space: nowrap;
    display: block;
    letter-spacing: -0.05vw;
  }
  /* margin-left: -1vw; */
  @media only screen and (max-width: 575px) {
    font-size: 10vw;
    white-space: normal;
    margin-bottom: 5vw;
    line-height: 1;
    letter-spacing: -0.5vw;
    span {
      font-size: 11vw;
      white-space: normal;
    }
  }
`

export const Descr = styled.div`
    font-size: 1.35vw;
    font-weight: 500;
    /* margin-bottom: 3vw; */
    /* max-width: 65%; */
    /* margin-left: 2vw; */
    line-height: 1.5;
    @media only screen and (max-width: 575px) {
        font-size: 4.6vw;
        margin-bottom: 5vw;
        line-height: 1.5;
        max-width: 100%;
        margin-left: 0;
    }
`

export const YoutubeBlock = styled.div`
  // width: 100%;
  /* height: 38vw; */
  // padding: 3vw;
  position: relative;
  width: 100%;
    height: 24.4vw;


  iframe {
    border: 2px solid rgba(0, 0, 0, 0.2);
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
  }
  @media only screen and (max-width: 575px) {
    padding: 0;
    height: auto;
    margin-bottom: 3vw;
    iframe {
      position: relative;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      height: 43vw;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
  }
`

export const StyledContentCard = styled.div`
  margin-right: 2.5vw;
  min-width: 16vw;
  position: relative;
  @media only screen and (max-width: 575px) {
    max-width: 63%; 
  }
`

export const Hint = styled.div`
  position: absolute;
  top: -3.4vw;
  right: -17.5vw;

  svg {
    fill: rgba(0,0,0,0.2);
    width: 13.5vw;
    min-width: 13.5vw;
    top: 1.2vw;
    left: 2.5vw;
    position: absolute;
    /* transform: rotate(0deg); */
  }
  span {
    /* margin-left: 2.7vw; */
    /* margin-top: -2vw; */
    display: block;
    top: -0.8vw;
    left: 2.7vw;
    position: relative;
    color: rgba(0,0,0,0.3);
    font-size: 1.2vw;
    /* line-height: 1.3; */
    font-family: Inter;
    /* font-style: normal; */
    letter-spacing: normal;
  }
  br {
    display: none;
  }

  @media only screen and (max-width: 575px) {
    top: 20vw;
    left: auto;
    right: -25vw;

    svg {
      display: none;
      /* fill: rgba(0,0,0,0.2);
      width: 30vw;
      min-width: 30vw;
      top: 1.2vw;
      left: auto;
      right: 3.6vw;
      position: absolute;
      transform: rotate(100deg) scale(-1, 1); */
    }
    span {
      position: absolute;
      top: 0;
      right: -9vw;
      left: auto;
      display: block;
      /* padding-left: 10vw; */
      margin-top: -0.6vw;
      color: rgba(0,0,0,0.3);
      font-size: 3.3vw;
      line-height: 1.3;
      font-family: Inter;
      font-style: normal;
      letter-spacing: normal;
      width: 30vw;
    }
  }
`