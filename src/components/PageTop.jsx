import React from 'react'
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';
import PageUpIcon from '../assets/svgs/page-up.svg';



const PageUpWrapper = styled(props => <PageUpIcon {...props}/>)`
    position: fixed;
    bottom: 7vw;
    transition: all 0.3s ease;
    :hover {
        cursor: pointer;
        transform: scale(1.1)
    }
    @media only screen and (max-width: 575px) {
        display: none;
    }
`




const PageTop = () => {

    return (
        <PageUpWrapper style={{right: '4.3vw'}} onClick={() => scrollTo('#header')}/>
    )
}

export default PageTop

