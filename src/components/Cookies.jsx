import React, {useEffect, useState} from 'react'
import styled from 'styled-components';


const CookiesWrapper = styled.div`
    // width: 10vw;
    // height: 5vw;
    background: white;
    // background: var(--granich-black-gradient);
    // background: linear-gradient(145deg, rgba(136,137,137,1) 0%, rgba(79,79,79,1) 100%);
    // background: linear-gradient(90deg, rgba(185,185,185,1) 0%, rgba(143,143,143,1) 100%);
    // background: linear-gradient(90deg, rgba(203,161,129,1) 0%, rgba(181,141,110,1) 100%);
    // background: linear-gradient(145deg, rgba(181,140,109,1) 0%, rgba(145,106,77,1) 100%);
    background: var(--granich-red-gradient-horizontal);
    background: var(--granich-red);
    // background: var(--granich-black-gradient);
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
        padding: 3vw;
        box-shadow: 0 0 3vw rgba(0,0,0,0.3);
    }
`

const CookiesText = styled.div`
    font-size: 1.5vw;
    margin-right: 2vw;
    min-width: 40vw;
    color: white;
    // color: var(--granich-black);
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
        font-size: 4vw;
        margin-right: 0;
        margin-bottom: 4vw;
        span {
            font-size: 5vw;
        }
    }
`

const CookiesButton = styled.div`
    background: var(--granich-black-gradient);
    // background: linear-gradient(145deg, rgba(181,140,109,1) 0%, rgba(145,106,77,1) 100%);
    // background: var(--granich-red-gradient-horizontal);
    color: white;
    padding: 1vw 3vw;
    border-radius: 0.5vw;
    font-size: 1.65vw;
    transition: transform 0.3s ease;
    box-shadow: 0.2vw 0.2vw 0.4vw rgba(0,0,0,0.4);
    :hover {
        cursor: pointer;
        transform: scale(1.05);
    }
    @media only screen and (max-width: 575px) {
        font-size: 4.4vw;
        padding: 3vw 8vw;
        border-radius: 1.5vw;
        box-shadow: 0.5vw 0.5vw 1vw rgba(0,0,0,0.25);
        width: 100%;
        text-align: center;
        :hover {
            transform: none;
        }
    }
    

`


const Cookies = () => {
    const [cookies, setCookies] = useState(false);
    useEffect(() => {
        if(localStorage.getItem('cookiesGranich')) {
            // console.log('COOKIES', localStorage.getItem('cookiesGranich'))           
        } else {
            // localStorage.setItem('cookiesGranich', 1)
            setCookies(true)  
        }
        // localStorage.removeItem('cookiesGranich')
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
                    <CookiesButton onClick={removeCookies}>Добро</CookiesButton>
                    
                </CookiesWrapper>
            )}
        </>

    )
}

export default Cookies
