import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`




    * {
        font-family: 'Inter', sans-serif;
        --granich-red: rgb(228, 5, 33);
        --granich-black: #2d2d2d;
        --granich-background-color: #f2f2f2;
        --granich-grey: #888989;
        color: var(--granich-black);
        --granich-red-gradient: linear-gradient(167deg, rgba(230,25,51,1) 0%, rgba(213,12,34,1) 39%, rgba(189,3,27,1) 61%);
        --granich-red-gradient-horizontal: linear-gradient(90deg, rgba(230,25,51,1) 0%, rgba(213,12,34,1) 50%, rgba(189,3,27,1) 100%);

        letter-spacing: 0vw;
        font-weight: 400;
    }

    body {
        background: var(--granich-background-color);

    }
    



`


export const Container = styled.div`
    // width: 78%;
    width: 1024px;
    max-width: 1024px;
    margin: 0 auto;

    // @media(max-width: 991px) {
    //     width: 90%;
    // }

`

