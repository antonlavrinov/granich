import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';
// import {scrollToElem} from '../utils/scroll-behavior';



const PageTopWrapper = styled.div`
    position: fixed;
    bottom: 0;
    transition: all 0.5s ease;
    background: black;
`


const PageTop = () => {
    const [pageTop, setPageTop] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 900) {
                setPageTop(true)
            } else {
                setPageTop(false)
            }
        })
    }, [])

    return (
        <PageTopWrapper style={{right: `${pageTop ? '0' : '-50px'}`}} onClick={() => scrollTo('#offer')}>
            TOP
        </PageTopWrapper>
    )
}

export default PageTop
