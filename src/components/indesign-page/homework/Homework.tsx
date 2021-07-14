import styled from "styled-components"

export const Section = styled.div``

export const Wrapper = styled.div`
  // background: #2A2A2A;

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 2vw;
`

export const HomeworkDownload = styled.div`
  border-radius: 0.6vw;
  background: var(--granich-black);
  padding: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* min-height: 100%; */
  /* align-items: center; */
`

export const DownloadTitle = styled.div`
  color: white;
  font-size: 3vw;
  font-weight: 600;
`

export const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: var(--granich-red-gradient-horizontal);
  padding: 1vw 1.6vw 1.2vw 1.3vw;
  letter-spacing: 0.06vw;
  border-radius: 0.3vw;
  font-size: 1.61vw;
  font-weight: 400;
  transition: all 0.2s ease;
  user-select: none;
  box-shadow: 0.25vw 0.25vw 0.4vw rgba(0, 0, 0, 0.25);
  letter-spacing: 0.05vw;
  position: relative;
  z-index: 1;
  margin-bottom: 1vw;
  margin-top: auto;
  align-self: flex-end;
  width: 100%;
  svg {
    width: 1.4vw;
    height: 1.4vw;
    margin-right: 0.8vw;
    fill: white;
  }
  :hover {
    transform: scale(1.05);
    cursor: pointer;
    color: white;
    font-size: 1.61vw;
    font-weight: 400;
    letter-spacing: 0.06vw;
  }
  @media only screen and (max-width: 575px) {
    font-size: 5.5vw;
    margin: 0 5vw;
    padding: 3vw 5vw 4vw 5vw;
    border-radius: 1.5vw;
    margin-bottom: 2vw;
    box-shadow: 0.7vw 0.7vw 1.5vw rgba(0, 0, 0, 0.3);
    :hover {
      font-size: 5.5vw;
    }
    svg {
      width: 5vw;
      height: 5vw;
      margin-left: 0;
      margin-right: 1vw;
    }
  }
`

export const DownloadNotice = styled.div`
  font-size: 1.46vw;
  color: var(--granich-grey);
`

export const DownloadFooter = styled.div`
  margin-top: auto;
`
export const Consulting = styled.div`
  border-radius: 0.6vw;
  background: white;
  padding: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ConsultingTitle = styled.div`
  font-family: EB Garamond;
  font-style: italic;
  font-weight: 500;
  font-size: 4.1vw;
  line-height: 1;
  position: relative;
  margin-bottom: 2vw;
  margin-left: 0vw;
  letter-spacing: -0.1vw;
  @media only screen and (max-width: 575px) {
    white-space: normal;
    font-size: 8.9vw;
    margin-left: 0;
    letter-spacing: -0.4vw;
    margin-bottom: 6.8vw;
    line-height: 1;
  }
`

export const ConsultingText = styled.div`
  line-height: 1.5;
  font-size: 1.46vw;
  margin-bottom: 2vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 8vw;
    font-size: 4vw;
  }
`

export const ConsultingFooter = styled.div`
  background: #f2f2f2;
  border-radius: 0.5vw;
  padding: 1vw 1.5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-top: 3.5vw; */
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    background: white;
    padding: 0;
  }
`

export const ConsultingPriceText = styled.div`
  width: 8.5vw;
  font-size: 1.46vw;
  color: var(--granich-grey);
`

export const ConsultingPrice = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2vw;
  line-height: 1.3;
  color: var(--granich-grey);
  span {
    display: block;
    font-family: EB Garamond;
    font-size: 4vw;
    font-style: italic;
    margin-left: 1.5vw;
    line-height: 1;
    margin-top: -0.4vw;
    letter-spacing: -0.1vw;
    white-space: nowrap;
  }
  @media only screen and (max-width: 575px) {
    font-size: 4vw;
    margin-bottom: 3vw;
    margin-top: 5vw;
    span {
      font-size: 10.5vw;
      font-style: italic;
      margin-left: 5vw;
      line-height: 1;
      margin-top: -0.4vw;
      letter-spacing: -0.1vw;
    }
  }
`

export const ConsultingPriceWrapper = styled.div`
  display: flex;
`

export const ConsultingButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: var(--granich-red-gradient-horizontal);
  padding: 1vw 1.6vw 1.2vw 1.3vw;
  letter-spacing: 0.06vw;
  border-radius: 0.3vw;
  font-size: 1.61vw;
  font-weight: 400;
  transition: all 0.2s ease;
  user-select: none;
  box-shadow: 0.25vw 0.25vw 0.4vw rgba(0, 0, 0, 0.25);
  letter-spacing: 0.05vw;
  position: relative;
  z-index: 1;
  margin-top: auto;
  align-self: flex-end;
  svg {
    width: 1.4vw;
    height: 1.4vw;
    margin-right: 0.5vw;
  }
  :hover {
    transform: scale(1.05);
    cursor: pointer;
    color: white;
    font-size: 1.61vw;
    font-weight: 400;
    letter-spacing: 0.06vw;
  }
  @media only screen and (max-width: 575px) {
    font-size: 5.5vw;
    margin: 0 5vw;
    padding: 3vw 5vw 4vw 5vw;
    border-radius: 1.5vw;
    margin-bottom: 2vw;
    box-shadow: 0.7vw 0.7vw 1.5vw rgba(0, 0, 0, 0.3);
    :hover {
      font-size: 5.5vw;
    }
    svg {
      width: 5vw;
      height: 5vw;
      margin-left: 0;
      margin-right: 1vw;
    }
  }
`
