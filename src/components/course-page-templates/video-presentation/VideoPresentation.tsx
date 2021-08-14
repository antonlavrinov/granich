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
  font-size: 4.7vw;
  letter-spacing: -0.1vw;
  font-weight: 700;
  line-height: 1;
  margin-top: -0.6vw;
  margin-bottom: 2vw;
  line-height: 1.1;
  white-space: nowrap;
  @media only screen and (max-width: 575px) {
    font-size: 11vw;
    white-space: normal;
    margin-bottom: 5vw;
    line-height: 1;
  }
`

export const Descr = styled.div`
    font-size: 1.55vw;
    font-weight: 500;
    margin-bottom: 3vw;
    @media only screen and (max-width: 575px) {
        font-size: 4.6vw;
        margin-bottom: 5vw;
        line-height: 1.5;
    }
`

export const YoutubeBlock = styled.div`
  // width: 100%;
  height: 38vw;
  // padding: 3vw;
  position: relative;

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