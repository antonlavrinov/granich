import styled from "styled-components"
import Img from "gatsby-image";

export const Section = styled.section`
  margin-bottom: 4vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
  }
`;

export const Wrapper = styled.div`
    padding: 3vw 2vw 2vw;
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
    /* outline: 1px solid rgba(0,0,0,0.1); */
    box-shadow: 0 0 0.5vw rgba(0,0,0,0.15)
`;

export const ShowMoreWrapper = styled.div`
    background: linear-gradient(0deg, rgba(255,255,255,1) 40%, rgba(255,255,255,0) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12vw 0 0;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    /* :hover {
        cursor: pointer;
    } */

    button {
        font-size: 1.35vw;
        display: block;
        padding: 1.2vw 0;
        background: var(--granich-grey);
        background: rgba(0,0,0,0.05);
        border-radius: 0.5vw;
        width: 100%;
        position: relative;
        color: var(--granich-grey);
        /* :after {
            position: absolute;
            content: "";
            bottom: 0;
            left: 0;
            width: 100%;
            border-bottom: 1px solid rgba(0,0,0,0.15);
        } */
        :hover {
            cursor: pointer;
            background: rgba(0,0,0,0.08);
            /* :after {
                border-bottom: none;
            } */
        }

    }
`;

export const Image = styled(Img)`
    width: "100%";
`;

export const PosterAuthor = styled.div`
    background: var(--granich-black);
    /* background: rgb(30, 30, 30); */
    padding: 1.5vw 1vw 1vw;
    margin-top: -8px;
`;

export const AuthorStream = styled.div`
    color: white;
    border: 1px solid white;
    display: inline-block;
    padding: 0.3vw 0.5vw;
    border-radius: 100vw;
    font-size: 0.9vw;
    margin-bottom: 0.4vw;
`;

export const AuthorName = styled.div`
    color: white;
    font-size: 1.15vw;
`;