import React from 'react'
import styled from 'styled-components';
import BackgroundImage from 'gatsby-image';
import Img from 'gatsby-image';
import { OutboundLink } from "gatsby-plugin-google-analytics"

export const PodborkaOut = styled(props => <Img {...props}/>)`
    width: 2.3vw;
    display: block;
    @media only screen and (max-width: 575px) {
        width: 6.5vw;
    }
`

export const  Behance = styled(props => <Img {...props}/>)`
    width: 2.3vw;
    display: block;
    margin-right: -0.4vw;
    @media only screen and (max-width: 575px) {
        width: 6.5vw;
        margin-right: -1.4vw;
    }
`

export const  BehanceMixed = styled(props => <Img {...props}/>)`
    width: 2.7vw;
    @media only screen and (max-width: 575px) {
        width: 7vw;
    }
`

export const  Youtube = styled(props => <Img {...props}/>)`
    height: auto;
    width: 3.3vw;
    margin-right: -0.7vw;
    display: block;
    margin-top: 0.05vw;
    @media only screen and (max-width: 575px) {
        height: auto;
        width: 9.5vw;
        margin-right: -2vw;
    }
`

export const  YoutubeMixed = styled(props => <Img {...props}/>)`
    height: auto;
    width: 4.5vw;
    margin-left: -0.1vw;
    display: block;
    @media only screen and (max-width: 575px) {
        height: auto;
        width: 10.8vw;
        margin-left: -1vw;
    }
`
export const Medium = styled(props => <Img {...props}/>)`
    width: 2.7vw;
    margin-right: 0.4vw;
    display: block;
    @media only screen and (max-width: 575px) {
        width: 7vw;
    }
`

export const ContentLinkIcon = styled(props => <Img {...props}/>)`
    width: 2.3vw;
    display: block;
    margin-right: -0.4vw;
    @media only screen and (max-width: 575px) {
        width: 6.5vw;
        margin-right: -1.4vw;
    }
`

export const ContentLinkOutIcon = styled(props => <Img {...props}/>)`
    width: 2.2vw;
    display: block;
    @media only screen and (max-width: 575px) {
        width: 6.5vw;
    }
`

export const  Pinterest = styled(props => <Img {...props}/>)`
    width: 2.2vw;
    display: block;
    margin-right: -0.4vw;
    @media only screen and (max-width: 575px) {
        width: 6.5vw;
    }


`
export const  PinterestOut = styled(props => <Img {...props}/>)`
    width: 2.2vw;
    display: block;
    @media only screen and (max-width: 575px) {
        width: 6.5vw;
    }
    ${props => props.mixed && `
        width: 2.2vw;
        width: 2.5vw;
        margin-left: -0.7vw;
        margin-right: 0.2vw;
    `}

`
export const  BehanceOut = styled(props => <Img {...props}/>)`
    width: 2.2vw;
    display: block;
    @media only screen and (max-width: 575px) {
        width: 6.5vw;
    }
`

export const  ContentWrapperLink = styled.a`
    background: #2b2b2b;
    border-radius: 0.5vw;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    height: 100%;
    min-height: 20.3vw;
    :hover {
        transform: scale(1.03);
        cursor: pointer;
    }
    @media only screen and (max-width: 575px) {
        border-radius: 1.5vw;
        min-height: 56vw;
        :hover {
            transform: none;
        }
    }
    ${props => props.podborka && `
        background: #CBA181;
        background: linear-gradient(90deg, rgba(203,161,129,1) 0%, rgba(181,141,110,1) 100%);
    `}


`

export const  ContentWrapperExternalLink = styled(props => <OutboundLink {...props}/>)`
    background: red;
    border-radius: 0.5vw;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    // height: 20.3vw;
    height: 100%;
    min-height: 20.3vw;
    :hover {
        cursor: pointer;
        transform: scale(1.03);
    }
    ${props => props.pinterest && `
        background: #830404;
    ` }
    ${props => props.behance && `
        background: #0E3983;
    ` }   
    ${props => props.medium && `
        background: var(--granich-light-grey);

        background: linear-gradient(90deg, rgba(185,185,185,1) 0%, rgba(143,143,143,1) 100%);
    ` }
    @media only screen and (max-width: 575px) {
        min-height: 56vw;

        border-radius: 1.5vw;
        :hover {
            transform: none;
        }
    } 
`

export const  ContentContainer = styled.div`
    padding: 0.5vw 1.05vw 0.7vw;
    @media only screen and (max-width: 575px) {
        padding: 1.9vw 2.8vw 2.2vw;
    }
`



export const  ContentTagList = styled.div`
    display: flex;
    margin-bottom: 0.7vw;
    margin-left: -0.2vw;
    margin-right: -0.2vw;
    margin-top: 0.3vw;
    flex-wrap: wrap;
    line-height: 1;
    @media only screen and (max-width: 575px) {
        // margin-bottom: 2vw;
        margin-top: 0.5vw;
        margin-bottom: 1vw;
    }
`


export const  ContentTag = styled.div`
    border: 1px solid white;
    color: white;
    border-radius: 100vw;
    font-weight: 400;
    font-size: 0.9vw;
    padding: 0.3vw 0.5vw 0.3vw;
    display: inline-block;
    letter-spacing: -0.03vw;
    margin-right: 0.3vw;
    :last-child {
        margin-right: 0;
    }
    @media only screen and (max-width: 575px) {


        border-width: 1px;
        font-size: 2.5vw;
        padding: 0.4vw 1vw 0.4vw;
        font-weight: 500;
        margin-right: 1vw;
        letter-spacing: -0.05vw;
        margin-bottom: 1vw;
    }
`

export const  ContentTitle = styled.h4`
    font-size: 1.25vw;
    line-height: 1.2;
    font-weight: 500;
    letter-spacing: -0.05vw;
    color: white;
    max-width: 14vw;
    margin-left: -0.2vw;
    @media only screen and (max-width: 575px) {

        font-size: 3.8vw;
        max-width: 100%;
    }
`

export const  ContentImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    margin-bottom: 1vw;
    max-height: 7.8vw;
    min-height: 7.8vw;
    height: 7.8vw;
    @media only screen and (max-width: 575px) {
        max-height: 21vw;
        margin-bottom: 2.8vw;
        min-height: 21vw;
        height: 21vw;
    }
`

export const  ContentDescr = styled.div`
    margin-top: 0.3vw;
    max-width: 14vw;
    margin-left: -0.2vw;
    p {    
        font-size: 0.9vw;
        color: white;
        font-weight: 400;
        letter-spacing: -0.01vw;
        line-height: 1.15;
        i {
            color: inherit;
        }
    }

    @media only screen and (max-width: 575px) {
        max-width: 100%;
        margin-top: 1vw;
        p { 
            font-size: 2.8vw;
        } 

    }
`



export const  ContentButton = styled.div`
    background: none;
    border-radius: 0 0 0.5vw 0.5vw;
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    padding: 1vw 1.1vw 1vw;
    align-items: center;
    ${props => props.youtube && `
    background: #222222;
    ` }
    ${props => props.podborka && `
        background: #A67B5B;
        align-items: center;
        background: linear-gradient(145deg, rgba(181,140,109,1) 0%, rgba(145,106,77,1) 100%);
    ` }
    ${props => props.pinterest && `
        background: #4C0101;
    ` }
    ${props => props.behance && `
        background: #011E4B;
    ` }
    ${props => props.medium && `
        background: var(--granich-grey);
        background: linear-gradient(145deg, rgba(136,137,137,1) 0%, rgba(79,79,79,1) 100%);
    ` }
    ${props => props.mixed && `
        align-items: flex-start;
    `}

    @media only screen and (max-width: 575px) {
        border-radius: 0 0 1.5vw 1.5vw;
        padding: 2.4vw 3vw 2.4vw;
    }
`




export const  ContentButtonText = styled.div`
    color: white;
    font-size: 1.3vw;
    font-weight: 500;
    line-height: 0.95;

    margin-left: -0.1vw;
    @media only screen and (max-width: 575px) {
        font-size: 4vw;
    }

`

export const  ContentIconsWrapper = styled.div`
    display: flex;
    margin-right: -0.4vw;
    align-items: center;
    margin-top: 0.1vw;

    @media only screen and (max-width: 575px) {
        margin-right: -1vw;

    }
`
export const  YoutubeIconsWrapper = styled.div`
    display: flex;
    margin-right: -0.4vw;
    align-items: center;
    @media only screen and (max-width: 575px) {
        margin-right: -1vw;
    }
`


// YOUTUBE
export const  ContentButtonYoutubeTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 0.8vw;
`

export const  ContentButtonYoutubeText = styled.div`

    margin-top: -1vw;
    color: white;
    font-size: 1.3vw;
    font-weight: 500;
    line-height: 0.95;

    margin-left: -0.1vw;
    @media only screen and (max-width: 575px) {
        font-size: 3.6vw;
    }
`

export const  ContentButtonYoutubeTiming = styled.div`
    color: white;
    font-size: 0.67vw;
    margin-top: 0.2vw;
    @media only screen and (max-width: 575px) {
        font-size: 2vw;
        margin-top: 0.6vw;
    }

`




// MIXED

export const  ContentButtonWatchBlockWrapper = styled.div`
    
`

export const  ContentButtonWatchBlock = styled.div`
    display: flex;
    align-items: flex-end;
    margin-left: -0.15vw;
`
export const  ContentButtonBlockTitle = styled.div`
    color: grey;
    font-size: 0.8vw;
    margin-bottom: 0.3vw;
    @media only screen and (max-width: 575px) {
        font-size: 2.5vw;
        margin-bottom: 1vw;
    }
`

export const  ContentButtonReadBlockWrapper = styled.div`
    margin-bottom: -0.6vw;
    display: flex;
    flex-direction: column;

    ${props => props.mixedPinterest && `
     align-items: flex-end;
    `}

`

export const  ContentButtonReadBlock = styled.div`
    margin-right: -0.3vw;
    display: flex;
    @media only screen and (max-width: 575px) {
        margin-right: -1vw;
    }
`
export const  ContentButtonMixedTiming = styled.div`
    color: white;
    font-size: 0.67vw;
    padding-bottom: 0.3vw;
    @media only screen and (max-width: 575px) {
        font-size: 2vw;
        padding-bottom: 0.8vw;
    }

`