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
  outline: 2px solid white;
  
  @media only screen and (max-width: 575px) {
    width: 20vw;
    height: 20vw;
    min-width: 20vw;
    min-height: 20vw;
  }
`;

export const MainInfo = styled.div`
  min-width: 18vw;
  margin-right: 1.2vw;
  margin-top: 0.3vw;
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
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  margin-left: -0.2vw;
`;

export const Price = styled.div`
  color: white;
  font-family: EB Garamond;
  font-size: 3vw;
  font-style: italic;
  font-weight: 500;
  margin-right: 1vw;
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
    font-size: 4.4vw;
    padding: 3vw 8vw;
    border-radius: 1.5vw;
    box-shadow: 0.5vw 0.5vw 1vw rgba(0, 0, 0, 0.25);

    span {
      font-size: 2.5vw;
    }

    svg {
      width: 11vw;
      height: 11vw;
    }
    
    :hover {
      transform: none;
    }
  }
`;

export const AdditionalInfo = styled.div`
  color: rgba(256, 256, 256, 0.45);
  font-size: 0.9vw;
  line-height: 1.25;
  transition: color 0.1s ease;
  margin-top: 0.3vw;
  position: relative;

  svg {
    position: absolute;
    right: 0.6vw;
    top: 0;
    width: 1.2vw;
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
`;

export const TooltipContent = styled.div`
  max-width: 5vw;
`;