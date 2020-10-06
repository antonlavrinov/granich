import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import Check from '../assets/svgs/graph-design/graph-design-training-path-check.svg';

const CookiesWrapper = styled.div`
    background: var(--granich-red);
    border-radius: 0.5vw;
    padding: 2vw 2.3vw;
    position: fixed;
    bottom: 2vw;
    left: 50%;
    box-shadow: 0 0 1vw rgba(0,0,0,0.3);
    transform: translateX(-50%);
    z-index: 900;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 575px) {
        width: 100%;
        border-radius: 0;
        bottom: 0;
        flex-direction: column;
        padding: 4vw;
        box-shadow: 0 0 3vw rgba(0,0,0,0.3);
    }
`

const CookiesText = styled.div`
    font-size: 1.5vw;
    margin-right: 2vw;
    min-width: 40vw;
    color: white;
    font-weight: 400;
    span {
        font-family: EB Garamond;
        color: inherit;
        font-style: italic;
        font-size: 2.3vw;
        line-height: 0;
        font-weight: 400;
    }
    @media only screen and (max-width: 575px) {
        display: none;
    }
`
const CookiesTextMobile = styled.div`
    display: none;
    @media only screen and (max-width: 575px) {
        display: block;
        font-size: 3.7vw;
        margin-bottom: 4vw;
        color: white;
        font-weight: 400;
        line-height: 1.3;
        span {
            font-family: EB Garamond;
            color: inherit;
            font-style: italic;
            line-height: 0;
            font-weight: 400;
            font-size: 5vw;
        }
    }
`

const CookiesButton = styled.div`
    background: var(--granich-black-gradient);
    color: white;
    padding: 1vw 3vw;
    border-radius: 0.5vw;
    font-size: 1.65vw;
    transition: transform 0.3s ease;
    box-shadow: 0.2vw 0.2vw 0.4vw rgba(0,0,0,0.4);
    white-space: nowrap;
    display: flex;
    align-items: center;
    svg {
        fill: white;
        width: 1.5vw;
        margin-top: 0.1vw;
        margin-left: 0.4vw;
        
    }
    :hover {
        cursor: pointer;
        transform: scale(1.05);
    }
    @media only screen and (max-width: 575px) {
        justify-content: center;
        font-size: 4.4vw;
        padding: 4vw 8vw;
        border-radius: 1.5vw;
        box-shadow: 0.5vw 0.5vw 1vw rgba(0,0,0,0.25);
        width: 100%;
        text-align: center;
        svg {
            width: 4vw;
            margin-left: 1vw;
            
        }
        :hover {
            transform: none;
        }
    }
    

`


const Cookies = () => {
    const [cookies, setCookies] = useState(false);
    useEffect(() => {
        if(localStorage.getItem('cookiesGranich')) {
        
        } else {

            setCookies(true)  
        }

    }, [])


    const removeCookies = () => {
        localStorage.setItem('cookiesGranich', 1)
        setCookies(false)  
    }

    return (
        <>
            {cookies && (
                <CookiesWrapper>
                    <CookiesText>
                        Да, это соглашение на использование <span>cookies</span>. Пожалуйста, подтвердите его и закончим на этом ;)
                    </CookiesText>
                    <CookiesTextMobile>
                        Да, это соглашение на использование <span>cookies</span>. Подтвердите его и закончим на этом ;)
                    </CookiesTextMobile>
                    <CookiesButton onClick={removeCookies}>Даю добро<Check/></CookiesButton>
                    
                </CookiesWrapper>
            )}
        </>

    )
}

export default Cookies