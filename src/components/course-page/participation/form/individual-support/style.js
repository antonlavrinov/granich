import styled from "styled-components";
import Img from "gatsby-image";

export const Wrapper = styled.div`
  width: 95%;
  background: var(--granich-dark-red);
  margin: 0 auto;
  border-radius: 0 0 0.6vw 0.6vw;
  padding: 0.9vw 1.3vw;
  display: flex;

  @media only screen and (max-width: 575px) {
    border-radius: 0 0 2.5vw 2.5vw;
    padding: 4.5vw 4vw 5vw;
    flex-direction: column;
    align-items: end;
  }
`;

export const MainInfoWrapper = styled.div`
  display: flex;
`;

export const AuthorImage = styled(Img)`
  min-width: 3.3vw;
  min-height: 3.3vw;
  width: 3.3vw;
  height: 3.3vw;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.8vw;
  border: 2px solid white;
  
  @media only screen and (max-width: 575px) {
    width: 15vw;
    height: 15vw;
    min-width: 15vw;
    min-height: 15vw;
    margin-right: 3vw;
  }
`;

export const MainInfo = styled.div`
  min-width: 18vw;
  margin-right: 1.2vw;
  margin-top: 0.3vw;

  @media only screen and (max-width: 575px) {
    margin-right: 0;
    min-width: auto;
  }
`;

export const Title = styled.div`
  color: white;
  font-size: 0.97vw;
  line-height: 1.3;
  margin-bottom: 0.2vw;

  b {
    color: white;
    display: block;
  }

  @media only screen and (max-width: 575px) {
    font-size: 2.7vw;
    margin-bottom: 2vw;
    white-space: nowrap;

    b {
      font-size: 3.1vw;
      white-space: nowrap;
    }
  }
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  margin-left: -0.2vw;

  @media only screen and (max-width: 575px) {
    margin-bottom: 2vw;
  }
`;

export const Price = styled.div`
  color: white;
  font-family: EB Garamond;
  font-size: 3vw;
  font-style: italic;
  font-weight: 500;
  margin-right: 1vw;

  @media only screen and (max-width: 575px) {
    font-size: 8vw;
    margin-right: 4vw;
  }
`;

export const Button = styled.a`
  background: var(--granich-black-gradient);
  color: white;
  padding: 0.6vw;
  text-align: center;
  border-radius: 0.5vw;
  font-size: 1vw;
  transition: transform 0.3s ease;
  box-shadow: 0.2vw 0.2vw 0.4vw rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;

  :hover {
    color: white;
    font-size: 1vw;
  }

  svg {
    width: 1.5vw;
    height: 1.5vw;
    transition: all 0.3s ease;
    transform: scale(1.35);
    margin-right: 0.5vw;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media only screen and (max-width: 575px) {
    font-size: 2.5vw;
    padding: 2vw;
    border-radius: 1.5vw;
    box-shadow: 0.5vw 0.5vw 1vw rgba(0, 0, 0, 0.25);

    span {
      font-size: 2.5vw;
    }

    svg {
      width: 4vw;
      height: 4vw;
      transform: scale(1.3);
      margin-right: 1vw;
      
    }
    
    :hover {
      transform: none;
      font-size: 2.5vw;
    }
  }
`;

export const AdditionalInfo = styled.div`
  color: rgba(256, 256, 256, 0.45);
  font-size: 0.9vw;
  line-height: 1.35;
  transition: color 0.1s ease;
  margin-top: 0.3vw;
  position: relative;
  /* display: inline-block; */
  text-decoration: underline dotted;
  /* line-height: 1.5 !important; */
  /* border-bottom: 1.5px dashed rgba(256,256,256,0.2); */
  text-underline-offset: 2px;
  text-decoration-color: rgba(256,256,256,0.3);

  svg {
    position: absolute;
    right: 0.6vw;
    top: 0;
    width: 1.2vw;
    height: 1.2vw;
    fill: rgba(256, 256, 256, 0.35);
    transition: fill 0.1s ease;
  }

  :hover {
    cursor: pointer;
    color: rgba(256, 256, 256, 0.6);

    svg {
      fill: rgba(256, 256, 256, 0.45);
    }
  }

  @media only screen and (max-width: 575px) {
    margin-left: 18vw;
    margin-top: 0;
    font-size: 2.7vw;
    display: flex;
    align-items: center;

    svg {
      display: block;
      right: auto;
      /* top: 1vw; */
      width: 6vw;
      height: 6vw;
      min-width: 6vw;
      min-height: 6vw;
      margin-right: 2vw;
      position: relative;
      fill: rgba(256, 256, 256, 0.3);
    }
  }
`;

export const TooltipContent = styled.div`
  max-width: 20vw;
  color: var(--granich-grey);
  line-height: 1.3;
  text-align: left;
  padding: 0.2vw;

  span {
    display: block;
    margin: 0.5vw 0;
    color: var(--granich-grey);
    position: relative;
    padding-left: 0.8vw;

    :after {
      content: "";
      position: absolute;
      top: 0.4vw;
      left: 0;
      width: 0.25vw;
      height: 0.25vw;
      background: var(--granich-grey);
      border-radius: 50%;
    }
  }

  @media only screen and (max-width: 575px) {
    padding: 1vw;
    font-size: 2.75vw;
    max-width: 60vw;

    span {
      padding-left: 2vw;
      margin: 1vw 0;

      :after {
        content: "";
        position: absolute;
        top: 1.4vw;
        left: 0;
        width: 0.7vw;
        height: 0.7vw;
        background: var(--granich-grey);
        border-radius: 50%;
      }
    }
  }
`;