import styled from "styled-components"
import Img from "gatsby-image";
import Zoom from "react-medium-image-zoom"

export const Section = styled.section`
  margin-bottom: 4vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
  }
`;

export const StyledZoom = styled(Zoom)`

`

export const Wrapper = styled.div`
    padding: 3vw 1vw 2vw;
    background: white;
    border-radius: 0.6vw;
    @media only screen and (max-width: 575px) {
        border-radius: 2.5vw;
        padding: 5vw 1vw 2vw;
    }
`;

export const SectionTitle = styled.h2`
  color: var(--granich-black);
  font-size: 4.55vw;
  letter-spacing: -0.2vw;
  padding: 0 1.5vw;
  font-weight: 700;
  line-height: 0.85;
  /* margin-bottom: 3vw; */

  @media only screen and (max-width: 575px) {
    font-size: 11vw;
    letter-spacing: -0.7vw;
    line-height: 1;
    margin-bottom: 2vw;
    padding: 0 4vw;
  }
`

export const MasonryWrapper = styled.div`
    position: relative;
`;

export const MasonryOverflow = styled.div`
    position: relative;
    padding: 3vw 1vw;
    overflow-y: hidden;
    max-height: ${({ isShowMore }) => isShowMore ? "auto" : "70vw"};

    @media only screen and (max-width: 575px) {
        max-height: ${({ isShowMore }) => isShowMore ? "auto" : "200vw"};
    }
    
`;

export const PosterWrapper = styled.div`
    position: relative;
    border-radius: 0.5vw;
    overflow: hidden;
    /* outline: 1px solid rgba(0,0,0,0.1); */
    box-shadow: 0 0 0.5vw rgba(0,0,0,0.15);
    transition: all 0.2s ease;
    min-width: 14vw;
    min-height: 14vw;

    [data-rmiz-btn-open] {
        cursor: pointer;
    }

    :hover {
        transform: scale(1.07);
        cursor: pointer;
        .poster-author {
            bottom: -4vw;
            /* visibility: hidden; */
            opacity: 0;
            /* z-index: -1; */
            
        }
    }

    @media only screen and (max-width: 575px) {
        border-radius: 1.5vw;
        min-width: 30vw;
        min-height: 30vw;

        :hover {
            transform: none;
            cursor: pointer;
            .poster-author {
                bottom: 0;
                opacity: 1;
            }
        }
    }
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

    button {
        margin: 0 2.5vw 2vw;
        font-size: 1.35vw;
        display: block;
        padding: 1.2vw 0;
        background: var(--granich-grey);
        background: rgba(0,0,0,0.05);
        border-radius: 0.5vw;
        width: 100%;
        position: relative;
        color: var(--granich-grey);
        :hover {
            cursor: pointer;
            background: rgba(0,0,0,0.08);
        }

    }

    @media only screen and (max-width: 575px) {
        padding: 30vw 0 0;
        button {
            font-size: 3.7vw;
            padding: 3vw 0;
            border-radius: 1.5vw;
        }
    }
`;

export const Image = styled.img`
    width: 100%;

    height: 100% !important;

    object-fit: cover;
    /* height: 100%; */
    @media only screen and (max-width: 575px) {
        /* min-width: 30vw;
        min-height: 30vw; */
    }
`;

export const PosterAuthor = styled.div.attrs({ className: "poster-author"})`
    background: linear-gradient(0deg, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0) 100%);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 2.5vw 0.6vw 0.7vw;
    margin-top: -8px;
    transition: all 0.3s ease;
    opacity: 1;
    margin-right: 0.5vw;

    @media only screen and (max-width: 575px) {
        padding: 5vw 2vw 2vw;
    }
`;

export const Course = styled.div`
    color: rgba(256,256,256,0.7);
    display: inline-block;
    display: block;
    font-size: 0.9vw;

    @media only screen and (max-width: 575px) {
        font-size: 2.7vw;
    }
`;

export const AuthorName = styled.div`
    display: inline-block;
    display: block;
    color: white;
    font-size: 0.9vw;
    position: relative;
    line-height: 1.3;
    margin-right: 0.2vw;
    font-weight: bold;

    @media only screen and (max-width: 575px) {
        font-size: 2.7vw;
    }
`;