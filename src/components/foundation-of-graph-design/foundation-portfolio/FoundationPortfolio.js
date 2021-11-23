import styled from "styled-components"
import Img from "gatsby-image";

export const Section = styled.section`
  margin-bottom: 4vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
  }
`;

export const Wrapper = styled.div`
    padding: 4vw 2vw;
    background: white;
    border-radius: 0.6vw;
    @media only screen and (max-width: 575px) {
        border-radius: 2.5vw;
    }
`;

export const SectionTitle = styled.h2`
  color: var(--granich-black);
  font-size: 4.55vw;
  letter-spacing: -0.2vw;
  font-weight: 700;
  line-height: 0.85;
  margin-bottom: 3vw;

  @media only screen and (max-width: 575px) {
    font-size: 11vw;
    letter-spacing: -0.7vw;
    line-height: 1;
    margin-bottom: 4vw;
  }
`

export const MasonryWrapper = styled.div`
    position: relative;
`;

export const MasonryOverflow = styled.div`
    position: relative;
    overflow-y: hidden;
    max-height: ${({ isShowMore }) => isShowMore ? "auto" : "70vw"};
    
`;

export const PosterWrapper = styled.div`
    position: relative;
    border-radius: 0.5vw;
    overflow: hidden;
`;

export const ShowMoreWrapper = styled.div`
    background: linear-gradient(0deg, rgba(255,255,255,1) 40%, rgba(255,255,255,0) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20vw 0 3vw;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    button {
        font-size: 1.35vw;
        display: block;
        padding: 1vw 3vw;
        background: none;
        :hover {
            cursor: pointer;
            
        }
    }
`;

export const Image = styled(Img)`
    width: "100%";
`;

export const PosterAuthor = styled.div`
    background: var(--granich-black);
    padding: 1vw;
    margin-top: -8px;
`;

export const AuthorStream = styled.div`
    color: white;
    border: 1px solid white;
    display: inline-block;
    padding: 0.3vw 0.6vw;
    border-radius: 1vw;
    font-size: 0.9vw;
    margin-bottom: 0.4vw;
`;

export const AuthorName = styled.div`
    color: white;
    font-size: 1.15vw;
`;