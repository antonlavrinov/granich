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
        letter-spacing: 0vw;
        font-weight: 400;
    }

    body {
        background: var(--granich-background-color);

    }
    



`


export const Container = styled.div`
    width: 78%;
    width: 1024px;
    max-width: 1024px;
    margin: 0 auto;

    // @media(max-width: 991px) {
    //     width: 90%;
    // }

`

