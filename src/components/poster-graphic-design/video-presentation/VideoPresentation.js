import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 4vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 3.3vw 3.3vw;
  border-radius: 0.6vw;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    padding: 6vw 6vw 7vw;
    border-radius: 2.5vw;
  }
`

export const Title = styled.h2`
  color: var(--granich-black);
  font-size: 5.35vw;
  letter-spacing: -0.1vw;
  font-weight: 500;
  line-height: 1;
  margin-top: -0.6vw;
  margin-bottom: 3vw;
  line-height: 1;
  /* white-space: nowrap; */
  font-family: "EB Garamond";
  font-style: italic;
  /* margin-left: -1vw; */
  @media only screen and (max-width: 575px) {
    font-size: 11vw;
    white-space: normal;
    margin-bottom: 5vw;
    line-height: 1;
  }
`

export const Descr = styled.div`
    font-size: 1.35vw;
    font-weight: 500;
    margin-bottom: 3vw;
    max-width: 65%;
    /* margin-left: 2vw; */
    line-height: 1.5;
    @media only screen and (max-width: 575px) {
        font-size: 4.6vw;
        margin-bottom: 0;
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
  /* flex-direction: row-reverse; */
  @media only screen and (max-width: 575px) {
    flex-direction: column-reverse;
  }
`

export const StyledContentCard = styled.div`
  margin-right: 3vw;
  width: 16vw;
`