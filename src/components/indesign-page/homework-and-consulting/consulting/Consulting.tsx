import styled from "styled-components"

export const Wrapper = styled.div`
  border-radius: 0.6vw;
  background: white;
  padding-top: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 1.5vw rgba(0, 0, 0, 0.15);
  @media only screen and (max-width: 575px) {
    padding-top: 10vw;
    border-radius: 2.5vw;
  }
`

export const SubTitle = styled.div`
  text-align: center;
  color: var(--granich-red);
  text-transform: uppercase;
  letter-spacing: 0.5vw;
  font-weight: 600;
  font-size: 1.2vw;
  margin-bottom: 1vw;
  @media only screen and (max-width: 575px) {
    font-size: 4vw;
    margin-bottom: 3vw;
  }
`

export const Title = styled.div`
  font-family: EB Garamond;
  text-align: center;
  font-style: italic;
  font-weight: 500;
  font-size: 5.5vw;
  line-height: 1;
  position: relative;
  margin-bottom: 2vw;
  margin-left: 0vw;
  letter-spacing: -0.1vw;
  @media only screen and (max-width: 575px) {
    white-space: normal;
    font-size: 14vw;
    margin-left: 0;
    letter-spacing: -0.4vw;
    margin-bottom: 4vw;
    line-height: 1;
  }
`

export const Text = styled.div`
  line-height: 1.5;
  font-size: 1.46vw;
  margin-bottom: 2vw;
  color: var(--granich-grey);
  /* font-size: 1.15vw; */
  text-align: center;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
    font-size: 4vw;
  }
`

export const ItemsList = styled.div`
  margin-bottom: 2vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
  }
`

export const Item = styled.div`
  padding: 1.3vw 2vw;
  font-size: 1.46vw;
  line-height: 1.4;
  display: flex;

  b {
    display: block;
  }
  span {
    color: var(--granich-grey);
  }
  /* align-items: center; */
  border-bottom: 1px solid rgb(222, 222, 222);
  :first-child {
    border-top: 1px solid rgb(222, 222, 222);
  }
  svg {
    min-width: 1.5vw;
    min-height: 1.5vw;
    width: 1.5vw;
    height: 1.5vw;
    margin-right: 0.8vw;
    top: 0.2vw;
    position: relative;
  }
  @media only screen and (max-width: 575px) {
    font-size: 4vw;
    padding: 3.5vw 5vw;
    svg {
      min-width: 4.5vw;
      min-height: 4.5vw;
      width: 4.5vw;
      height: 4.5vw;
      margin-right: 2.5vw;
      top: 0.5vw;
    }
  }
`

export const Footer = styled.div`
  background: #f2f2f2;
  border-radius: 0 0 0.5vw 0.5vw;
  padding: 1.5vw;
  display: flex;
  margin-top: auto;
  flex-direction: column;
  align-items: center;
  margin: 2vw;
  border-radius: 0.5vw;
  /* justify-content: space-between; */
  /* margin-top: 3.5vw; */
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    background: #f2f2f2;
    padding: 5vw;
    margin: 5vw;
    /* justify-content: center; */
    /* align-items: center; */
  }
`

export const PriceText = styled.div`
  /* width: 8.5vw; */
  font-size: 1.46vw;
  color: var(--granich-grey);
  margin-bottom: 1vw;

  @media only screen and (max-width: 575px) {
    font-size: 4vw;
    /* width: 23vw; */
    margin-right: 3vw;
    margin-bottom: 3vw;
  }
`

export const Price = styled.div`
  display: flex;
  align-items: center;
  /* font-size: 1.vw; */
  line-height: 1.3;
  color: var(--granich-grey);

  span {
    display: block;
    font-family: EB Garamond;
    font-size: 5vw;
    font-style: italic;
    /* margin-left: 1.5vw; */
    line-height: 1;
    font-weight: 500;
    margin-top: -0.4vw;
    letter-spacing: -0.1vw;
    white-space: nowrap;
  }
  @media only screen and (max-width: 575px) {
    font-size: 4vw;
    margin-bottom: 1vw;
    /* margin-top: 5vw; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 13vw;
      font-style: italic;
      /* margin-left: 5vw; */
      line-height: 1;
      top: -0.6vw;
      position: relative;
      letter-spacing: -0.1vw;
    }
  }
`

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.3vw;
  flex-direction: column;
  text-align: center;
  width: 100%;
  /* padding: 0 1.5vw; */
`

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: var(--granich-red-gradient-horizontal);
  padding: 1.5vw 1.6vw 1.5vw 1.3vw;
  letter-spacing: 0.06vw;
  border-radius: 0.3vw;
  font-size: 1.61vw;
  font-weight: 400;
  transition: all 0.2s ease;
  user-select: none;
  box-shadow: 0.25vw 0.25vw 0.4vw rgba(0, 0, 0, 0.25);
  /* letter-spacing: 0.05vw; */
  position: relative;
  z-index: 1;
  width: 100%;
  /* margin-top: auto; */
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
  :disabled {
    background: var(--granich-silver-gradient);
    :hover {
      transform: none;
      cursor: default;
      font-size: 1.61vw;
    }
  }
  @media only screen and (max-width: 575px) {
    font-size: 5.5vw;
    /* margin: 0 5vw; */
    padding: 3vw 5vw 4vw 5vw;
    border-radius: 1.5vw;
    /* margin-bottom: 2vw; */
    box-shadow: 0.7vw 0.7vw 1.5vw rgba(0, 0, 0, 0.3);
    align-self: center;
    width: 100%;
    :hover {
      font-size: 5.5vw;
      transform: scale(1);
    }
    svg {
      width: 5vw;
      height: 5vw;
      margin-left: 0;
      margin-right: 1vw;
    }
  }
`

export const Notice = styled.div`
  padding: 2vw;
  padding-top: 0;
  font-size: 1.46vw;
  line-height: 1.4;
`

export const BusyWarning = styled.div`
  margin: 0 2vw;
  padding: 1vw;
  border: 2px solid rgba(203, 161, 129, 1);
  border-radius: 0.5vw;

  display: flex;

  span {
    color: rgba(203, 161, 129, 1);
    font-size: 1.46vw;
    line-height: 1.4;
  }
  svg {
    width: 4vw;
    height: 6vw;
    min-width: 3.2vw;
    min-height: 5vw;
    margin-right: 1.5vw;
    fill: rgba(203, 161, 129, 1);
  }
  @media only screen and (max-width: 575px) {
    padding: 4vw;
    margin: 0 5vw;
    border-radius: 1.5vw;
    /* margin-bottom: 5vw; */
    span {
      color: rgba(203, 161, 129, 1);
      font-size: 4vw;
      line-height: 1.4;
    }
    svg {
      width: 10vw;
      height: 14vw;
      min-width: 10vw;
      min-height: 14vw;
      margin-right: 3vw;
      position: relative;
      top: 1vw;
    }
  }
`

export const Warning = styled.div`
  margin: 0 2vw;
  padding: 1vw;
  border: 2px solid var(--granich-red);
  border-radius: 0.5vw;

  display: flex;

  span {
    color: var(--granich-red);
    font-size: 1.46vw;
    line-height: 1.4;
  }
  svg {
    width: 3vw;
    height: 3vw;
    min-width: 3vw;
    min-height: 3vw;
    margin-right: 1.5vw;
    fill: var(--granich-red);
  }
  @media only screen and (max-width: 575px) {
    padding: 4vw;
    margin: 0 5vw;
    border-radius: 1.5vw;
    /* margin-bottom: 5vw; */
    span {
      color: var(--granich-red);
      font-size: 4vw;
      line-height: 1.4;
    }
    svg {
      width: 7vw;
      height: 7vw;
      min-width: 7vw;
      min-height: 7vw;
      margin-right: 3vw;
    }
  }
`
